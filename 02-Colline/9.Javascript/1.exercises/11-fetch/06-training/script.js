(()=>{

    //training fetch

    const todos = async function(){
        let todo = await fetch("https://jsonplaceholder.typicode.com/todos");
        if(todo.ok){
            let data = await todo.json();
            console.log(data);
        }else{
            console.log("erreur: "+todo.status);
        }
    }
    const posts = async function(data){
        let post = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(data)
        })
        if(post.ok){
            let donne = await post.json();
            console.log(donne);
        }else{
            console.log("error: "+post.status);
        }
    }
    todos();
    posts({userId:11,
           id:101,
           title: "lorem ipsum dolor",
           body: "lorem ipsum data dolor, abissum in vocat"})












})();