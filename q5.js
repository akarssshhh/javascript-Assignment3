const randomNO = new Promise((resolve,reject) => {
    const success = Math.random() >= 0.5
    setTimeout(() => {
        if (success) {
            resolve("LOADED!!")
        } else {
            reject("Failed to load")
        }
    }, 1000);
});

async function checkdata() {
    try {
        const result = await randomNO
        console.log(`sucessfully Loaded : ${result}`);
        
    } catch (error) {
        console.log(`caught error ${error}`);
    } finally {
        console.log("DONE");
    }
}

checkdata();
    