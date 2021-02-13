



let calculator = {
    read: function () {
        this.number1 = prompt("num1:");
        this.number2 = prompt("num2:");
        
    },
    sum(){
        return Number(this.number1) + Number(this.number2) ;
    },
    mul(){
        return this.number1 * this.number2 ;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );