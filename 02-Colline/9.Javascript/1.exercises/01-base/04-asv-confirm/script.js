/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
})();
let age = prompt("entrez votre age");
let sexe = prompt("entrez votre sexe");
let ville = prompt("entrez votre ville")

while(confirm(`${age} ${sexe} ${ville}`) === false){
    age = prompt("entrez votre age");
    sexe = prompt("entrez votre sexe");
    ville = prompt("entrez votre ville");
}
