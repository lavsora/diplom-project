const slider = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const arrowsBlock = document.querySelector('.benefits-arrows');
        const benefitsWrap = document.querySelector('.benefits-wrap');

        const benefitItems = benefitsWrap.querySelectorAll('.benefits__item');
        if (!benefitItems.length) {
            return;
        }
        let sliderId = 0

        let showElems = 3

        if (document.documentElement.clientWidth < 576) {
            showElems = 1;
            benefitsWrap.style.justifyContent = 'center';
        }

        const initSlider = () => {
            benefitsWrap.innerHTML = '';
            
            if (sliderId >= benefitItems.length) {
                sliderId = 0;
            }
            if (sliderId < 0) {
                sliderId = benefitItems.length - 1;
            }
            let nLeft = showElems;
            let fromZero = 0;
            for (let i = sliderId; i < sliderId + showElems; i++) {
                if (i < benefitItems.length) {
                    benefitsWrap.appendChild(benefitItems[i]);
                } else {
                    benefitsWrap.appendChild(benefitItems[fromZero]);
                    fromZero += 1;
                }
                nLeft -= 1;
            }
        }

        initSlider()

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth < 576) {
                showElems = 1;
                benefitsWrap.style.justifyContent = 'center';

                initSlider()
            } else if (document.documentElement.clientWidth > 576) {
                showElems = 3;

                initSlider()
            }
        })

        arrowsBlock.addEventListener('click', (e) => {
            if (e.target.closest('.benefits__arrow--left')) {
                sliderId -= 1;
                initSlider()
            }
            if (e.target.closest('.benefits__arrow--right')) {
                sliderId += 1;
                initSlider()
            }
        })
    })
}

export default slider