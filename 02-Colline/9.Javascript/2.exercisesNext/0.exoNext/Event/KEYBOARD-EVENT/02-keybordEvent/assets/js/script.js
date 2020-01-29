(()=>{
  function opacityclear(id){
      document.getElementById(id).removeAttribute('class','highlight');
  }
  function opacityadd(id){
    document.getElementById(id).setAttribute('class','highlight');
  }

  document.addEventListener('keydown',(key)=>{

    switch(key.keyCode){
  
      case 38:
        if(document.getElementById('up').getAttribute('class','highlight'==true)){
          opacityclear("up");
        }else{
          opacityadd('up');
        }
        break;

      case 39:
        if(document.getElementById('right').getAttribute('class','highlight'==true)){
          opacityclear("right");
        }else{
          opacityadd('right');
        }
        break;

      case 37:
        if(document.getElementById('left').getAttribute('class','highlight'==true)){
          opacityclear("left");
        }else{
          opacityadd('left');
        }
        break;

      case 40:
        if(document.getElementById('down').getAttribute('class','highlight'==true)){
          opacityclear("down");
        }else{
          opacityadd('down');
        }
    }
  })















})()
