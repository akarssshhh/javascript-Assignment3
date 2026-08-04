function delay(message){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(message);
        },1000)
    })
}

// async function sequential() {
//     console.time("sequential");

//     console.log(await delay("Task-1"));
//     console.log(await delay("Task-2"));
//     console.log(await delay("Task-3"));
    
//     console.timeEnd("sequential");
// }
// sequential();

async function parallel() {
    console.time("parallel");
    const result = await Promise.all([
        delay("task-4"),
        delay("task-5"),
        delay("task-6"),
    ]);
    console.log(result);
    console.timeEnd("parallel");
}
parallel();