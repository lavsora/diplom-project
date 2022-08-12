const modal = ({ sectionId, modalClass, overlayClass, openButtonClass, closeButtonClass }) => {
    const section = document.querySelector(sectionId)
    const modal = document.querySelector(modalClass)
    const overlay = document.querySelector(overlayClass)

    const openModal = (section, button, modal ) => {
        section.addEventListener('click', (e) => {
            e.preventDefault()

            if (e.target.matches(button)) {
                overlay.style.display = 'block'
                modal.style.display = 'block'
            }
        })
    }

    const closeModal = (button, modal) => {
        document.querySelector(button).addEventListener('click', () => {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        })
    }

    document.querySelectorAll('.document-overlay').forEach(el => {
        el.style.display = 'none';
    });

    openModal(section, openButtonClass, modal)
    closeModal(closeButtonClass, modal)
}

export default modal