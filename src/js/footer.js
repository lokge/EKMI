let questBtn = document.querySelector('.footer__btn')
let overlay = document.querySelector('.footer__overlay')


questBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

overlay.addEventListener('click', (e) => {
    if (e.target.className === 'footer__overlay') {
        overlay.style.display = 'none'
    }
})

