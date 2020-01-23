/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let paraElt = document.getElementsByTagName('p'); // on selectionne tout les selecteur
    for(const para of paraElt){ //on fait une boucle pour passer en revue tout les p
        if(para.className ==='target'){ //on pose une condition pour cibler les p ayant un la bonne class
            para.textContent = 'owned';
        }
    }

    /* autre solution*/
    let paraElt = document.getElementsByClassName('target');
    for(const para of paraElt){
        para.textContent = 'owned';
    }*/


    // Autre solution trouvée valable
    /*const targets = Array.from(document.getElementsByClassName("target"));
      targets.forEach(target => {
            target.innerHTML = "owned";
      });*/
})();
