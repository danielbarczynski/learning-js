// const id = prompt('');
// id = parseInt(id);
const inp = document.querySelector('#inp');
const div = document.querySelector('#fetch');
const btnClick = document.querySelector('#btnClick');

btnClick.addEventListener('click', getData)
console.log(inp);
// GET
function getData(id) {
    //* fetch is a promise, so we can use after it then, catch or async
    fetch(`https://reqres.in/api/users/${id}`)
        .then(response => response.json()) // deserializing response e.g http status: 200, body with our user 
        .then(data => { // using deserialize object
            div.innerHTML = `${JSON.stringify(data)}`
            console.log(data);
        });
}

// POST
fetch(`https://reqres.in/api/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 7,
        name: 'Daniel',
        age: 23,
        isDeveloper: true
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

    
fetch(`https://reqres.in/api/users/7`, {
    method: 'DELETE',
});

getData(7);