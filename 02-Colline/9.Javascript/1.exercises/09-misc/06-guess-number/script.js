/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let RandomNumber = Math.random()*100<<0;
    let nombreCHoisi = prompt('choississez un nombre entre 1 et 100: ');
    let nombreEssai = 0
    while(parseInt(nombreCHoisi) != RandomNumber){
        if(nombreCHoisi < RandomNumber){
            nombreCHoisi = prompt('le nombre est trop petit, essaye à nouveau');
        }
        else if(parseInt(nombreCHoisi)>RandomNumber){
            nombreCHoisi = prompt('le nombre est trop grand, essaye à nouveau');
        }
        nombreEssai+=1;
        console.log(nombreEssai);
    }
    console.log(`félicitation le nombre est bien ${RandomNumber}, vous avez utilisé ${nombreEssai} essai(s)`);
})();
