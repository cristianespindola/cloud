//1
//ejercicio1

console.log("Hello Word!");

//ejercicio2
function helloWord(menssage){
  return console.log(menssage);
}

helloWord("Hello Word");

//ejercicio3
function echo(menssage){
  return console.log(menssage);
}

echo("echo");

//ejercicio4
//a
if(5 == '5') console.log("son iguales"); else console.log("son distintos");
// el valor da treu porque el signo '==' compara por igualdad (valor). convierte a string y lo compara.

//b
if(5 === '5') console.log("don iguales"); else console.log("son distintos");
// el valor da false porque el signo '===' compara por identidad.

//c 
6 + "0";
// el valor da '60' porque si hay un string y un int, convierte el int o cualquier tipo a string.

//d 
 6 + "0" / 2;
 // el valor da 6 porque primero hace la division y luego la suma.
 
 //e 
 let a = null; if (a) console.log("a es true"); else console.log("a es false");
 // el valor da false porque null es como false en el if.
 
 //f 
 let b = 0; if(b) console.log("b es true"); else console.log("b es false");
 // el valor da false porque 0 es false en el if.
 
 //g
 let c = ""; if(c) console.log("c es true"); else console.log("c es false");
 // el valor da false porque el string vacio es false en el if.

//h 
let d = undefined; if(d) console.log("d es true"); else console.log("d es false");
// el valor da false porque undefined es false en el if.

//i 
let e = 1; if(e) console.log("e es true"); else console.log("e es false");
// el valor da true porque el int es mayor a 0;

//j 
let f = 1; if (f = 100) console.log("f es igual a 100"); else console.log("f no es igual a 100");
// el valor da true porque con solo el "=" assigna y retorna el numero y como es distinto a 0 da true.

//k 
if([1,2,3] === [1,2,3]) console.log("Los arrays son iguales"); else console.log("los arrays son distintos");
// el valor da false porque no son identidades iguales, apuntan a distinto objetos.

//l 
let myArray = [1,2,3]; let myArray2 = myArray; (myArray === myArray2)? console.log("Los arrays son iguales"): console.log(" los arrays son distintos");
// el valor va true porque los arrays son los mismos son el 2 es copia del 1.

//2 
// ejercicio1
//a 
if (0.1 + 0.2 === 0.3) console.log("son iguales"); else console.log("son distintos");
//el valor da false porque la suma es distinta da 0.300...4,

//b 
let j = NaN; if (j === NaN) console.log("j es igual a NaN :)"); else console.log("j No es igual a NaN :( ");
// el valor da false porque NaN nuca es equivalente a otro numetro o a si mismo.

//c 
let k = NaN; if (isNaN(k)) console.log("k es igual a NaN :)"); else console.log("k No es igual a NaN :(");
// el valor me da true porque la variable no es un numero

//ejercicio2
function esParOImpar(numero){
  let n = numero % 2;
  if(n === 0) console.log("el numero es par"); else console.log("el numero es impar"); 
}

esParOImpar(11);
esParOImpar(10);
 
//ejercicio3 
function masGrande(list){
  let res = 0;
  for( let i = 0; i< list.length; i++){
    if(list[i] > res) {
      res = list[i];
    }
    
  }
  return res;
}

masGrande([1,2,3]);

//ejercicio4
function masChico(list){
  let res = list[0];
  for(let i = 0; i < list.length; i++){
    if(list[i] < res){
      res = list[i];
    }
  }
  return res;
}

masChico([1,2,4,9]);

//ejercicio5

parseInt("0xa2", 10);

//ejercicio6

parseFloat("10.27");

//ejercicio7
//Indica true si es numero false si no lo es.
!isNaN("a");
//Number("a");

//3
//ejercicio1
//a 
function printValues(value1, value2, value3){
  console.log(value1, value2, value3);
}

printValues(1);
// el resultado es 1 y undefined undefined porque solo esta asignada una variable las demas NO estan definidas.
printValues(1, 2);
// el resultado es 1, 2 y undefined porque solo esta asignada una variable la otra NO estan definida.
printValues(1, 2, 3);
// el resultado es 1 2 3 porque asignaron las 3 variables.

//b
function sinParemetros(){
    console.log("Sin parametros");
}

sinParemetros();
sinParemetros(1);
sinParemetros(1,2,3,4,5);
// el resultado siempre es el string "sin parametros" porque no importa lo que le pases siempre va a dar lo mismo.

//c
function argumentosVariables(...args){
    for (var i=0; 1 < args.length; i++){
      console.log(
        "[" + i + "]" + args[i].toString());
    }
}
argumentosVariables(1);
argumentosVariables(1, "dos" , 3);
argumentosVariables();
///////////preguntar porque me da error.

//d 
let func = function (value){
  return "Funcion" + value.toString();
};
console.log(func(1));
// el resultado es el string "Funcion1" porque a el string "Funcion" le suma el string que le pasas como parametro.

//e 
["A", "B", "C"].forEach(
  function (elem,index){
    console.log("[" + index + "]" + elem)
  })
//el resultado que me da es el indice de el recorrido entre corchetes seguido del elemento que recorre.


//f 
["A", "B", "C"].forEach(
  (elem,index) => console.log("[" +index + "]" + elem));
////// me retorna el indice entre [] con el string asociado    

//g
function echo(message="Hello Word"){
  console.log(message);
}
echo();
echo("Hola Mundo");
////preguntar mismo error

//ejercicio2 
function prueba(){
  console.log("Hello Word");
}
function  invoke(aFunction, parametro){
  console.log(aFunction);
  aFunction(parametro);
}
invoke(echo, "hola");
//////preguntar ejercicio 3,4,5 

//ejercicio6
function esMultiplo(unNumero, multiploDe){
  const n = multiploDe % unNumero;
  if (n === 0) console.log("true"); else console.log("false"); 
}

esMultiplo(3, 12);