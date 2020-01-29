(()=>{
    //tap your code here

    window.addEventListener('mousemove',(e)=>{

        document.getElementById('axe-x').innerHTML = `Pos X: ${e.x}`;
        document.getElementById('axe-y').innerHTML = `Pos Y: ${e.y}`;
    })


})()