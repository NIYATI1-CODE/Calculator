let num1;
let num2;
let operator;
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate() {
  if (num2 !== undefined) {
    let result;
    num1 = Number(num1);
    num2 = Number(num2)
    if (operator == '+') {
      result = add(num1, num2);
    }
    else if (operator == '-') {
      result = subtract(num1, num2);
    }
    else if (operator == '*') {
      result = multiply(num1, num2);
    }
    else if (operator == '/') {
      result = divide(num1, num2);
    }
    operator = undefined;
    num1 = result;
    num2 = undefined;
    return Number(result.toFixed(4));
  }


}
const number_buttons = document.querySelectorAll('.numbers button');
const display = document.querySelector('.display');
const equal = document.querySelector('.equalTo');
const operator_buttons = document.querySelector('.operators');

number_buttons.forEach(button => {
  button.addEventListener('click', () => {
    number_updater(button.textContent);
  }
  )
})

function number_updater(new_num) {
  if (!operator) {
    if (num1 === undefined) {
      num1 = new_num;
    }
    else {
      num1 = `${num1}${new_num}`;
    }
    display.textContent = num1;;
  }
  else {
    if (num2 === undefined) {
      num2 = new_num;
    }
    else {
      num2 = `${num2}${new_num}`;
    }

    display.textContent = `${num1} ${operator} ${num2}`;

  }

}

operator_buttons.addEventListener('click', (event) => {
  operate();
  operator = event.target.textContent;
  display.textContent = `${num1} ${operator} `;
})

equal.addEventListener('click', () => {
  let displayedResult;
  if (num2 !== undefined) {
    displayedResult = operate();
    display.textContent = `Ans : ${displayedResult0}`;

  }
  else if (num1 === undefined) {
    display.textContent = `ERROR`;
  }
  else if(operator !== undefined){
    display.textContent = `ERROR`;
  }
  else {
    result = num1;
    display.textContent = `${displayedResult} = ${displayedResult}`;
  }

})