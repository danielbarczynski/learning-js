let id = prompt('');
id = parseInt(id);

// GET
fetch(`https://reqres.in/api/users/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));

// POST
fetch(`https://reqres.in/api/users`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Daniel',
        age: 23,
        isDeveloper: true
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

