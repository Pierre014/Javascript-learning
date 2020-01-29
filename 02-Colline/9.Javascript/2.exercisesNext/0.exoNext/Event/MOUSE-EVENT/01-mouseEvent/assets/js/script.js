(()=>{
    const divs = Array.from(document.querySelectorAll('.hoverMe'));

    divs.forEach(div => {
        div.addEventListener('mouseover',()=>{
            div.style.opacity = "0%";
        })
    })
    
    document.getElementById('reset').addEventListener('click',()=>{
        divs.forEach(div =>{
            div.style.transitionDuration = "2s"
            div.style.opacity ="100%";
        })
    })

})()