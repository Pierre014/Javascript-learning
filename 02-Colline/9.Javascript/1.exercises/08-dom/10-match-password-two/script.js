/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        let mps1 = document.getElementById('pass-one').value;
        let mps2 = document.getElementById('pass-two').value;

        if(mps1 != mps2){
            document.getElementById('pass-one').style.border = '1px solid red';
            document.getElementById('pass-two').style.border = '1px solid red';
            document.getElementById('pass-one').setAttribute('class','error');
            document.getElementById('pass-two').setAttribute('class','error');
        }else if(mps1 ==='' && mps2===''){
            alert('ces champs sont obligatoires');
        }else{
            document.getElementById('pass-one').style.border = '1px solid green'
            document.getElementById('pass-two').style.border = '1px solid green'
            alert('Acces authorisé !');
        }
    })
})();
