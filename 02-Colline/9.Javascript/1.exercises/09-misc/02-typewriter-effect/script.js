/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function random(min,max){
        return Math.floor(Math.random()*max)+min;
    }
    
    const str = document.getElementById('target').innerHTML;
    document.getElementById('target').innerHTML ="";
    let tableau = str.split('');
    let i = 0;

    setInterval(() => {
        if(i<tableau.length){
            let span = document.createElement('span');
            span.textContent= tableau[i];
            document.getElementById('target').appendChild(span);
            i++;
        }else{
            clearInterval();
        }
    }, random(50,500));

    
    
})();
