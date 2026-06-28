let current = 0;
const slides = document.querySelectorAll('.slide');
const numText = document.getElementById('slideNum');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    
    // Update counter (e.g., 01, 02)
    numText.innerText = (current + 1).toString().padStart(2, '0');
}

function nextSlide() { showSlide(current + 1); }
function prevSlide() { showSlide(current - 1); }

// Auto play every 5 seconds
setInterval(nextSlide, 5000);

// Simple Mobile Swipe Support
let touchStart = 0;
document.addEventListener('touchstart', e => touchStart = e.touches[0].clientX);
document.addEventListener('touchend', e => {
    let touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
});