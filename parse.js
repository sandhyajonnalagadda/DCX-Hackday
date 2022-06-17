
var fs = require('fs');
var array = fs.readFileSync('Jenkinsfile').toString().split("\n");
var yaml = fs.readFileSync('template.yml').toString();

for(i in array) {
    array[i] += '\n';
    if (array[i].includes('steps')) {
        i++;

        console.log(array[i]);
        
        console.log(yaml.toString().replace(/{{ command }}/, array[i]));
       
    }
}