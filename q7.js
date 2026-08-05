async function fetchpost() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("First five post");
    
    data.slice(0,5).forEach((post,index)=> {
        console.log(`${index +1}. ${post.title}`);
        
    });
    }   catch(error){
        console.log(`ERROR : ${error.message}`);
    }
}

fetchpost();