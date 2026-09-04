function add (a , b){
  return a+b;
}
function subtract(a , b){
  return a-b;
}
function multiply(a , b){
  return a*b;
}
function divide (a , b){
  return a/b;
}
function operate(num1 , num2 , operator){
  let result ;
  if(operator == '+'){
    result = add(num1 , num2);
  }
  else if(operator == '-'){
    result = subtract(num1 , num2);
  }
  else if(operator == '*'){
    result = multiply(num1 , num2);
  }
  else if(operator == '/'){
    result= divide(num1 , num2);
  }
  return result;

}