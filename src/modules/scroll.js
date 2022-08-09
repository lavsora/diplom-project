const scroll = () => {
    const scrollBtn = document.querySelector('.smooth-scroll');

    scrollBtn.style.display = 'none'

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop < 730) {
            scrollBtn.style.display = 'none'
        } else {
            scrollBtn.style.display = 'block'
        }
    })

    seamless.polyfill();

    scrollBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const section = document.getElementById('header');

        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: "smooth",
                block: "start",
            });
        }
    });
}

export default scroll