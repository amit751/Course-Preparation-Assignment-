

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Calculator(){
    this.read= function () {
        this.number1 = prompt("num1:");
        this.number2 = prompt("num2:");
        
    },
    this.sum = function () {
        return Number(this.number1) + Number(this.number2) ;
    },
    this.mul = function () {
        return this.number1 * this.number2 ;
    }
}