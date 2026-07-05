---
layout: default
title: Writing Guides
permalink: /guides/
---
<div class="section">
    <div class="container">
        <div class="section-header">
            <h1 class="section-title">Writing Guides</h1>
            <p class="section-subtitle">Tips, strategies, and insights to help you master academic writing for your O-Levels and beyond.</p>
        </div>

        <div class="vertical-card-list">
            {% for guide in site.guides reversed %}
            <a href="{{ guide.url | relative_url }}" class="essay-card" style="text-decoration:none;">
                <div class="card-header">
                    
                    {% if guide.category == "Geography" %}
                        <div class="badge geography-badge">Geography</div>
                    {% else %}
                        <div class="badge english-badge">English</div>
                    {% endif %}
                    <div class="read-time">{{ guide.date | date: "%B %d, %Y" }}</div>
                </div>
                <h3 class="card-title">{{ guide.title }}</h3>
                <p class="card-excerpt">{{ guide.excerpt }}</p>
            </a>
            {% endfor %}
        </div>
    </div>
</div>