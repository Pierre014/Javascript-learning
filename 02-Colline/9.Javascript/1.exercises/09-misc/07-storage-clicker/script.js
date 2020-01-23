/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let increment = localStorage.getItem('countTime'); // recolte la valeur de storage stockée dans 'counttime')
    document.getElementById('target').innerHTML = increment; //affiche la valeur

    document.getElementById('increment').addEventListener('click',()=>{
        
        increment++; //incrément +1
        document.getElementById('target').innerHTML = increment; //affiche sur la page
        
        localStorage.setItem('countTime',increment) // sauvegarde la valeur dans storage
    })
})();
