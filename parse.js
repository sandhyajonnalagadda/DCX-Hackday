
var fs = require('fs');
var array = fs.readFileSync('Jenkinsfile').toString().split("\n");
var yaml = fs.readFileSync('template.yml').toString().split("\n");

for(i in array) {
    if (array[i].includes('steps')) {
        i++;

        console.log(array[i]);
        
        console.log(yaml.toString().replace(/{{ command }}/, array[i]));
       
    }
}