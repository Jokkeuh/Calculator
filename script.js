class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement){
       this.previousOperandTextElement = previousOperandTextElement
       this.currentOperandTextElement = currentOperandTextElement
       this.clear();
      }
  

    clear(){
        this.currentOperand = "";
        this.previousOperand =" ";
        this.operation = undefined;
    }
    delete(){


    }
    appendNumber(number){
        this.currentOperand = number;

    }

    chooseOperation(operation){

    }
    compute(){

    }
    updateDis(){
        this.currentOperandTextElement.innerText = this.currentOperand;

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons= document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]')
const resetButton = document.querySelector('[data-reset]')
const deleteButton = document.querySelector(['data-delete'])
// display
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        console.log(button.innerText)
        calculator.appendNumber(button.innerText)
        calculator.updateDis();
    })
    
})