(()=>{
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let x = Math.floor((Math.random()*canvas.width)+canvas.height);
    let y = Math.floor((Math.random()*canvas.width)+canvas.height);
    let v = 5
    let vitShot = 4;
    let xPos = 400;
    let yPos = 550;


    canvas.width = 600
    canvas.height = 600

    function anim(){
        //animation
        requestAnimationFrame(anim)
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.arc(x,y,20,0,2*Math.PI);
        ctx.strokeStyle='red';
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'black'
        ctx.fillRect(xPos,550,20,50);
        ctx.stroke();
        createPiouPiou();
        if(x+20>canvas.width || x-20<0){
            v =-v;
        }
        x+=v
    }
    function createPiouPiou(){
        ctx.fillStyle = "blue"
        ctx.fillRect(xPos,yPos,10,10)
        ctx.stroke();
    }

    function move(e){
        if(e.keyCode == 37){
            xPos -= 10;
        }
        if(e.keyCode == 39){
            xPos += 10;
        }

        if(xPos+20>canvas.width){
            xPos = canvas.width-20;
        }
        if(xPos<0){
            xPos= 0
        }
        if(e.keyCode==32){
            let int = setInterval(()=>{
                yPos -=vitShot
                console.log(yPos)
                if(yPos<0){
                    yPos=550;
                    clearInterval(int) 
                } 
                
            },10)
        }
    }







    anim()
    window.addEventListener("keydown",move);



})()