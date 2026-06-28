// 1. Loader Disappearance
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }
});

// 2. Navbar Scroll Effect & Progress Bar
window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        const nav = document.querySelector('.navbar');
        const progressBar = document.getElementById("progressBar");
        
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        if (progressBar) {
            progressBar.style.width = scrolled + "%";
        }

        if (winScroll > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

// 3. Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// 4. Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// 5. Modal Logic (Updated for Masonry Layout)
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const exploreLinks = document.querySelectorAll('.explore-link');

exploreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Naye Masonry layout ke hisab se data uthana
        // Yahan '.portfolio-card' ko badal kar '.portfolio-item' kiya gaya hai
        const item = link.closest('.portfolio-item'); 
        
        if (item) {
            const title = item.querySelector('h4').innerText;
            const imgPath = item.querySelector('img').src;
            
            // Modal mein data bharna
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalImg').src = imgPath;
            
            // Agar aapke item mein description hai to wo bhi utha lega
            const desc = item.querySelector('p') ? item.querySelector('p').innerText : "Premium Wedding Cinematography by Nainwal Art's.";
            document.getElementById('modalDesc').innerText = desc;

            // Modal dikhana
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        }
    });
});

// Modal band karne ke logic
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});