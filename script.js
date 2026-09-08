let num1;
let num2;
let operator;
let result;

const number_buttons = document.querySelectorAll('.numbers button');
const display = document.querySelector('.display');
const equal = document.querySelector('.equalTo');
const operator_buttons = document.querySelector('.operators');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

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
    num1 = Number(num1);
    num2 = Number(num2);
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
      if (num2 !== 0) {
        result = divide(num1, num2);
      }
      else {
        num1 = undefined
        operator = undefined
        num2 = undefined
        return 'Nope , Nada , Naah...Cannot divide by Zero';
      }
    }
    num1 = result;
    operator = undefined;
    num2 = undefined;
    return Number(result.toFixed(5));

  }
}


number_buttons.forEach(button => {
  button.addEventListener('click', () => {
    number_updater(button.textContent);
  }
  )
})

function number_updater(new_num) {
  if (!operator) {
    if (num1 === undefined || num1 == result) {
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
    display.textContent = `Ans : ${displayedResult}`;

  }
  else if (num1 === undefined) {
    display.textContent = `ERROR`;
  }
  else if (operator !== undefined) {
    display.textContent = `ERROR`;
  }
  else {
    result = num1;
    display.textContent = `${displayedResult} = ${displayedResult}`;
  }

})

clear.addEventListener('click', () => {
  display.textContent = null;
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  result = undefined;
}
)

decimal.addEventListener('click', () => {
  if (!operator) {
    if (!num1.includes('.')) {
      if (num1 == undefined) {
        num1 = `0.`;
        display.textContent = num1;
      }
      else {
        num1 = `${num1}.`;
        display.textContent = num1;
      }
    }
  }
  else {
    if (!num2.includes('.')) {
      if (num2 == undefined) {
        num2 = `0.`;
        display.textContent = num2;
      }
      else {
        num2 = `${num2}.`;
        display.textContent = `${num1} ${operator} ${num2}`;
      }
    }
  }
}
)