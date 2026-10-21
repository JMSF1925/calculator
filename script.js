let firstNumber = 0;
let secNumber;
let operator;
let operatorAuxilar;

const digits = document.querySelectorAll(".normal");
const display = document.querySelector("input");
const comma = document.querySelector(".comma");
const deleteDigit = document.querySelector(".delete");
const clear = document.querySelector(".clean");
const percentage = document.querySelector(".percentage");
const changeSignal = document.querySelector("#change");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

console.log(firstNumber);

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if(display.value === "0" || firstNumber === undefined)
        {
            display.value = digit.textContent;
            firstNumber = Number(display.value);
            console.log(firstNumber);
            clear.textContent = "C";
        }
        else
        {
            display.value += digit.textContent;
            firstNumber = Number(display.value);
            console.log(firstNumber);
            clear.textContent = "C";
        }
    });
});

comma.addEventListener("click", () => {
    if(!display.value.includes("."))
    {
        display.value += comma.textContent;
        firstNumber = Number(display.value);
        console.log(firstNumber);
        clear.textContent = "C";
    }
});

deleteDigit.addEventListener("click", () => {
    if(display.value.length === 1)
    {
        display.value = "0";
        firstNumber = Number(display.value);
        console.log(firstNumber);
        clear.textContent = "AC";
    }
    else
    {
        let tempString = display.value.slice(0, -1);
        display.value = tempString;
        firstNumber = Number(display.value);
        console.log(firstNumber);
    }
});

clear.addEventListener("click", () => {
    if(display.value !== "0")
    {
        display.value = "0";
        firstNumber = Number(display.value);
        console.log(firstNumber);
        clear.textContent = "AC";
    }
});

//Logic of the operations

operators.forEach((operation) => {

    operation.addEventListener("click", () => {

        /*if(secNumber === undefined)
        {
            secNumber = firstNumber;
            firstNumber = undefined;
            console.log(firstNumber);
            console.log(`Segundo número ${secNumber}`);
        }
        else
        {
            tempNumber = operate(secNumber, operation.textContent, firstNumber);
            display.value = tempNumber.toString();
            secNumber = tempNumber;
            firstNumber = undefined;
            console.log(firstNumber);
            console.log(`Segundo número ${secNumber}`);
        }*/

        if(operatorAuxilar === undefined)
        {
            operatorAuxilar = operation.textContent;
            secNumber = firstNumber;
            firstNumber = undefined;
            console.log(firstNumber);
            console.log(`Segundo número ${secNumber}`);
        }
        else
        {
            tempNumber = operate(secNumber, operatorAuxilar, firstNumber);
            display.value = tempNumber.toString();
            secNumber = tempNumber;
            firstNumber = undefined;
            console.log(firstNumber);
            console.log(`Segundo número ${secNumber}`);
            operatorAuxilar = operation.textContent;
        }

    })
})

/*percentage.addEventListener("click", () => {
    if(!display.value.includes("%"))
    {
        display.value += percentage.textContent;
        firstNumber = display.value;
        console.log(firstNumber);
        clear.textContent = "C";
    }
})*/

/*changeSignal.addEventListener("click", () => {
    if(display.value != "0" && display.value.charAt(0) != "-")
    {
        display.value = "-" + display.value;
        firstNumber = display.value;
        console.log(firstNumber);
    }
    else if(display.value != "0" && display.value.charAt(0) == "-")
    {
        let tempDisplay = display.value.slice(1);
        display.value = tempDisplay;
        firstNumber = display.value;
        console.log(firstNumber);
    }
})*/

function add(...values)
{
    let total = values.reduce((sum, current) => sum + current, 0);

    return total;
}

function subtract(firstValue, ...values)
{
    let total = values.reduce((solution, current) => solution - current, firstValue);

    return total;
}

function multiply(...values)
{
    let total = values.reduce((product, current) => product * current, 1);

    return total;
}

function divide(firstValue, ...values)
{
    let total = values.reduce((solution, current) => solution / current, firstValue);

    return total;
}

function operate(firstNum, operator, secNum)
{
    if(operator === "+")
    {
        return add(firstNum, secNum);
    }
    else if(operator === "-")
    {
        return subtract(firstNum, secNum);
    }
    else if(operator === "*" || operator === "x" )
    {
        return multiply(firstNum, secNum);
    }
    else if(operator === "/")
    {
        return divide(firstNum, secNum);
    }
}
