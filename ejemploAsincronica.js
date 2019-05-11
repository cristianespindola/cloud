let os = require('os');
let fs = require('fs');
let data = {
username: os.userInfo().username,
hostname: os.hostname(),
};
fs.writeFile('/root.json', JSON.stringify(data), (error) => {
if (error){
console.error('No se pudo escibir el archivo: ' + error.message);
process.exit(-1);
}
console.log('Archivo escrito correctamente');
});