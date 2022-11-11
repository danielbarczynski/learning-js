// const id = prompt('');
// id = parseInt(id);
const id = 5;
const div = document.querySelector('#fetch');
const btnClick = document.querySelector('#btnClick');
btnClick.addEventListener('click', getData)

// GET
function getData() {
    fetch(`https://reqres.in/api/users/${id}`)
        .then(response => response.json())
        .then(data => {
            div.textContent = `${JSON.stringify(data)}`
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
        name: 'Daniel',
        age: 23,
        isDeveloper: true
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

