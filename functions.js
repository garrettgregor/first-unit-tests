// functions.js
function addTwoNumbers(num1, num2) {
    return num1 + num2
};

function sayHello(name) {
    if (name === "Will") {
        return `No more testing ${name}!`
    } else {
        return `Hi there ${name}!`
    }
}

module.exports = {
    addTwoNumbers,
    sayHello,
    // buildCar
}