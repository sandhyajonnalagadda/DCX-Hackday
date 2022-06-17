
// __dirname means relative to script. Use "./data.txt" if you want it relative to execution path.
var fs = require('fs');
var array = fs.readFileSync('Jenkinsfile').toString().split("\n");
var yaml = fs.readFileSync('template.yml').toString().split("\n");

for(i in array) {
    if (array[i].includes('steps')) {
        i++;

        console.log(array[i]);
        //fs.writeFile(yaml.toString().replace(/{{ command }}/, array[i]));
        console.log(yaml.toString().replace(/{{ command }}/, array[i]));
        //var file = fs.createWriteStream('output.yml');
        //console.log(array[i]);
    }
}