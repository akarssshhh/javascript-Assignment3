const Mypromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Data Loaded!")
    }, 1000);
});

Mypromise.then((message)=>{
    console.log(message)
});
