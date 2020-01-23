/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
        let target = document.getElementById('target');
        let template = document.getElementById('tpl-hero')


    document.getElementById('run').addEventListener('click',()=>{
        let identite = document.getElementById('hero-id').value;

        fetch("http://localhost:3000/heroes")
        .then(Response => Response.json()).then(hero =>{
            try{
                let newtp = document.importNode(template.content, true)
                    newtp.querySelector('.name').textContent = hero[identite].name;
                    newtp.querySelector('.alter-ego').textContent = hero[identite].alterEgo;
                    newtp.querySelector('.powers').textContent = hero[identite].abilities;

                    target.appendChild(newtp)
            }
            catch{
                console.log("vous avez dépassé la taille du tableau")
            }
        })
    })

})();