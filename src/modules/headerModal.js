const headerModal = () => {
    const modal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const openBtnModal = document.querySelector('.button')
    const closeBtnModal = document.querySelector('.header-modal__close')

    openBtnModal.addEventListener('click', () => {
        modal.classList.remove('header-modal')

        overlay.style.display = 'block'
    })

    closeBtnModal.addEventListener('click', () => {
        modal.classList.add('header-modal')

        overlay.style.display = 'none'
    })
}

export default headerModal