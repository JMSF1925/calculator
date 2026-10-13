let firstNumber;
let secNumber;
let operator;

const digits = document.querySelectorAll(".normal");
const display = document.querySelector("input");
const comma = document.querySelector(".comma");
const deleteDigit = document.querySelector(".delete");
const clear = document.querySelector(".clean");
const percentage = document.querySelector(".percentage");
const changeSignal = document.querySelector("#change");

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if(display.value === "0" && digit.textContent === "0")
        {
            clear.textContent = "AC";
        }
        else if(display.value === "0")
        {
            display.value = digit.textContent;
            firstNumber = display.value;
            console.log(firstNumber);
            clear.textContent = "C";
        }
        else
        {
            display.value += digit.textContent;
            firstNumber = display.value;
            console.log(firstNumber);
            clear.textContent = "C";
        }
    });
});

comma.addEventListener("click", () => {
    if(!display.value.includes("."))
    {
        display.value += comma.textContent;
        firstNumber = display.value;
        console.log(firstNumber);
        clear.textContent = "C";
    }
});

deleteDigit.addEventListener("click", () => {
    if(display.value.length === 1)
    {
        display.value = "0";
        firstNumber = display.value;
        console.log(firstNumber);
        clear.textContent = "AC";
    }
    else
    {
        let tempString = display.value.slice(0, -1);
        display.value = tempString;
        firstNumber = display.value;
        console.log(firstNumber);
    }
});

clear.addEventListener("click", () => {
    if(display.value !== "0")
    {
        display.value = "0";
        firstNumber = display.value;
        console.log(firstNumber);
        clear.textContent = "AC";
    }
});

percentage.addEventListener("click", () => {
    if(!display.value.includes("%"))
    {
        display.value += percentage.textContent;
        firstNumber = display.value;
        console.log(firstNumber);
        clear.textContent = "C";
    }
})

changeSignal.addEventListener("click", () => {
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
})

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
