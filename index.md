---
layout: default
title: Elevate Your Academic Writing
---

<section class="hero">
    <canvas id="hero-canvas" aria-hidden="true"></canvas>
    <div class="container hero-container">
        <div class="hero-content">
            <h1 class="hero-title">
                Craft your essays
                <span id="animated-text" class="highlight-text">effortlessly</span>
            </h1>
            <p class="hero-subtitle">
                Explore quality English and Geography essays tailored to the Singapore's secondary school syllabus. Master the techniques for formulating strong arguments to score well for exams.
            </p>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                    </div>
                    <div class="stat-number">7+</div>
                    <div class="stat-label">Free Essays</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>
                    </div>
                    <div class="stat-number">O-Level</div>
                    <div class="stat-label">Top Grade</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Students Helped</div>
                </div>
            </div>

            <div class="cta-buttons">
                <a href="{{ "/essays/" | relative_url }}" class="button button-primary">Explore Free Essays</a>
                <a href="#about" class="button button-outline">Learn About Me</a>
            </div>
        </div>
    </div>
</section>

<section id="free-essays" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Free Sample Essays</h2>
            <p class="section-subtitle">
                Discover the quality of my work through these complimentary essays. Each piece demonstrates the analytical depth and writing excellence you can achieve.
            </p>
        </div>

        <div class="vertical-card-list">
            {% assign essay = site.essays | where_exp: "item", "item.slug == 'english-youth-1'" | first %}
            {% if essay %}
            <div class="essay-card">
                <div class="card-header">
                    <div class="badge english-badge">{{ essay.subject }}</div>
                    <div class="read-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>{{ essay.word_count | divided_by: 200 | ceil }} min read</span>
                    </div>
                </div>
                <h3 class="card-title">{{ essay.title }}</h3>
                <p class="card-excerpt">The ancient Greek myth of Narcissus tells of a handsome young man so captivated by his own reflection, unable to tear away from himself he eventually perished, oblivious to the world around him. Every generation tends to view the younger generation through a similar lens, labelling them as self-obsessed and selfish. While it is easy to brand today’s young people with this same accusation, a closer look reveals a generation that is far from narcissistic. I disagree entirely with the statement that young people today are selfish; instead they demonstrate profound social conscience and a pragmatic focus on survival that is often mislabelled as...</p>
                <div class="card-footer">
                    <span class="grade-level">{{ essay.grade_level }}</span>
                    <a href="{{ essay.url | relative_url }}" class="card-link">Read Essay</a>
                </div>
            </div>
            {% endif %}

            {% assign essay = site.essays | where_exp: "item", "item.slug == 'geography-weather-1'" | first %}
            {% if essay %}
            <div class="essay-card">
                <div class="card-header">
                    <div class="badge geography-badge">{{ essay.subject }}</div>
                    <div class="read-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>{{ essay.word_count | divided_by: 200 | ceil }} min read</span>
                    </div>
                </div>
                <h3 class="card-title">{{ essay.title }}</h3>
                <p class="card-excerpt">Climate change can negatively impact the human ecosystem. It can result in heat waves leading to people suffering from heat stroke. In many cases, people actually die from heat stroke when left untreated. For example, in Central and South Africa, the number of deaths from climate change is between 70 and 120 deaths per million population. Such heat waves will take a toll on the human ecosystem as there will be an increase in death rates. However, such impact on human lives may be less significant in other parts of the world, especially in temperate regions like countries in Europe. For example, in many European countries...</p>
                <div class="card-footer">
                    <span class="grade-level">{{ essay.grade_level }}</span>
                    <a href="{{ essay.url | relative_url }}" class="card-link">Read Essay</a>
                </div>
            </div>
            {% endif %}
            
            {% assign essay = site.essays | where_exp: "item", "item.slug == 'english-meal-2'" | first %}
            {% if essay %}
            <div class="essay-card">
                <div class="card-header">
                    <div class="badge english-badge">{{ essay.subject }}</div>
                     <div class="read-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>{{ essay.word_count | divided_by: 200 | ceil }} min read</span>
                    </div>
                </div>
                <h3 class="card-title">{{ essay.title }}</h3>
                <p class="card-excerpt">The smell of grilling satay always signals Friday night. It is our family ritual, not just a meal, but a weekly reunion under the twinkling fairy lights of our backyard. Every Friday, without fail, my grandparents, aunts, uncles, and cousins gather at our house. The air buzzes with chatter, laughter, and the irresistible aroma of marinated meat caramelizing over charcoal...</p>
                <div class="card-footer">
                    <span class="grade-level">{{ essay.grade_level }}</span>
                    <a href="{{ essay.url | relative_url }}" class="card-link">Read Essay</a>
                </div>
            </div>
            {% endif %}
        </div>
    </div>
