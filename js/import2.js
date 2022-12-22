// import  { User } from "../js/import.js"; // one way without default
import User, { printName, printAge as printUserAge } from './import.js';
import { captilzeStringg } from './hello-world.js'; // require type: module in package.json

const capt = captilzeStringg('hello wolrd!');
console.log(capt);
console.log('bye');

const newUser = new User('Daniel', 23);
console.log(newUser);

printName(newUser);
printUserAge(newUser);