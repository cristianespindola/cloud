function parsear(string){
  if (string[0] === "{" && string[(string.length)-1] === "}"){
    return JSON.parse(string);
  }
  else{
    return null;
  }
  
}


let myObj = { "name":"John",
"age":31, "city":"New York" };
let myJSON =
JSON.stringify(myObj);
let m = JSON.parse(myJSON);
console.log(typeof(m));
parsear('{"name":"John"}');
parsear("hola");

function dividirPor(numerador, denominador){
  if(denominador === 0){
    return levantarException(denominador);
  }
  else{
    return numerador / denominador;
  }
}

function DivisionByZeroError(message) {
this.name = "DivisionByZeroError";
this.message = (message || "");
}
DivisionByZeroError.prototype = new Error();
DivisionByZeroError.prototype.constructor =
DivisionByZeroError;

function levantarException(denominador){
  try{
    if(denominador === 0){
      excepcionPorDenominador0(denominador);
    }
  }catch(e) {
    console.log(e);
  }
}

function excepcionPorDenominador0(denominador){
  if(denominador === 0){
    throw new DivisionByZeroError("Error denominador 0");
  }
}
//(dividirPor(4,0));

//JSON
//1 
let pepe = '{"firstName":"Pepe","lastName":"Argento","age":45}';
//a 
let obj = JSON.parse(pepe)
console.log(obj);
//b 
console.log(obj.age = 50);
//c  
let json = JSON.stringify(obj);
//console.log(json);

//2 
let personajes = '[{"firstName":"Pepe","lastName":"Argento","age":45},{"firstName":"Mónica","lastName":"Argento","age":40},{"firstName":"Coqui","lastName":"Argento","age":17}]';
//a
let listPersonajes = JSON.parse(personajes);
console.log(listPersonajes);
//b
let paola = {"firstName":"Paola","lastName":"Argento","age":16};
let listPersonajes2 = listPersonajes.concat(paola); 
console.log(listPersonajes2);
//c 
let listPersonajesJson = JSON.stringify(listPersonajes2);
console.log(listPersonajesJson);

//3 
let personajes3 =
'[{"firstName":"Pepe","lastName":"Argento","birthdate":"1967-07-19T03:00:00.000Z"}]';
//a 
let obj2 = JSON.parse(personajes3);
console.log(obj2);
//b 
let jsonPersonajes = JSON.stringify(obj2,["birthdate"]);
console.log(jsonPersonajes);
let nose = jsonPersonajes.split('birthdate')[1];
let nose2 = nose.split('')[1];
console.log(nose2);
let date = new Date(nose);
console.log(date);