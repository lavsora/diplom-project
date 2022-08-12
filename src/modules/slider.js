const slider = () => {
    const benefitsArrows = document.querySelector('.benefits-arrows');
    const benefitsItems = document.querySelectorAll('.benefits__item');
    const servicesArrows = document.querySelector('.services-arrows');
    const serviceItems = document.querySelectorAll('.services-item');

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const lowWidth = (items, classActive) => {
        window.addEventListener('resize', () => {
            if (document.body.clientWidth < 576) {
                items.forEach(item => {
                    item.classList.remove(classActive);
                });
                items[0].classList.add(classActive);
            } else if (document.body.clientWidth > 576) {
                if (items.length === 6) {
                    items.forEach(item => {
                        item.classList.remove(classActive);
                    });
                    items[0].classList.add(classActive);
                    items[1].classList.add(classActive);
                    items[2].classList.add(classActive);
                } else if (items.length === 4) {
                    items.forEach(item => {
                        item.classList.remove(classActive);
                    });
                    items[0].classList.add(classActive);
                    items[1].classList.add(classActive);
                }
            }
        });
    };

    const listener = (arrowsBlock, classLeft, classRight, itemClass, classActive, parentBlock, right) => {
        let items = document.querySelectorAll(itemClass);
        let currentSlide = 0;
        let left = 0;

        arrowsBlock.addEventListener('click', (e) => {
            e.preventDefault();

            if (e.target.matches(classRight) || e.target.matches(classLeft)) {
                if (document.body.clientWidth > 576) {
                    if (e.target.matches(classRight)) {
                        prevSlide(items, left, classActive);

                        document.querySelector(parentBlock).appendChild(items[left]);

                        left++;
                        right++;

                        if (left >= items.length) {
                            left = 0;
                        }

                        if (right >= items.length) {
                            right = 0;
                        }

                        nextSlide(items, right, classActive);
                    } else if (e.target.matches(classLeft)) {

                        prevSlide(items, right, classActive);

                        right--;
                        left--;

                        if (right < 0) {
                            right = items.length - 1;
                        }

                        if (left < 0) {
                            left = items.length - 1;
                        }

                        document.querySelector(parentBlock).prepend(items[left]);

                        nextSlide(items, left, classActive);
                    }
                } else if (document.body.clientWidth < 576) {
                    prevSlide(items, currentSlide, classActive);

                    if (e.target.matches(classRight)) {
                        currentSlide++;
                    } else if (e.target.matches(classLeft)) {
                        currentSlide--;
                    }

                    if (currentSlide >= items.length) {
                        currentSlide = 0;
                    }

                    if (currentSlide < 0) {
                        currentSlide = items.length - 1;
                    }

                    nextSlide(items, currentSlide, classActive);
                }
            }

        });
    };

    lowWidth(benefitsItems, 'benefits__item--active');
    lowWidth(serviceItems, 'services-item--active');

    listener(benefitsArrows, '.arrow-left', '.arrow-right', '.benefits__item', 'benefits__item--active', '.benefits-wrap', 2);
    listener(servicesArrows, '.arrow-left', '.arrow-right', '.services-item', 'services-item--active', '.services-items', 1);
};

export default slider