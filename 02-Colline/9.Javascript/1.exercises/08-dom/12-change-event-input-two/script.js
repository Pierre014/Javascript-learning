/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function motDePasse(){
        let nbr = document.getElementById('pass-one').value.length;
        let nombredeChiffre =0;
        let mpvalue = document.getElementById('pass-one').value;
            for(const val of mpvalue){
                if(!isNaN(val)){
                    nombredeChiffre +=1;
                }
            }
        if(nbr<8 || nombredeChiffre <2){
            document.getElementById('validity').textContent = "pas ok";
        }else{
            document.getElementById('validity').textContent = "ok";
        }
    }


    document.getElementById('pass-one').addEventListener('keydown',motDePasse);
})();
