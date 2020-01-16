/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let heure = new Date();
    let minute = new Date();
    let changeMess;
    if(heure.getHours() <=17){
        if(minute.getMinutes() <= 30){
            changeMess = document.getElementById('target').innerHTML = 'bonjour';
        }

    }else{
        changeMess = document.getElementById('target').innerHTML='bonsoir';
    }
})();
