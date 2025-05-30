// Get a post

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => res.json())
.then(data => console.log('GET:', data));

//Post a new item
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({title:'New', body:'Hello!', userId: 1})
}).then(res => res.json())
    .then(data => console.log('POST:', data));