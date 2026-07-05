document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var hero = canvas.parentElement;

    var isMobile = window.innerWidth < 768;
    var PARTICLE_COUNT = isMobile ? 28 : 55;
    var LINK_DISTANCE = isMobile ? 100 : 145;
    var MOUSE_RADIUS = 130;

    var BLUE = { r: 59, g: 130, b: 246 };
    var GREEN = { r: 16, g: 185, b: 129 };
    var PURPLE = { r: 139, g: 92, b: 246 };

    var ENGLISH_CHARS = ['A', 'a', '?', '!', '\u201C'];
    var GEO_CHARS = ['N', 'S', 'E', 'W', '\u00B0'];

    var particles = [];
    var mouse = { x: null, y: null };
    var width, height, dpr;
    var animId = null;
    var time = 0;

    function resize() {
        dpr = window.devicePixelRatio || 1;
        width = hero.offsetWidth;
        height = hero.offsetHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
        particles = [];
        for (var i = 0; i < PARTICLE_COUNT; i++) {
            var roll = Math.random();
            var isChar = roll < 0.22;
            var color, char = null, charSize = 0;

            if (isChar) {
                var isEnglish = Math.random() < 0.5;
                var chars = isEnglish ? ENGLISH_CHARS : GEO_CHARS;
                color = isEnglish ? BLUE : GREEN;
                char = chars[Math.floor(Math.random() * chars.length)];
                charSize = 16 + Math.random() * 8;
            } else {
                var colorRoll = Math.random();
                color = colorRoll < 0.4 ? BLUE : colorRoll < 0.8 ? GREEN : PURPLE;
            }

            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                baseVx: (Math.random() - 0.5) * 0.35,
                baseVy: (Math.random() - 0.5) * 0.35,
                size: isChar ? 0 : 2.5 + Math.random() * 3,
                color: color,
                opacity: isChar ? 0.18 + Math.random() * 0.14 : 0.22 + Math.random() * 0.18,
                char: char,
                charSize: charSize,
                bobPhase: Math.random() * Math.PI * 2
            });
        }
    }

    function update() {
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];

            if (mouse.x !== null) {
                var dx = p.x - mouse.x;
                var dy = p.y - mouse.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_RADIUS && dist > 0) {
                    var force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                    p.vx += (dx / dist) * force * 0.5;
                    p.vy += (dy / dist) * force * 0.5;
                }
            }

            p.vx += (p.baseVx - p.vx) * 0.015;
            p.vy += (p.baseVy - p.vy) * 0.015;

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -20) p.x += width + 40;
            if (p.x > width + 20) p.x -= width + 40;
            if (p.y < -20) p.y += height + 40;
            if (p.y > height + 20) p.y -= height + 40;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        for (var i = 0; i < particles.length; i++) {
            for (var j = i + 1; j < particles.length; j++) {
                var dx = particles[i].x - particles[j].x;
                var dy = particles[i].y - particles[j].y;
                var dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < LINK_DISTANCE) {
                    var alpha = 0.14 * (1 - dist / LINK_DISTANCE);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = 'rgba(74, 107, 74, ' + alpha + ')';
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];

            if (p.char) {
                var bobOffset = Math.sin(time * 0.0008 + p.bobPhase) * 2.5;
                ctx.font = '500 ' + p.charSize + 'px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ',' + p.opacity + ')';
                ctx.fillText(p.char, p.x, p.y + bobOffset);
            } else {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ',' + p.opacity + ')';
                ctx.fill();
            }
        }
    }

    function animate(timestamp) {
        time = timestamp || 0;
        update();
        draw();
        animId = requestAnimationFrame(animate);
    }

    hero.addEventListener('mousemove', function (e) {
        var rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    hero.addEventListener('mouseleave', function () {
        mouse.x = null;
        mouse.y = null;
    });

    hero.addEventListener('touchmove', function (e) {
        var rect = hero.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
    }, { passive: true });

    hero.addEventListener('touchend', function () {
        mouse.x = null;
        mouse.y = null;
    });

    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            if (!animId) animate();
        } else {
            if (animId) {
                cancelAnimationFrame(animId);
                animId = null;
            }
        }
    }, { threshold: 0 });
    observer.observe(hero);

    var resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resize, 200);
    });

    resize();
    createParticles();
    animate();
});
