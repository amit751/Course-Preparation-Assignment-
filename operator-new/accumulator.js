
//test
let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); 
accumulator.read();
alert(accumulator.value); 
console.log(accumulator);


//function
function Accumulator(startingValue){
    this.value = Number(startingValue);
    this.read = function(){
        this.value += Number(prompt("add num:"));
    }
}