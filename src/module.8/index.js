// Promise is object

// pending
// done
// err


const promise = new Promise((resolve, reject) => {
    const i = 1;

    if(i < 5){
        resolve()
    }else{
        reject();
    }
});

promise.then(()=>{
    console.log('ok');
});

promise.catch(()=>{
    console.log('bad');
});

//Promise.all([fetch(url), fetch(url)])


//fetch

fetch('src/data.json')
    .then(res => {

        if(res.status === 404){
            console.log('bad');
        }else{
            console.log('ok');
        }

    })
    .catch(err => {
        console.log('bad');
    });