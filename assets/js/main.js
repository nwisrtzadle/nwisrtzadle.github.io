document.addEventListener('DOMContentLoaded', () => {
    const essayPageContainer = document.querySelector('.essay-page-container');
    if (!essayPageContainer) return;

    // --- GRAB ALL THE ELEMENTS ---
    const tabs = essayPageContainer.querySelector('.content-tabs');
    const filters = essayPageContainer.querySelector('.sidebar-filter-controls');
    const freeEssayList = essayPageContainer.querySelector('.essay-list');
    const freeEssayViewer = essayPageContainer.querySelector('#essay-viewer-content');
    const paidBundlesList = essayPageContainer.querySelector('#paid-bundles-list');
    const bundleCards = paidBundlesList.querySelectorAll('.bundle-card');
    const bundlePaynowButtons = essayPageContainer.querySelectorAll('.bundle-paynow-btn');
    const premiumNudge = essayPageContainer.querySelector('.sidebar-premium-nudge');

    let currentMode = 'free';

    // --- LOGIC TO SHOW/HIDE VIEWS ---
    const showView = (mode) => {
        currentMode = mode;
        const freeTab = tabs.querySelector('[data-target="#essay-viewer-content"]');
        const paidTab = tabs.querySelector('[data-target="#paid-bundles-list"]');

        if (mode === 'paid') {
            freeEssayViewer.classList.add('hidden');
            freeEssayList.classList.add('hidden');
            if (premiumNudge) premiumNudge.classList.add('hidden');
            paidBundlesList.classList.remove('hidden');
            paidTab.classList.add('active');
            freeTab.classList.remove('active');
        } else { // 'free' mode
            paidBundlesList.classList.add('hidden');
            freeEssayViewer.classList.remove('hidden');
            freeEssayList.classList.remove('hidden');
            if (premiumNudge) premiumNudge.classList.remove('hidden');
            freeTab.classList.add('active');
            paidTab.classList.remove('active');
        }
    };

    // --- LOGIC TO READ THE URL AND SET THE CORRECT VIEW ---
    const handleURLState = () => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('view') === 'paid') {
            showView('paid');
        } else {
            showView('free');
            // Make sure the correct free essay link is active in the sidebar
            const currentActive = freeEssayList.querySelector('.active');
            if (currentActive) currentActive.classList.remove('active');
            const linkToActivate = freeEssayList.querySelector(`a[href*="${window.location.pathname}"]`);
            if (linkToActivate) linkToActivate.classList.add('active');
        }
    };

    // --- TAB CLICK LOGIC WITH URL UPDATING ---
    tabs.addEventListener('click', (event) => {
        if (event.target.tagName !== 'BUTTON') return;
        const targetId = event.target.getAttribute('data-target');

        if (targetId === '#paid-bundles-list') {
            // Manually change the URL when Paid Bundles is clicked
            const newUrl = new URL(window.location.origin + '/essays/');
            newUrl.searchParams.set('view', 'paid');
            history.pushState({}, '', newUrl);
            showView('paid');
        } else {
            // Find the first free essay to link to
            const firstEssayLink = freeEssayList.querySelector('a.essay-list-item');
            if (firstEssayLink) {
                history.pushState({}, '', firstEssayLink.href);
                loadEssayContent(firstEssayLink.href); // Load the first essay
            }
            showView('free');
        }
    });

    // --- FILTERING LOGIC ---
    filters.addEventListener('click', (event) => {
        if (event.target.tagName !== 'BUTTON') return;
        const filterValue = event.target.getAttribute('data-filter');

        const currentActive = filters.querySelector('.active');
        if (currentActive) currentActive.classList.remove('active');
        event.target.classList.add('active');

        if (currentMode === 'free') {
            freeEssayList.querySelectorAll('li').forEach(item => {
                const subject = item.getAttribute('data-subject');
                item.style.display = (filterValue === 'all' || filterValue === subject) ? '' : 'none';
            });
        } else {
            bundleCards.forEach(card => {
                const subject = card.getAttribute('data-subject');
                card.style.display = (filterValue === 'all' || filterValue === subject) ? '' : 'none';
            });
        }
    });

    // --- DYNAMIC ESSAY LOADING LOGIC ---
    freeEssayList.addEventListener('click', (event) => {
        if (currentMode !== 'free') return;
        const link = event.target.closest('a.essay-list-item');
        if (!link) return;
        event.preventDefault();

        const url = link.href;
        if (url === window.location.href) return;

        history.pushState({}, '', url);
        loadEssayContent(url);
    });

    const loadEssayContent = async (url) => {
        try {
            const response = await fetch(url);
            const text = await response.text();
            const newDoc = new DOMParser().parseFromString(text, 'text/html');
            const newContent = newDoc.querySelector('#essay-viewer-content').innerHTML;
            const newTitle = newDoc.querySelector('title').innerText;

            freeEssayViewer.innerHTML = newContent;
            document.title = newTitle;
            handleURLState();

            if (window.innerWidth <= 992) {
                const header = document.querySelector('.site-header');
                const targetElement = document.querySelector('.essay-content');

                if (targetElement) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }

        } catch (error) {
            console.error('Error fetching essay:', error);
            window.location.href = url;
        }
    };

    // --- HANDLE BROWSER BACK/FORWARD BUTTONS ---
    window.addEventListener('popstate', () => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('view') === 'paid') {
            showView('paid');
        } else {
            showView('free');
            loadEssayContent(window.location.href);
        }
    });

    // --- SIDEBAR PREMIUM NUDGE ---
    const nudgeBtn = essayPageContainer.querySelector('.nudge-link');
    if (nudgeBtn) {
        nudgeBtn.addEventListener('click', () => {
            const newUrl = new URL(window.location.origin + '/essays/');
            newUrl.searchParams.set('view', 'paid');
            history.pushState({}, '', newUrl);
            showView('paid');
        });
    }

    // --- PAYNOW MODAL LOGIC ---
    const paynowModal = document.getElementById('paynow-modal');
    if (paynowModal) {
        const backdrop = paynowModal.querySelector('.paynow-modal-backdrop');
        const closeBtn = paynowModal.querySelector('.paynow-modal-close');
        const bundleSelect = paynowModal.querySelector('#paynow-bundle-select');
        const bundleInfoEl = paynowModal.querySelector('.paynow-bundle-info');
        const bundleNameEl = paynowModal.querySelector('.paynow-bundle-name');
        const bundlePriceEl = paynowModal.querySelector('.paynow-bundle-price');
        const refEl = paynowModal.querySelector('.paynow-ref');

        const updateBundleInfo = () => {
            const selected = bundleSelect.options[bundleSelect.selectedIndex];
            if (selected && selected.value) {
                bundleNameEl.textContent = selected.value;
                bundlePriceEl.textContent = selected.dataset.price;
                refEl.textContent = selected.value;
                bundleInfoEl.classList.remove('hidden');
            } else {
                bundleInfoEl.classList.add('hidden');
                refEl.textContent = 'your bundle name';
            }
        };

        bundleSelect.addEventListener('change', updateBundleInfo);

        const openModal = () => {
            paynowModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            paynowModal.classList.remove('open');
            document.body.style.overflow = '';
        };

        bundlePaynowButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const bundleName = button.dataset.bundle;
                if (bundleName) {
                    bundleSelect.value = bundleName;
                    updateBundleInfo();
                }
                openModal();
            });
        });

        backdrop.addEventListener('click', closeModal);
        closeBtn.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && paynowModal.classList.contains('open')) {
                closeModal();
            }
        });
    }

    // --- SET INITIAL STATE ON PAGE LOAD ---
    handleURLState();
});
