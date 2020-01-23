/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
        document.getElementById('run').addEventListener('click',()=>{
            //idem que window.lib.getPosts((error,article)=>{...})
            //fct getPosts prend un callback en para qui appelle deux paramètre, une errreur et 
            // un tableau d'article
            window.lib.getPosts(function callback(error,article){ 
                if(article)
                console.log(article);
                else
                console.log(error);
            })
        })
})();
