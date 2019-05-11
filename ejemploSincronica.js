let os = require('os');
let fs = require('fs');

let data = {
username: os.userInfo().username,
hostname: os.hostname(),
};
fs.writeFileSync('data.json',
JSON.stringify(data));
console.log('Archivo escrito correctamente' );