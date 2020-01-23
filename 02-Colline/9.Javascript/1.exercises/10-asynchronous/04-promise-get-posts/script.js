/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        window.lib.getPosts() //appelle de la fonction
        .then((article)=>{ //then permet de recupère la prommesse
            console.log(article);
        })
        .catch((error)=>{ // si on a une erreur, on l'affiche
            console.error(error)
        })
    })
})();