</section>

<section id="premium" class="section bg-cream">
    <div class="container">
        <div class="section-header">
            <div class="section-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"></path><path d="M5 22h14"></path></svg>
            </div>
            <h2 class="section-title">Premium Collections</h2>
            <p class="section-subtitle">Invest in your academic success with our carefully curated essay collections. Each bundle provides comprehensive coverage of essential topics with professional insights.</p>
        </div>

        <div class="premium-grid">
            <div class="premium-card">
                <div class="premium-header english-header">
                    <h3>English Mastery Collection</h3>
                    <p>Model Essays &amp; TYS Solutions</p>
                </div>
                <div class="premium-content">
                    <div class="price-tag">
                        <div class="price-prefix">Starting from</div>
                        <div class="price-main">
                            <span>$49</span><span class="price-sgd">SGD</span>
                        </div>
                    </div>
                    <ul class="features-list">
                        <li>Access to 8+ Model Essays</li>
                        <li>Covers All Question Types</li>
                        <li>Includes Real-world Examples</li>
                        <li>O-Level TYS (2020-2025) Solutions</li>
                    </ul>
                    <div class="button-container">
                        <a href="{{ "/essays/?view=paid" | relative_url }}" class="button button-primary english-button">Browse All Collections</a>
                    </div>
                </div>
            </div>

            <div class="premium-card">
                <div class="premium-header geography-header">
                    <h3>Geography Excellence Pack</h3>
                    <p>40+ Model Essays Across All Topics</p>
                </div>
                <div class="premium-content">
                    <div class="price-tag">
                        <div class="price-prefix">Starting from</div>
                        <div class="price-main">
                            <span>$29</span><span class="price-sgd">SGD</span>
                        </div>
                    </div>
                    <ul class="features-list">
                        <li>Extensive Library of 40+ Model Essays</li>
                        <li>Covers All Core Geography Topics</li>
                        <li>Detailed Breakdown of Answers</li>
                        <li>Emphasis on Local (Singapore) Context</li>
                    </ul>
                    <div class="button-container">
                        <a href="{{ "/essays/?view=paid" | relative_url }}" class="button button-primary geography-button">Browse All Collections</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="about" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Teaching Philosophy</h2>
            <p class="section-subtitle">“The unexamined life is not worth living” - Socrates</p>
        </div>

        <div class="about-grid">
            <div class="about-story">
                <div class="story-card">
                    <div class="story-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    </div>
                    <h3 class="story-title">About Your Educator</h3>
                    <p>I am a dedicated educator in Singapore with over five years of experience specializing in Secondary School English and Geography. As an Honours graduate from Nanyang Technological University in Environmental Earth System Science, I bring a deep and relevant academic background to my teaching, particularly in Geography and English. Also, I ensure that I cater to each student's individual learning needs and help them build a strong conceptual foundation.</p>
                </div>
            </div>
            <div class="about-philosophy">
                <div class="philosophy-card">
                    <h4>Why You Should Chooose Me</h4>
                    <ul>
                        <li><strong>24-Hour Feedback:</strong> Get detailed grades and corrections on your work in under 24 hours.</li>
                        <li><strong>Score Higher in Exams:</strong> Master the techniques to turn subject knowledge into top marks.</li>
                        <li><strong>Exclusive MOE-Aligned Resources:</strong> Gain an edge with my custom essay collections and study notes.</li>
                        <li><strong>Proven & Qualified Tutor:</strong> Learn from an experienced NTU Honours graduate with 5+ years of success.</li>
                        <li><strong>Personalized to You:</strong> Lessons are tailored to fix your weaknesses and maximize your strengths.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="faq" class="section bg-cream">
    <div class="container">
        <div class="faq-grid">
            <div class="faq-header">
                <h2 class="section-title">Frequently Asked Questions</h2>
                <p class="section-subtitle">
                    Have questions? Here are some of the most common things parents and students ask about my services and resources.
                </p>
            </div>
            <div class="faq-accordion">
                <details class="faq-item">
                    <summary class="faq-question">
                        <span>Are the essay collections a one-time purchase?</span>
                        <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </summary>
                    <div class="faq-answer">
                        <p>Yes, absolutely. Both the English Mastery Collection and the Geography Excellence Pack are one-time purchases. Once you buy a collection, you receive lifetime access to all the essays and materials included in it, with no recurring fees.</p>
                    </div>
                </details>
                <details class="faq-item">
                    <summary class="faq-question">
                        <span>What format are the essays provided in?</span>
                        <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </summary>
                    <div class="faq-answer">
                        <p>All essays and learning materials are provided in high-quality, easy-to-read PDF format. This ensures they are accessible on any device, including computers, tablets, and smartphones, and are ready for printing if you prefer a physical copy.</p>
                    </div>
                </details>
                <details class="faq-item">
                    <summary class="faq-question">
                        <span>How do these essays align with the MOE syllabus?</span>
                        <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </summary>
                    <div class="faq-answer">
                        <p>Every essay is written based on the latest Singapore-Cambridge GCE O-Level and N-Level syllabus guidelines. They cover key themes, content requirements, and question types that frequently appear in school and national examinations, ensuring they are relevant and effective for exam preparation.</p>
                    </div>
                </details>
                 <details class="faq-item">
                    <summary class="faq-question">
                        <span>Do you offer private tuition as well?</span>
                        <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </summary>
                    <div class="faq-answer">
                        <p>Yes, I do. I provide personalized one-on-one tuition for both English and Geography. If you're interested in tailored guidance for your child, please feel free to email me or send a message on WhatsApp to discuss rates and availability.</p>
                    </div>
                </details>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Let's Connect</h2>
            <p class="section-subtitle">Ready to excel? I’m here to answer your questions and discuss how my resources can support your academic journey.</p>
        </div>

        <div class="contact-grid">
            <a href="mailto:cheryltuition42@gmail.com" class="contact-card">
                <div class="contact-icon email-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <h3>Email Me</h3>
                <p>For inquiries about essays or tutoring.</p>
            </a>
            <a href="https://wa.me/6590686337" target="_blank" rel="noopener noreferrer" class="contact-card">
                <div class="contact-icon whatsapp-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.1 16.4-1.9-1.2a1.8 1.8 0 0 0-2.5.4l-.7.9c-.2.3-.5.4-.8.2A12.6 12.6 0 0 1 8.2 9.2c-.2-.3-.1-.6.2-.8l.9-.7a1.8 1.8 0 0 0 .4-2.5l-1.2-1.9A1.8 1.8 0 0 0 4.6 2.5l-.9.4c-.9.4-1.4 1.3-1.2 2.3A18.4 18.4 0 0 0 18.8 21.7c.9.2 1.9-.3 2.3-1.2l.4-.9a1.8 1.8 0 0 0-1.4-2.2z"></path></svg>
                </div>
                <h3>WhatsApp</h3>
                <p>For quick questions and immediate responses.</p>
            </a>
        </div>
    </div>
</section>
