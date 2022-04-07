class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement){
       this.previousOperandTextElement = previousOperandTextElement
       this.currentOperandTextElement = currentOperandTextElement
       this.clear();
      }
  

    clear(){
        this.currentOperand = "";
        this.previousOperand ="";
        this.operation = "";
    }


    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }


    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }


    chooseOperation(operation){
        if(this.currentOperand === "") return
        if(this.previousOperand !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""


    }
    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current))return
        switch(this.operation){
            case '+': 
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case "x":
                computation = prev * current
                break;
            case "/":
                computation = prev / current
                break;
            default:
                return; 
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';

    }
    getDis(number){
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber))return ''
        return floatNumber.toLocaleString('en')
     }


   
    updateDis(){
        this.currentOperandTextElement.innerText = 
            this.getDis(this.currentOperand);
        if(this.operation != undefined){
            this.previousOperandTextElement.innerText = 
            `${this.getDis(this.previousOperand)} ${this.operation}`
        }
        


    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons= document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]')
const resetButton = document.querySelector('[data-reset]')
const deleteButton = document.querySelector('[data-delete]')
// display
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        console.log(button.innerText);
        calculator.appendNumber(button.innerText);
        calculator.updateDis();
    })  
})


operationButtons.forEach(button =>{
    button.addEventListener('click', () => {
        console.log(button.innerText)
        calculator.chooseOperation(button.innerText);
        calculator.updateDis();
    })
    
})


equalsButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDis();
})

resetButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDis();
})

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDis();
})