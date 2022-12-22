function varLet() {
    if (true) {
        var myVar = 55; // var is function scoped
        let myLet = 66; // let is block scoped 
    }
    console.log(myVar);
    // console.log(myLet); //! error myLet is not defined
}

varLet();