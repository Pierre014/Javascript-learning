/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let Pierre = {
        name: 'Lorand',
        Prenom: 'pierre',
        surnom: 'Marquis',
        city: 'Fleurus',
        Age: '27'
    }
    document.getElementById('run').addEventListener('click',()=>{
       console.log(Pierre);// montre ce que contient l'objet
        console.log(`${Pierre.name} ${Pierre.Prenom}, mon surnom est ${Pierre.surnom}, je vis à ${Pierre.city} et j'ai ${Pierre.Age} ans`);
    })
})();
