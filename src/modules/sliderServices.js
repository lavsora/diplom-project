const sliderServices = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const serviceBlock = document.querySelector('#services');
        if (!serviceBlock) {
            return;
        }
        const serviceSlidesRow = serviceBlock.querySelector('.row');

        if (!serviceSlidesRow) {
            return;
        }
        const arrows = serviceBlock.querySelector('.services-arrows');
        let slides = serviceBlock.querySelectorAll('.service-block');

        if (!slides.length || !arrows) {
            return;
        }
        serviceSlidesRow.parentNode.appendChild(arrows);
        slides = Array.from(slides).map((e) => e.parentNode);

        let showElems = 2;
        let sliderId = 0;

        if (document.documentElement.clientWidth < 576) {
            showElems = 1;
        }

        const initSlider = () => {
            serviceSlidesRow.innerHTML = '';
            if (sliderId >= slides.length) {
                sliderId = 0;
            }
            if (sliderId < 0) {
                sliderId = slides.length - 1;
            }

            let nLeft = showElems;
            let fromZero = 0;
            for (let i = sliderId; i < sliderId + showElems; i++) {
                if (i < slides.length) {
                    serviceSlidesRow.appendChild(slides[i]);
                } else {
                    serviceSlidesRow.appendChild(slides[fromZero]);
                    fromZero += 1;
                }
                nLeft -= 1;
            }
        }

        initSlider()

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth < 576) {
                showElems = 1;
                initSlider()
            } else if (document.documentElement.clientWidth > 576) {
                showElems = 2;
                initSlider()
            }
        })

        arrows.addEventListener('click', (e) => {
            if (e.target.closest('.services__arrow--left')) {
                sliderId -= 1;
                initSlider();
            }
            if (e.target.closest('.services__arrow--right')) {
                sliderId += 1;
                initSlider();
            }
        });
    });
}

export default sliderServices