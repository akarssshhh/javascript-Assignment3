const randomNO = new Promise((resolve,reject) => {
    const success = Math.random() >= 0.5;
    setTimeout(() => {
        if (success) {
            resolve("Loaded");
        } else {
            reject(new Error("Failed!!"));
        }
    }, 1000);
});

randomNO.then((data) => {
    console.log(`success : ${data}`);
})
        .catch((error) => {
            console.log(`Error : ${error}`);
            
})
        .finally(() => {
            console.log(`DONE`);
            
        });