/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class person{
        constructor(lastname,firstname){
            this.lastname = lastname;
            this.firstname = firstname;
        }
        sayHello(){
            return `Hello ${this.firstname} ${this.lastname};`
        }
    }
    document.getElementById('run').addEventListener('click',()=>{
        const pierre = new person('Pierre','Lorand');
        console.log(pierre.sayHello());

    })
})();
