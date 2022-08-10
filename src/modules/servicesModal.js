const servicesModal = () => {
    const modal = document.querySelector('.services-modal')
    const overlay = document.querySelector('.overlay')
    const serviceBtns = document.querySelectorAll('.service-button')
    const closeBtn = document.querySelector('.services-modal__close')

    serviceBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.classList.remove('services-modal')

            overlay.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.classList.add('services-modal')

        overlay.style.display = 'none'
    })
}

export default servicesModal