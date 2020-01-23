/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let inter
    let inter2;
    let inter3;
    let inter4;
    let count = 0;
    let count2 = 0;
    let count3 =0;
    let count4 = 0;
    let partOne = (parseInt(document.getElementById('part-one').getAttribute('data-min')));
    let partTwo = (parseInt(document.getElementById('part-two').getAttribute('data-min')));
    let partThree = (parseInt(document.getElementById('part-three').getAttribute('data-min')));
    let partFour = (parseInt(document.getElementById('part-four').getAttribute('data-min')));
    /*creattion fonction interval*/
    function partOneFunc(){
            if(partOne<499){
                partOne+=1;
                document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
                document.getElementById('part-one').setAttribute('value',partOne);
            }else{
                partOne=460;
                document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
                document.getElementById('part-one').setAttribute('value',partOne);
            }
        }
    function partTwoFunc(){
            if(partTwo<99){
                partTwo+=1;
                document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
                if(partTwo<10){
                    document.getElementById('part-two').setAttribute('value',"0"+partTwo);
                }else{
                    document.getElementById('part-two').setAttribute('value',partTwo);
                }
            }else{
                partTwo=0;
                document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
                
            }
        }
    function partThreeFunc(){
            if(partThree<99){
                partThree+=1;
                document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
                if(partThree<10){
                    document.getElementById('part-three').setAttribute('value',"0"+partThree);
                }else{
                    document.getElementById('part-three').setAttribute('value',partThree);
                }
            }else{
                partThree=0;
                document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
                
            }
        }
    function partFourFunc(){
            if(partFour<99){
                partFour+=1;
                document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
                if(partFour<10){
                    document.getElementById('part-four').setAttribute('value',"0"+partFour);
                }else{
                    document.getElementById('part-four').setAttribute('value',partFour);
                }
            }else{
                partFour=0;
                document.getElementById('target').innerHTML = "+"+partOne+partTwo+partThree+partFour;
                
            }
        }
    
       //action !!!!!!!!!!
       inter =  setInterval(partOneFunc,60);
       inter2 = setInterval(partTwoFunc,30);
       inter3 = setInterval(partThreeFunc,15);
       inter4 = setInterval(partFourFunc,5);

    document.getElementById('fix-part-one').addEventListener('click',()=>{
        
        if(count%2==0){
            clearInterval(inter);
            count++;
            document.getElementById('part-one').setAttribute('value',partOne);
        }else{
            inter =  setInterval(partOneFunc,60);
            count++;

        }
        
    });

    document.getElementById('fix-part-two').addEventListener('click',()=>{

        if(count2%2==0){
            clearInterval(inter2);
            count2++;
        }else{
            inter2 =  setInterval(partTwoFunc,30);
            count2++;

        }
    });
    document.getElementById('fix-part-three').addEventListener('click',()=>{

        if(count3%2==0){
            clearInterval(inter3);
            count3++;
        }else{
            inter3 =  setInterval(partThreeFunc,15);
            count3++;

        }
    });
    document.getElementById('fix-part-four').addEventListener('click',()=>{

        if(count4%2==0){
            clearInterval(inter4);
            count4++;
        }else{
            inter4 =  setInterval(partFourFunc,30);
            count4++;

        }
    });
})();
