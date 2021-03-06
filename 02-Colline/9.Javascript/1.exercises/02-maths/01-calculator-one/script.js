/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let number1;
    let number2;
    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        number1 = parseInt(document.getElementById('op-one').value);
        number2 = parseInt(document.getElementById('op-two').value);
        alert(number1 + number2);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        number1 = parseInt(document.getElementById('op-one').value);
        number2 = parseInt(document.getElementById('op-two').value);
        alert(number1-number2);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        number1 = parseInt(document.getElementById('op-one').value);
        number2 = parseInt(document.getElementById('op-two').value);
        alert(number1*number2);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        number1 = parseInt(document.getElementById('op-one').value);
        number2 = parseInt(document.getElementById('op-two').value);
        alert(number1/number2);
    });
})();
