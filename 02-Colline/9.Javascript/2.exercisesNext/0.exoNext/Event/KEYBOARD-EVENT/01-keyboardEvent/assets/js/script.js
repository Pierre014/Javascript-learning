(()=>{
    function backevent(){
        let background = '#'+(Math.random()*0XFFFFFF<<0).toString(16);
        document.getElementById("character").style.backgroundColor = background;      
    }
    document.addEventListener('keydown',(key)=>{
        console.log(key.keyCode)
        let background = '#'+(Math.random()*0XFFFFFF<<0).toString(16);
        switch(key.keyCode){
            case 48:
                backevent();
                break;
            case 49:
                backevent();
                break;
            case 50:
                backevent();
                break;
            case 51:
                backevent();
                break;
            case 52:
                backevent();
                break;
            case 53:
                backevent();
                break;
            case 54:
                backevent();
                break;
            case 55:
                backevent();
                break;
            case 56:
                backevent();
                break;
            case 57:
                backevent();
                break;
        }
    })






})()