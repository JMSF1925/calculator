let firstNumber;
let secNumber;
let operator;

const digits = document.querySelectorAll(".normal");

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        console.log(digit.textContent);
    });
});

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
