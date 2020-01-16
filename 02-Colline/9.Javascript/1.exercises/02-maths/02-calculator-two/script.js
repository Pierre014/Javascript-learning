/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let number1;
        let number2;
        switch(operation){
            case "addition":
                operation = document.getElementById('addition');
                number1 = parseInt(document.getElementById('op-one').value);
                number2 = parseInt(document.getElementById('op-two').value);
                console.log(number1+number2);
                break;
            case "substraction":
                operation = document.getElementById('substraction');
                number1 = document.getElementById('op-one').value;
                number2 = document.getElementById('op-two').value;
                console.log(number1-number2);
                break;
            case "multiplication":
                operation = document.getElementById('multiplication');
                number1 = document.getElementById('op-one').value;
                number2 = document.getElementById('op-two').value;
                console.log(number1*number2);
                break;
            case "division":
                operation = document.getElementById('division');
                number1 = document.getElementById('op-one').value;
                number2 = document.getElementById('op-two').value;
                console.log(number1/number2);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
