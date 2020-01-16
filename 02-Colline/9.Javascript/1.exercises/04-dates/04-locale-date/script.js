/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let jour =["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
    let mois =["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout",
                "Septembre","Octobre","Novembre","Décembre"];
    let num = new Date();
    let heure = new Date();
    let moisFr = new Date();
    let joursFr = new Date();

    let message = `${jour[joursFr.getDay()]},${num.getUTCDate()} ${mois[moisFr.getMonth()]}, ${heure.getUTCHours()+1}h${heure.getUTCMinutes()} `;
    document.getElementById("target").innerHTML = message;


// note à moi-même, surment faisaible en ne déclarant qu'une fois le variable date et on modifie sa valeurs au niveau du message.



    
    /*let jourFinal;
    let moisFinal;
    let joursFr = new Date();
    let moisFr = new Date();
    for(let i = 0; i<jour.length; i++){
       if(joursFr.getDay()=== jour.indexOf(jour[i])){
           jourFinal = jour[i];
       }
    }
    for(let b = 0; b<mois.length; b++){
        if(moisFr.getMonth()=== mois.indexOf(mois[b])){
            moisFinal = mois[b];
        }
    }
    console.log[moisFinal];*/
    
})();
