/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let ol = document.getElementById('target');
    let template = document.getElementById('tpl-hero')
    document.getElementById('run').addEventListener('click',()=>{

       ol.textContent =""; // beuuuuuh
        fetch("http://localhost:3000/heroes")
        .then(function(response){
            return response.json();
        }).then(function(data){
           data.forEach(hero =>{
               let newtemp = document.importNode(template.content, true);
               newtemp.querySelector('.name').textContent = hero.name;
               newtemp.querySelector('.alter-ego').textContent = hero.alterEgo;
               newtemp.querySelector('.powers').textContent = hero.abilities;

               ol.appendChild(newtemp);
           })
        })
        
        

    })
})();
