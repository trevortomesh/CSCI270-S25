const postData = {
    title: 'Hello World',
    body: 'This is my first post',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts/',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
    }).then(response => response.json())
.then(data => {
        console.log('Post created:', data);
        }).catch(error => {
            console.error('Error:', error);
});