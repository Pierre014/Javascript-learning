/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    let image = document.querySelector('img').getAttribute('data-hover');
    let srcImg = document.querySelector('img').getAttribute('src');
    document.querySelector('img').id = 'source';
    document.getElementById('source').addEventListener('mouseover',()=>{
     
        document.getElementById('source').setAttribute('src',image);
    })
    document.getElementById('source').addEventListener('mouseleave',()=>{
     
        document.getElementById('source').setAttribute('src',srcImg);
    })

})();
