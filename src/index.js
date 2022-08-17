import timer from './modules/timer'
import scroll from './modules/scroll'
import validation from './modules/validation'
import sendForm from './modules/sendForm'
import calculator from './modules/calculator'
import modal from './modules/modal'
import slider from './modules/slider'
import review from './modules/review'
import sliderServices from './modules/sliderServices'

review()
timer('20 august 2022')
scroll()
validation()
calculator()
sendForm({
    someElem: [
        {   
            id: 'calc-total'
        }
    ]
})
modal({
    sectionId: '#header',
    modalClass: '.header-modal',
    overlayClass: '.overlay',
    openButtonClass: '.open-modal-header',
    closeButtonClass: '.header-modal__close'
})
modal({
    sectionId: '#services',
    modalClass: '.services-modal',
    overlayClass: '.overlay',
    openButtonClass: '.open-modal-services',
    closeButtonClass: '.services-modal__close'
})
modal({
    sectionId: '#documents',
    modalClass: '.img-modal',
    overlayClass: '.overlay',
    openButtonClass: '.img-responsive',
    closeButtonClass: '.img-modal__close'
})
slider()
sliderServices()

