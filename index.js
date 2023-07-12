const leftCover = document.querySelector('.left-cover')
const rightCover = document.querySelector('.right-cover')
const sliderContainer = document.querySelector('.slider-feature-container')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    leftCover.classList.add('uncover')
    rightCover.classList.add('uncover')
    sliderContainer.classList.add('uncover')
})
