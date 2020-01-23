/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        window.lib.getPosts()
            .then(articles => { //on va rechercher la promesse de getPosts
                articles.forEach(article => { //ici code effectué par la promesse
                    window.lib.getComments(article.id).then(comment =>{ //promesse de comments
                        article.comment = comment; // code de la promesse
                    })
                });
                console.log(articles);
            })
    })
})();
