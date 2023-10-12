function addAndSubtract(num1, num2, num3) {
    //using func in func 
    let result1 = sum(num1,num2);
    let result2 = subtract(result1,num3);
    function sum (a,b){
        return a+b;
    }
    function subtract(a, b) {
        return a - b;
    }
    console.log(result2);
    //with arrow func
    let result = (a,b,c) => console.log((a+b)-c);
    result(num1,num2,num3);
    
}
addAndSubtract(15,6,1);