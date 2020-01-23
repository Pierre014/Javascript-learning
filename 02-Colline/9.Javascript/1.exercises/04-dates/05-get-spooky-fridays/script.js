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
        let spooky = new Date();
         for(i = 0; i<mois.length;i++){
            spooky.setFullYear(annee);
            spooky.setMonth(i);
            spooky.setDate(13);
            if(spooky.getDay() == 5){
                console.log("vendredi 13 au mois de "+mois[i])
            }
        }
        

    })
})();
