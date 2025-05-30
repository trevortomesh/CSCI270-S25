const output = document.getElementById('output');

document.getElementById('loadBtn').addEventListener('click', async () =>{
    const res = await fetch('http://jsonplaceholder.typicode.com/posts/1');
    const post = await res.json();

    output.textContent = `Title: ${post.title}\n\n${post.body}`;
});

document.getElementById('createBtn').addEventListener('click', async () =>{
    const res = await fetch('http://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'RESTful Demo Post',
            body: 'This was created using a RESTful POST!',
            userId: 1
        })
    });

    const created = await res.json();
    output.textContent = `Created Post: \n\nID: ${created.id}\nTitle: ${created.title}`;
});