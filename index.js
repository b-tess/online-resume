const leftCover = document.querySelector('.cover')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    leftCover.classList.add('uncover')
})
