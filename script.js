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
