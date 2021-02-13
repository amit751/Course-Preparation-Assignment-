
function multiplyNumeric(obj) {
    for (const key in obj) {
       if( typeof(obj[key]) === "number" ){
           obj[key] = obj[key]*2;
       }
    }    
}
