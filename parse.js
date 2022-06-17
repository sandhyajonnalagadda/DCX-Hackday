const fs = require("fs");

// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
fs.readFile(__dirname + "/Jenkinsfile", (error, data) => {
    if(error) {
        throw error;
    }
    console.log(data.toString());
});