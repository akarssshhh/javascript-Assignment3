const chain = new Promise((resolve,reject) => {
    resolve(5)
})
    .then((Number)=> {
    console.log(Number);
     return (Number*2);
})
    .then((Number)=> {
        console.log(Number);
        return (Number + 10);
})
    .then((Number) =>{
        console.log(`Final : ${Number}`);
    });