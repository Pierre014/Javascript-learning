/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let chaine = document.getElementById('numbers').value;
    chaine = chaine.split(", ");
    document.getElementById("run").addEventListener("click", () => {
        // your code here
       for(let i = 0; i<chaine.length; i++){
           chaine[i] = parseInt(chaine[i]);
       }
       chaine.sort((a,b)=>(a-b));
       console.log(chaine);
        
    });
})();
