document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.querySelector('#range');
    const rangeValue = document.querySelector('#range-value');

    const updateRangeValue = () => {
        rangeValue.textContent = `${rangeInput.value}%`;
    };

    rangeInput.addEventListener('input', updateRangeValue);

    updateRangeValue();

    const slider = document.querySelector('.js_slider');
    const slides = slider.querySelectorAll('.js_slider_item');
    const dotsContainer = document.querySelector('.js_dots');
    let currentSlide = 0;

    slides.forEach((slide, index) => {
        let dot = document.createElement('span');
        dot.classList.add('slider__dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => goToSlide(index));
    });

    const updateDots = () => {
        document.querySelectorAll('.slider__dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    };

    const goToSlide = (index) => {
        currentSlide = (index + slides.length) % slides.length;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    document.querySelector('.js_next').addEventListener('click', nextSlide);
    document.querySelector('.js_prev').addEventListener('click', prevSlide);

    goToSlide(0);

    const burgerMenu = document.querySelector('.js_menu');
    const nav = document.querySelector('.js_nav');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        nav.classList.toggle('active');
    });
});