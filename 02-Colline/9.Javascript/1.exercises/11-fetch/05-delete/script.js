/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const suprimer = async function(ident){

        let sup = await fetch("http://localhost:3000/heroes/" +ident,{
            method:'delete',
        })
        if(sup.ok){
            let data = await sup.json();
            console.log("suppression de l'objet: " + ident);
            console.log(data);
        }else{
            console.error('erreur: '+sup.status);
        }

    }
    document.getElementById('run').addEventListener('click',()=>{

        let identity = document.getElementById('hero-id').value;

        suprimer(identity);
        

    })



})();
