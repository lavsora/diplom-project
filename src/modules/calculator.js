const calculator = () => {
    try {
        const calcBlock = document.querySelector('#calc')
        const calcType = calcBlock.querySelector('#calc-type')
        const calcTypeMaterial = calcBlock.querySelector('#calc-type-material')
        const calcInput = calcBlock.querySelector('#calc-input')
        const calcTotal = calcBlock.querySelector('#calc-total')

        const countCalc = () => {
            const calcTypeValue = +calcType.value
            const calcTypeMaterialValue = +calcTypeMaterial.value

            let totalValue = 0

            if (calcTypeValue && calcTypeMaterialValue) {
                totalValue = calcTypeValue * calcTypeMaterialValue * calcInput.value
            } else {
                totalValue = 0
            }

            calcTotal.value = totalValue
        }

        calcBlock.addEventListener('input', (e) => {
            if (e.target === calcType || e.target === calcTypeMaterial ||
                e.target === calcInput) {
                countCalc()
            }
        })
    } catch (error) {}

}

export default calculator