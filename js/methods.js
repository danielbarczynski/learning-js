class FancyLogger {
    constructor() {
        this.logs = [];
    }

    // method in the class without function keyword
    log(message) {
        this.logs.push(message);
        console.log(`FANCY: ${message}`);
    }

    logCount() {
        console.log(`${this.logs.length} logs`);
    }
}

const fancyLogger = new FancyLogger(); // new object from the class
fancyLogger.log('1 file'); // calling class's method 
fancyLogger.logCount();