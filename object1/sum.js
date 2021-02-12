let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}



function sum(obj) {
    let sum= 0;
    for (const salery in obj) {
        sum+= Number(obj[salery]);   
    }
    return sum;
}
  
console.log(sum(salaries));
console.log(sum({}));