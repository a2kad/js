let number = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operator')
let result = document.getElementById('result')
let operationField = document.getElementById('operationField')

let nb1 = ''
let nb2 = ''
let operatorCalc = ''
let display = ''

number.forEach(element => {
    element.addEventListener('click', function () {
        display += element.value
        if (operatorCalc) {
            nb2 += element.value
            operationField.innerText += element.value
            
        }else if(result){
            result.addEventListener('click', function(){
                getResult(display)
            })
            
        } else {
            nb1 += element.value
            operationField.innerText += element.value

        }
        console.log('NB1 : ' + nb1 + ' NB2 : ' + nb2)
        console.log(display)
    })
})
operator.forEach(element => {
    element.addEventListener('click', function () {
        operatorCalc = element.value
        operationField.innerText += element.value
        display += element.value
        console.log('Operator : ' + operatorCalc)
    })
})
function getResult (disp){
    
    operationField.innerText = eval(disp)

}