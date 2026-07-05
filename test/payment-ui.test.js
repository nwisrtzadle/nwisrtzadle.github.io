const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = (filePath) => fs.readFileSync(path.join(root, filePath), 'utf8');

const essayLayout = read('_layouts/essay.html');
const defaultLayout = read('_layouts/default.html');
const mainJs = read('assets/js/main.js');
const homePage = read('index.md');
const styleCss = read('assets/css/style.css');

const bundles = [
    ['Ace Your English Essays', '$5 SGD'],
    ['O-Level Essay Masterclass', '$8 SGD'],
    ['Weather &amp; Climate', '$3 SGD'],
    ['Tectonics', '$3 SGD'],
    ['Tourism', '$3 SGD'],
    ['Singapore', '$3 SGD'],
    ['Pure Geography Power Pack', '$9 SGD'],
];

assert(
    !defaultLayout.includes('https://js.stripe.com/v3/buy-button.js'),
    'default layout should not load Stripe buy button script'
);
assert(!essayLayout.includes('<stripe-buy-button'), 'essay layout should not render Stripe buy buttons');
assert(!essayLayout.includes('publishable-key='), 'essay layout should not contain Stripe publishable keys');
assert(
    !essayLayout.includes('Pay with card using the buttons below'),
    'paid bundles banner should not mention card payment'
);
assert(
    essayLayout.includes('Pay using PayNow by clicking Get the Bundle below.'),
    'paid bundles banner should explain PayNow bundle buttons'
);
assert(
    essayLayout.includes('class="payment-method paynow-instruction"'),
    'paid bundles banner should use the PayNow instruction style hook'
);

for (const [name, price] of bundles) {
    const buttonPattern = new RegExp(
        `<button class="button button-primary bundle-paynow-btn" type="button" data-bundle="${name}">\\s*Get the Bundle\\s*</button>`
    );
    assert(buttonPattern.test(essayLayout), `missing Get the Bundle button for ${name}`);
    assert(essayLayout.includes(`data-price="${price}"`), `missing modal price ${price} for ${name}`);
    assert(essayLayout.includes(`${name} &mdash; ${price}`), `missing modal option label for ${name}`);
}

assert(essayLayout.includes('<p class="bundle-price">$5 SGD</p>'), 'English starter card should show $5 SGD');
assert(essayLayout.includes('<p class="bundle-price">$8 SGD</p>'), 'English masterclass card should show $8 SGD');
assert(essayLayout.includes('<p class="bundle-price">$3 SGD</p>'), 'Geography topic cards should show $3 SGD');
assert(essayLayout.includes('<p class="bundle-price">$9 SGD</p>'), 'Geography pack card should show $9 SGD');
assert(homePage.includes('<span>$5</span><span class="price-sgd">SGD</span>'), 'homepage English price should show $5 SGD');
assert(homePage.includes('<span>$3</span><span class="price-sgd">SGD</span>'), 'homepage Geography price should show $3 SGD');

assert(mainJs.includes('bundlePaynowButtons'), 'main JS should collect bundle PayNow buttons');
assert(mainJs.includes('const bundleName = button.dataset.bundle;'), 'bundle click handler should read data-bundle');
assert(mainJs.includes('bundleSelect.value = bundleName;'), 'bundle click handler should preselect the clicked bundle');
assert(mainJs.includes('updateBundleInfo();'), 'bundle click handler should refresh visible modal bundle info');

const bundlePaynowButtonRule = styleCss.match(/\.bundle-card \.bundle-paynow-btn\s*\{[^}]+\}/);
assert(bundlePaynowButtonRule, 'bundle PayNow button should have a dedicated card-level style');
assert(bundlePaynowButtonRule[0].includes('width: 100%;'), 'bundle PayNow button should fill the card button area');
assert(bundlePaynowButtonRule[0].includes('display: flex;'), 'bundle PayNow button should use flex centering');
assert(bundlePaynowButtonRule[0].includes('justify-content: center;'), 'bundle PayNow button text should be horizontally centered');
assert(bundlePaynowButtonRule[0].includes('align-items: center;'), 'bundle PayNow button text should be vertically centered');
assert(bundlePaynowButtonRule[0].includes('white-space: nowrap;'), 'bundle PayNow button text should stay on one line');
assert(
    styleCss.includes('.bundle-card[data-subject="English"] .bundle-paynow-btn'),
    'English bundle buttons should have their own blue style'
);
assert(
    styleCss.includes('.bundle-card[data-subject="Geography"] .bundle-paynow-btn'),
    'Geography bundle buttons should have their own green style'
);
assert(styleCss.includes('.paynow-instruction'), 'PayNow instruction should have a dedicated style');
assert(styleCss.includes('color: #7b2d8e;'), 'PayNow instruction should use the PayNow purple color');
