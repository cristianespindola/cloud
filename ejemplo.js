let os = require('os');
let fs = require('fs');

let username = os.userInfo().username;
let hostname = os.hostname();

// copia info en un archivo
fs.writeFileSync('username.txt', username);

let data = {
    username: os.userInfo().username,
    hostname: os.hostname(),
};

//copia info en un archivo json
fs.writeFileSync('datos.json',JSON.stringify(data));

// lo mismo que el anterior pero con argumento
if (process.argv.length < 3){
    console.log('ERROR: Falta un parametro.');
    process.exit(-1);
    }
let filename = process.argv[2];
fs.writeFileSync(filename, JSON.stringify(data));

//lo mismo pero hay error lo termina
process.on('exit', (code) => console.log('Finalizó la ejecución con código ' + code));
if (process.argv.length < 3){
console.log('ERROR: Falta un parametro.');
process.exit(-1);
}
const filename = process.argv[2];
fs.writeFileSync(filename, JSON.stringify(data));

// le paso un argumento, leo el archivo dado y si el archivo es un json mal tiro error
if (process.argv.length < 3) {
    console.error('Falta un parametro');
    process.exit(-1);
    }
    const filename = process.argv[2];
    let data = fs.readFileSync(filename);
    try {
    data = JSON.parse(data);
} catch (error) {
    console.log('Error en JSON: ' + error.message);
    process.exit(-1);
}
    console.log('Hola soy ' + data.username);   