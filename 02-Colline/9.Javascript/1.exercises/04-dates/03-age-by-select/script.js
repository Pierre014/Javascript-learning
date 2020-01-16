/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        let jour = document.getElementById('dob-day').value;
        let mois = document.getElementById('dob-month').value;
        let annee = document.getElementById('dob-year').value;
        let ageJour  = new Date();
        let ageMois  = new Date();
        let ageAnnee  = new Date();
        ageJour =(31*mois)-jour;
        if(mois < ageMois.getMonth()){
            ageMois = ageMois.getMonth() - mois
        } else{
            ageMois = mois - ageMois.getMonth();
        }
        ageAnnee = ageAnnee.getFullYear() - annee;
        console.log(`vous avez ${ageAnnee} ans ${ageMois} mois et ${ageJour} jours`);


    })
})();
