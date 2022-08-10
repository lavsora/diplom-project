import headerModal from './modules/headerModal'
import timer from './modules/timer'
import scroll from './modules/scroll'
import servicesModal from './modules/servicesModal'
import validation from './modules/validation'
import sendForm from './modules/sendForm'
import calculator from './modules/calculator'

headerModal()
timer('13 august 2022')
scroll()
servicesModal()
validation()
calculator()
sendForm({
    someElem: [
        {   
            id: 'calc-total'
        }
    ]
})
