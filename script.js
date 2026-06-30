document.addEventListener('DOMContentLoaded', () => {

    // 1. ZAREQIA-STYLE WAX SEAL ENTRANCE
    const envelopeEntrance = document.getElementById('envelope-entrance');
    const waxSeal = document.getElementById('wax-seal');
    const audioBtn = document.getElementById('audio-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    if (waxSeal) {
        waxSeal.addEventListener('click', () => {
            // Break seal and open doors
            waxSeal.classList.add('broken');
            
            setTimeout(() => {
                envelopeEntrance.classList.add('opened');
                
                // Show Audio Button
                audioBtn.classList.add('visible');
                bgMusic.play().then(() => {
                    isPlaying = true;
                    updateAudioIcon();
                }).catch(e => console.log('Autoplay blocked'));

                // Custom Hero Entrance Sequence
                // --- SCRATCH CARD LOGIC ---
                const canvas = document.getElementById('scratch-canvas');
                if (canvas) {
                    const ctx = canvas.getContext('2d');
                    let isDrawing = false;

                    // Setup Canvas Size
                    canvas.width = canvas.parentElement.offsetWidth;
                    canvas.height = canvas.parentElement.offsetHeight;
                    
                    // Fill with Gold Foil color
                    ctx.fillStyle = '#C5A059'; 
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Add 'Scratch Here' text over the gold layer
                    ctx.fillStyle = '#ffffff';
                    ctx.font = '20px Lato';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('Scratch Here', canvas.width/2, canvas.height/2);

                    ctx.lineJoin = 'round';
                    ctx.lineCap = 'round';
                    ctx.lineWidth = 150; // MASSIVE brush size so it's super easy to scratch in 1-2 rubs

                    let scratchCount = 0;
                    let isRevealed = false;

                    function getMousePos(e) {
                        const rect = canvas.getBoundingClientRect();
                        let clientX = e.clientX;
                        let clientY = e.clientY;
                        if (e.touches && e.touches.length > 0) {
                            clientX = e.touches[0].clientX;
                            clientY = e.touches[0].clientY;
                        }
                        return {
                            x: clientX - rect.left,
                            y: clientY - rect.top
                        };
                    }

                    function scratch(e) {
                        if (!isDrawing || isRevealed) return;
                        e.preventDefault();
                        const pos = getMousePos(e);
                        
                        ctx.globalCompositeOperation = 'destination-out';
                        ctx.lineTo(pos.x, pos.y);
                        ctx.stroke();

                        scratchCount++;
                        // Auto-reveal and celebrate after a few quick rubs
                        if (scratchCount > 15 && !isRevealed) {
                            isRevealed = true;
                            // Fade out the canvas to fully reveal the date
                            gsap.to(canvas, { opacity: 0, duration: 1, onComplete: () => {
                                canvas.style.display = 'none';
                            }});
                            // Fire the celebration confetti!
                            if (typeof confetti === 'function') {
                                confetti({
                                    particleCount: 150,
                                    spread: 80,
                                    origin: { y: 0.6 },
                                    colors: ['#BF953F', '#FCF6BA', '#ffffff', '#AA771C']
                                });
                            }
                        }
                    }

                    canvas.addEventListener('mousedown', (e) => {
                        isDrawing = true;
                        const pos = getMousePos(e);
                        ctx.beginPath();
                        ctx.moveTo(pos.x, pos.y);
                    });
                    canvas.addEventListener('mousemove', scratch);
                    canvas.addEventListener('mouseup', () => { isDrawing = false; });
                    canvas.addEventListener('mouseleave', () => { isDrawing = false; });

                    // Touch support for mobile
                    canvas.addEventListener('touchstart', (e) => {
                        isDrawing = true;
                        const pos = getMousePos(e);
                        ctx.beginPath();
                        ctx.moveTo(pos.x, pos.y);
                    }, {passive: false});
                    canvas.addEventListener('touchmove', scratch, {passive: false});
                    canvas.addEventListener('touchend', () => { isDrawing = false; });
                }

                // --- COUNTDOWN TIMER LOGIC ---
                const countDownDate = new Date("Dec 25, 2026 10:00:00").getTime();
                const daysEl = document.getElementById('cd-days');
                const hoursEl = document.getElementById('cd-hours');
                const minsEl = document.getElementById('cd-minutes');
                const secsEl = document.getElementById('cd-seconds');

                if (daysEl) {
                    const timerInterval = setInterval(function() {
                        const now = new Date().getTime();
                        const distance = countDownDate - now;

                        if (distance < 0) {
                            clearInterval(timerInterval);
                            daysEl.innerHTML = "00"; hoursEl.innerHTML = "00";
                            minsEl.innerHTML = "00"; secsEl.innerHTML = "00";
                        } else {
                            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                            daysEl.innerHTML = days.toString().padStart(2, '0');
                            hoursEl.innerHTML = hours.toString().padStart(2, '0');
                            minsEl.innerHTML = minutes.toString().padStart(2, '0');
                            secsEl.innerHTML = seconds.toString().padStart(2, '0');
                        }
                    }, 1000);
                }

                const heroBg = document.querySelector('.hero-bg-image');
                const heroContent = document.querySelector('.entrance-anim');
                const heroScroll = document.querySelector('.entrance-anim-delayed');
                
                if (heroBg) {
                    // 1. Background fades in
                    heroBg.classList.add('show');
                    
                    // 2. Names come down/in after background is visible
                    setTimeout(() => {
                        if (heroContent) heroContent.classList.add('show');
                    }, 1000);
                    
                    // 3. Scroll indicator comes last
                    setTimeout(() => {
                        if (heroScroll) heroScroll.classList.add('show');
                    }, 2000);
                }

                initZareqiaAnimations();
            }, 500); // Small delay after seal break before doors open
        });
    }

    // 2. AUDIO CONTROLLER

    function updateAudioIcon() {
        if (isPlaying) {
            audioBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 13v6m-6-6v6m-6-6v6M18 5v4m-6-4v4M6 5v4"></path></svg>'; // Pause bars
        } else {
            audioBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>'; // Music note
        }
    }

    audioBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
        } else {
            bgMusic.play();
        }
        isPlaying = !isPlaying;
        updateAudioIcon();
    });

    // 3. GSAP PREMIUM ANIMATIONS
    gsap.registerPlugin(ScrollTrigger);

    function initZareqiaAnimations() {
        // Dynamic Background Color Transitions
        gsap.utils.toArray('.dynamic-bg-section').forEach(section => {
            const color = section.getAttribute('data-bg-color');
            
            ScrollTrigger.create({
                trigger: section,
                start: "top 50%", // When section reaches middle of screen
                end: "bottom 50%",
                onEnter: () => gsap.to("body", { backgroundColor: color, duration: 1 }),
                onEnterBack: () => gsap.to("body", { backgroundColor: color, duration: 1 })
            });
        });

        // Video Parallax
        gsap.utils.toArray('.parallax-bg').forEach(container => {
            const speed = container.getAttribute('data-speed');
            const video = container.querySelector('video');
            
            gsap.to(video, {
                y: () => (ScrollTrigger.maxScroll(window) * speed),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

        // Scroll Elements Fade Up
        gsap.utils.toArray('.fade-up:not(.hero-content)').forEach(elem => {
            gsap.to(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                },
                opacity: 1, y: 0, duration: 1.2, ease: 'power3.out'
            });
        });

        // Story Images Side Fades
        gsap.to('.fade-right', {
            scrollTrigger: {
                trigger: '.fade-right',
                start: "top 85%",
            },
            opacity: 1, x: 0, duration: 1.5, ease: 'power3.out'
        });
        gsap.to('.fade-left', {
            scrollTrigger: {
                trigger: '.fade-left',
                start: "top 85%",
            },
            opacity: 1, x: 0, duration: 1.5, ease: 'power3.out'
        });
    }

    // 4. RSVP FORM TO WHATSAPP
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameEl = document.getElementById('rsvp-name');
            const attendEl = document.getElementById('rsvp-attend');
            
            if (nameEl && attendEl) {
                const name = nameEl.value;
                const attend = attendEl.value;
                
                const text = `Hello! I am RSVPing for Ahmed and Sara's wedding.%0A%0A*Name:* ${name}%0A*Attending:* ${attend}`;
                const url = `https://wa.me/918464940297?text=${text}`;
                window.open(url, '_blank');
            }
        });
    }

});
