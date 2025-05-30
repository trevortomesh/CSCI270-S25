fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        title: 'REST is Awesome!',
        body: 'This was sent using POST to /posts',
        userId: 1
    })
}).then(res => res.json())
    .then(data => console.log('Created', data));

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        id: 1,
        title: 'Updated Title',
        body: 'Changed body text',
        userId: 1
    })
}).then(res => res.json())
.then(data => console.log('Updated', data));