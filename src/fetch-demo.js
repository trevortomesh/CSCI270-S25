fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // parse JSON from the response

}).then(data => {
    console.log(data);
}).catch(error => {
    console.error(`Fetch Error:`, error);
});