/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*let data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        console.log(data);*/
        //dans le cas où, on essaye d'appeler une adresse bidon, utiliser un try and catch pour
        //voir l'erreur
        // toujours utiliser un if pour savoir si on a une reponse!!!!!!!
        /*const getUsers = async function(){
        try {

            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(response.ok){
                 let data = await response.json();
                console.log(data);
            }else{
                console.error('retour du serveur : '+response.status)
            }
        } catch (e){
            console.log(e)
        }
        }
    
    const insertpost = async function(data){
        
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if(response.ok){
            let data = await response.json();
            console.log(data)
        }else{
            console.error('retour erreur' + response.status);
        }
    }
  insertpost({
      name:"jean",
      age:29
  })
   */
(() => {
    // your code here
    const input = [document.getElementById('hero-name'),
                   document.getElementById('hero-alter-ego'),
                   document.getElementById('hero-powers')];
    
    document.getElementById('run').addEventListener('click', ()=>{

        
        if(!input[0].value || !input[1].value || !input[2].value){
            alert('vous devez remplir tout les champs');
        }else{
            let newHero = {};
            fetch("http://localhost:3000/heroes")//reprise du json pour le dernier index
            .then(Response => Response.json().then((heroes)=>{
                let array = heroes;
                let length = array.length;
                newHero.id = length+1;
            }))
        newHero.name = input[0].value;
        newHero.alterEgo = input[1].value;
        newHero.abilities = input[2].value.split(', ');

        fetch("http://localhost:3000/heroes/",{
            method:'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(newHero);
        })
        };
    })
   
})();
