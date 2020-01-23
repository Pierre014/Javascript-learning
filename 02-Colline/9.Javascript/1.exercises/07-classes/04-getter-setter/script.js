/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get Fullname(){
            return `${this.firstname} ${this.lastname}`; 
        }
        set Fullname(value){
            const partie = value.split(' ');
            this.firstname = partie[0];
            this.lastname = partie[1];
        }
    }
    document.getElementById('run').addEventListener('click',()=>{
        let pierre = new Person('Pierre','Lorand');
        console.log(pierre.Fullname); // pas besoin des parenthèses. Fullname agit comme une propriété!!!!
        pierre.Fullname = 'King Doggy';
        console.log(pierre.Fullname);
        console.log(pierre);
    })
})();
