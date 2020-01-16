/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener('click',()=>{
        let annee = parseInt(document.getElementById('year').value);
        let mois =["jan", "fev","mars","avril","mai","juin","juillet","aout","sept","octo","nov","dec"];
        let jour = ["diman","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
        let spooky = new Date();
        spooky.setFullYear(annee);

        for(let i = 0; i<mois.length;i++){
            for(let b = 1; b<=31; i++){}
        }

    })
})();
