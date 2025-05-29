function fetchData(){
    return new Promise((resolve, reject) => {

        setTimeout(()=> {

            const success = false

            if (success) {
                resolve("Data loaded successfully");
            } else {
                reject("Error while fetching data");
            }
        },2000);
        });
}

fetchData().then(result=>{
    console.log(result);
}).catch(error=>{
    console.error(error);
});
