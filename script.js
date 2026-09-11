let num1;
let num2;
let operator;
let result;
let percentageChecker;

const number_buttons = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const equal = document.querySelector('.equalTo');
const operator_buttons = document.querySelectorAll('.operators button');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');
const backspace = document.querySelector('.backspace');
const percentage_button = document.querySelector('.percentage');

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

function percentage(a, b) {
  if (!operator) {
    a = a / 100;
    return [a, b];
  }
  else {
    b = a * (b / 100)
    return [a, b];
  }
}

percentage_button.addEventListener('click', () => {
  display.value = `${display.value}%`;
  percentageChecker = true;
})

function operate() {
  if (num2 !== undefined && num1 !== undefined && operator !== undefined) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (percentageChecker) {
      let [a, b] = percentage(num1, num2);
      if (operator == '+') {
        result = add(a, b);
      }
      else if (operator == '-') {
        result = subtract(a, b);
      }
      else if (operator == '*') {
        result = b;
      }
      else if (operator == '/') {
        if (num2 !== 0) {
          result = num1 / (num2 / 100);
        }
        else {
          num1 = undefined
          operator = undefined
          num2 = undefined
          return 'Nope , Nada , Naah...Cannot divide by Zero';
        }
      }
    }
    else if (operator === '+') {
      result = add(num1, num2);
    }
    else if (operator === '-') {
      result = subtract(num1, num2);
    }
    else if (operator === '*') {
      result = multiply(num1, num2);
    }
    else if (operator === '/') {
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
    num1 = String(result);
    operator = undefined;
    num2 = undefined;
    percentageChecker = false;
    return Number(result.toFixed(5));

  }

  else if (num2 === undefined && percentageChecker) {
    let [a, b] = percentage(num1, num2);
    if (b == undefined) {
      result = a;
    }
    num1 = String(result);
    operator = undefined;
    num2 = undefined;
    percentageChecker = false;
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
    display.value = num1;;
  }
  else {
    if (num2 === undefined) {
      num2 = new_num;
    }
    else {
      num2 = `${num2}${new_num}`;
    }

    display.value = `${num1} ${operator} ${num2}`;

  }

}

operator_buttons.forEach(button => {
  button.addEventListener('click', () =>
    operatorFunction(button.textContent))
})


function operatorFunction(operatorInput) {
  operate();
  operator = operatorInput;
  display.value = `${num1} ${operator}`;
}

equal.addEventListener('click', equalToOperation);

function equalToOperation() {
  let displayedResult;
  if (percentageChecker) {
    displayedResult = operate()
    display.value = `${displayedResult}`;
  }

  else if (num2 !== undefined) {
    displayedResult = operate();
    display.value = `${displayedResult}`;
  }

  else if (num1 === undefined) {
    display.value = `ERROR`;
  }

  else if (operator !== undefined) {
    display.value = `ERROR`;
  }

  else {
    displayedResult = num1;
    display.value = `${displayedResult} = ${displayedResult}`;
  }
}



clear.addEventListener('click', () => {
  display.value = null;
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  result = undefined;
  percentageChecker = false;
}
)
decimal.addEventListener('click', decimalAdder);

function decimalAdder() {
  if (!operator) {
    if (num1 === undefined) {
      num1 = `0.`;
      display.value = num1;
    }
    else if (!num1.includes('.')) {
      num1 = `${num1}.`;
      display.value = num1;
    }
  }
  else {
    if (num2 === undefined) {
      num2 = `0.`;
      display.value = `${num1} ${operator} ${num2}`;
    }
    else if (!num2.includes('.')) {
      num2 = `${num2}.`;
      display.value = `${num1} ${operator} ${num2}`;
    }
  }
}

backspace.addEventListener('click', backspaceOperation)

function backspaceOperation() {
  let displayedResult = display.value;
  if (!operator) {
    num1 = num1.slice(0, -1);
    display.value = num1;
  }
  else if (displayedResult.indexOf(`${operator}`) === (displayedResult.length - 1)) {
    operator = undefined;
    display.value = num1;
  }
  else if (displayedResult.lastIndexOf(" ") === (displayedResult.length - 1)) {
    display.value = displayedResult.slice(0, -1);
  }
  else if (num2 !== undefined) {
    num2 = num2.slice(0, -1);
    display.value = `${num1} ${operator} ${num2}`;
    if (num2 == " ") {
      num2 = undefined;
    }
  }
}


display.addEventListener('keydown', (event) => {
  event.preventDefault();
  if ('0123456789'.includes(event.key)) {
    number_updater(event.key)
  }
  else if(event.key === '%'){
    display.value = `${display.value}%`;
    percentageChecker = true;
  }
  else if ('+-/*'.includes(event.key)) {
    operatorFunction(event.key);
  }
  else if (event.key === '.') {
    decimalAdder();
  }
  else if (event.key === 'Backspace') {
    backspaceOperation();
  }
  else if (event.key === 'Enter') {
    equalToOperation();
  }
  console.log(event.key, event.repeat)

})