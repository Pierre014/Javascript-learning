/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        const tabId = ["n-1","n-2","n-3","n-4","n-5","n-6","n-7","n-8","n-9","n-10"];
        let DI;
        const DIV = [];
        let max = 0;
        let min =0;
        let moyenne = 0;
        let somme = 0
        
        /*tabId.forEach(ident=>{
            DI = document.getElementById(ident).innerHTML =Math.random()*100<<0;
            DIV.push(DI.value);
            console.log(DIV[indent]);
        })*/


        //genere des valeurs aleatoire pour le tableau
        //on recupère les valeurs dans un tableau pour pouvoir travailler dessus;
        for(let i =0; i<tabId.length;i++){
            DI = document.getElementById(tabId[i]).innerHTML = Math.random()*100<<0;
            DIV.push(DI);
        }
        //trouver le maximum et le minimum du tableau
        max = Math.max(...DIV);
        min = Math.min(...DIV);

        //somme du tableau
        DIV.forEach(sum =>{
            somme += sum;
        });

        moyenne = (somme/10);



        //affichage dans la zone de texte correspondante
        document.getElementById('min').innerHTML = min;
        document.getElementById('max').innerHTML = max;
        document.getElementById('sum').innerHTML = somme;
        document.getElementById('average').innerHTML = moyenne;

    })
})();
