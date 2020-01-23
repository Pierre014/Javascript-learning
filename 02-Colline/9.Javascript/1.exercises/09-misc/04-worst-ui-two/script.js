/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let partOne = parseInt(document.getElementById('part-one').getAttribute('data-min'))
    let partTwo = parseInt(document.getElementById('part-two').getAttribute('data-min'))
    let partThree = parseInt(document.getElementById('part-three').getAttribute('data-min'))
    let partFour = parseInt(document.getElementById('part-four').getAttribute('data-min'))
    // your code here
    document.getElementById('part-one').addEventListener('click',()=>{
        if(partOne<499){
            partOne+=1;
            document.getElementById('target').textContent = "+"+partOne+partTwo+partThree+partFour;
            let button1 = document.getElementById('part-one').innerHTML =partOne;
        }else{
            partOne = 460;
            let button1 = document.getElementById('part-one').innerHTML =partOne;
            document.getElementById('target').textContent = "+"+partOne+partTwo+partThree+partFour;
        }

    })
    document.getElementById('part-two').addEventListener('click',()=>{
        if(partTwo<99){
           
            partTwo+=1;
            document.getElementById('target').textContent = "+"+partOne+partTwo+partThree+partFour;
            let button2 = document.getElementById('part-two').innerHTML =partTwo;
        }else{
            partTwo = 0;
            document.getElementById('target').textContent = "+"+partOne+partTwo+partThree+partFour;
        }

    })
   document.getElementById('part-three').addEventListener('click',()=>{
        if(partThree<99){
                partThree+=1;
                document.getElementById('target').textContent = "+"+partOne+partTwo+partThree+partFour;
            }
        else{
            partThree = 0;
            document.getElementById('target').textContent = "+"+partOne+partTwo+partThree+partFour;
        }

    })
    document.getElementById('part-four').addEventListener('click',()=>{
        if(partFour<99){
            partFour+=1;
            document.getElementById('target').textContent = "+"+partOne+partTwo+partThree+partFour;
        }else{
             partFour = 00;
            document.getElementById('target').textContent = "+"+partOne+partTwo+partThree+partFour;
        }

    })
})();
