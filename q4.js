const Mypromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Data Loaded")
    }, 1000);
});

async function loadData(){
    const result = await Mypromise;
    console.log(result);
};

loadData();