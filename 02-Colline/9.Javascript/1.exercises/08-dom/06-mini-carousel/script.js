/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

   let next = document.getElementById('next');
   let i =0;
      next.onclick = () => {
            i++;
            if(i<gallery.length){
            document.querySelector('img').setAttribute('src',gallery[i]);
            }else{
                i=-1;
            }
      }
   





    // your code here
    //let image = document.querySelector('img').getAttribute('src'); //on recupère la valeur de l'attribut
    //document.querySelector('img').id = 'source';
    
    /*document.getElementById('next').addEventListener('click',()=>{
        let i =0;
        while(i< gallery.length){
            document.querySelector('img').setAttribute('src',gallery[i]);
            i++;
        }
    })*/
})();
