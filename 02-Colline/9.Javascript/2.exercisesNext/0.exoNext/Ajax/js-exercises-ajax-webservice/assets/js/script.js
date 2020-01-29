(()=>{

    //creation d'un requete ajax pour aller recuperer une citation sur un site et l'injecter
    //sur notre page web
    //apprenant Pierre Lorand
    //https://thatsthespir.it/api

    const findQuote = async function(){
        let citation = await fetch("https://thatsthespir.it/api");
        if(citation.ok){
            let data = await citation.json().then(recup =>{
                let author = recup.author;
                let quote = recup.quote;
                document.getElementById("quote").innerHTML = quote +"<br>"+ author
            })
        }else{
            console.log("error: " + citation.status);
        }
    }
    findQuote()
    document.getElementById("run").addEventListener('click',()=>{
        findQuote();
    })


})();