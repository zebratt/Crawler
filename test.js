function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function init(){
    for(let i=0; i<20; i++){
        await sleep(500)

        console.log(i);
    }
}

init()