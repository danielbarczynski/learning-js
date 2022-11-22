// import  { User } from "../js/import.js"; // one way without default
import User, { printName, printAge as printUserAge} from './import.js';

const newUser = new User('Daniel', 23);
console.log(newUser);

printName(newUser);
printUserAge(newUser);