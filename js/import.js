// you can only import default one thing
// in html need to be: <script type="module">

export default class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

export function printName(user) {
    console.log(`The user name is ${user.name}`);
}

export function printAge(user) {
    console.log(`The user age is ${user.age}`); 
}