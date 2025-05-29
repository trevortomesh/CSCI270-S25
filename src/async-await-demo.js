async function loadPosts(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error('HTTP error! Status: ' + response.status);
        }
        const posts = await response.json();
        console.log(posts);
    } catch(error){
        console.error(`Fetch Error:`, error);
    }
}

loadPosts();