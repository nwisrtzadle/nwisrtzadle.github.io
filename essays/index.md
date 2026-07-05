---
layout: default
title: Loading Essay Resources...
permalink: /essays/
---

<div class="section">
    <div class="container" style="text-align: center;">
        <p style="font-size: 1.2rem; color: var(--c-text-subtle);">Loading resources...</p>
        <!-- Optional: Add a simple loading spinner -->
        <style>
            .loader { border: 4px solid var(--c-sage-100); border-top: 4px solid var(--c-primary); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 2rem auto; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        </style>
        <div class="loader"></div>
    </div>
</div>

<script>
    // This script acts as a client-side router
    document.addEventListener('DOMContentLoaded', () => {
        // Find the URL of the very first essay in your collection
        const firstEssayUrl = '{{ site.essays | first.url | relative_url }}';
        
        // Check if the URL has '?view=paid'
        const params = new URLSearchParams(window.location.search);
        
        if (params.get('view') === 'paid') {
            // If it does, go to the first essay's page BUT keep the parameter
            window.location.replace(firstEssayUrl + '?view=paid');
        } else {
            // Otherwise, just go to the first essay's page
            window.location.replace(firstEssayUrl);
        }
    });
</script>