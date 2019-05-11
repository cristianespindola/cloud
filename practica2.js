//Array 
//Ejercicio1
//a 

['Homer', 'Marge', 'Bart'].forEach((elem, index) =>
console.log(index, elem))

//b
let lb = [1, 2, 3, 4, 8, 9 ]; lb.filter((number) => (number %
2) === 0);

//c 
let lb = [1, 2, 3, 4, 8, 9 ]; lb.filter((number) => (number %
2) === 0);

//d 
let ld = [1, 2, 3, 4, 5]; ld.map((number) => number + 1);

//e 
let ld = [1, 2, 3, 4, 5]; ld.reduce((number, initialValue) => initialValue + number, 0);

//f 
let lf = [1, 2, 3, 4]; lf.concat(5, 6, 7, 8);
// retorna la lista que tiene a los numero de 1 a 8.

//g
let lg = [1, 2, 3, 4]; lg.concat([5, 6, 7, 8], [9, 10, 11,
12]);
//retorna la lista que tiene de 1 a 12.

//h 
[1, 2, 3, 4, 5].every((elem) => elem > 0);
// indica true si todos los numero son mayores a 0.

//i
[-1, 1, 2, 3, 4, 5].every((elem) => elem > 0);
// indica false si no todos los numero son mayores a 0.

//j. 
[-5, -4, -3, -2, -1, 0].some((elem) => elem > 0);

//k. 
[-1, 1, 2, 3, 4, 5].some((elem) => elem > 0)

//l. 
not (['Homer', 'Marge', 'Bart'].includes('Lisa'));

//m. 
let lm = ['Homer', 'Marge', 'Bart']; lm.join('|')
//en cada espacio le pone un |.

//n. 
let ln = ['Homer', 'Margaret', 'Bart']; ln.sort((elem1, elem2)
=> (elem1.length > elem2.length));

//o. 
let lo = ['Pepe', 'Moni', 'Coqui']; lo.push('Dardo');


//Ejercicio2
function print(anArray){
  console.log(anArray)
}
print([1,2,3]);

//Ejercicio3
function concat(a1,a2,a3){
  const ls = [a1,a2,a3];
  console.log(ls);
}
concat(2,1,4);

//Ejercicio4
function average(array){
  let res = 0
  for(var q=0;q<array.length;q++){
    res+=array[q];
  }
  return res/array.length;
}
average([10,10]);

//Ejercicio5
function raiseTo(array, power){
  return array.map(function(x) {return x * power});
}
raiseTo([1,2,3], 3);

//Ejercicio6
function greaterThan(array, bound){
   let res = [];
   let rec = 0;
  for( var i = 0; i< array.length; i++){
    if(array[i] > bound) {
      res[rec] = array[i];
      rec++;
    }
  }
  return res;
}

greaterThan([1,2,3], 1);

//Ejercicio7
function areAllGreaterThan(array, bound){
  for(var i = 0; i< array.length; i++){
    if(array[i] < bound){
      return false;
    }
  }
  return true;
}

areAllGreaterThan([5,2,3], 1);

//Ejercicio8

function menor(list){
  var res = list[0];
  for(var i = 0; i < list.length; i++){
    if(list[i] < res){
      res = list[i];
    }
  }
  return res;
}

function sort(array){
  var rec = array;
  var res = [];
  var cont = 0;
  for(var i=0; i<array.length; i++){
    res[cont] = menor(rec);
    rec = delete rec[menor(rec)];
    cont++;
  }
  return res;
}
sort([2,1,4,5,3]);

//String
//Ejercicio1
//a 

homer = 'Homer'; for (let i = 0; i < homer.length; i++)
{console.log(homer.charAt(i));};
// me retorna los char.

//b
'Homer'.includes('Y');
// me retorna false porque no esta la "y".

//c
'Homer'.includes('mer');
//me retorna true porque esta el string "mer".

//d
'Marge'.endsWith('arge');
//me retorna true.

//e 
'Margaret'.indexOf('a');
//me retorna 1 porque es en la pposicion donde esta el primer string "a" que encuentra.

//f
'Margaret'.indexOf('A');
// me retorna -1 porque no esta el string "A".

//g
'Margaret'.indexOf('a', 2);
// me retorna 4 porque es el lugar donde escuenta la segunda "a"

//h
'Margaret'.replace('aret', 'o');
// me retorna "Margo" porque cambia el string "aret" por "o"

//i
'Margaret'.replace('a', 'A');
// me retorna MArgaret porque remplaza la 1º "a" por "A".

//j 
'1-2-3-4-5-6-7-8'.split('-');
// me retorna la lista con los string numericos del 1 al 8.

//p
'Javascript es un lenguaje de programación'.substr(0, 10)
// me retorna toda la palabra.
//q
'Javascript es un lenguaje de programación'.substr(0, 4)
// me retorna java porque son las primera 4 palabras que estan despues del indice 0.

//Ejercicio2
function isVowel(char){
  let vocales = ["a", "e", "i", "o", "u"];
  return vocales.includes(char);
}

isVowel("a");
isVowel("b");

//Ejercicio3
function countVowels(string){
  let res = 0;
  for( let i=0; i< string.length; i++){
    if(isVowel(string[i])){
      res += 1;
    }
      
  }
  return res;
}

countVowels("hola");

//Object
//Ejercicio1
//a 
Object.keys({name: 'Homer', lastname: 'Simpson', age: 38});
// me retorna el array de como se llaman los campos osea ['name', 'lastname', 'age'].

//b 
//Object.items({name: 'Homer', lastname: 'Simpson', age: 38});
// preguntar error.

//c 
Object.entries({name: 'Homer', lastname: 'Simpson', age: 38});
// me retorna [['name', 'Homer'],['lastname', 'Simpson'],['age', 38]] osea las claves con los valores.

//d 
Object.entries({name: 'Homer', lastname: 'Simpson', age: 38}).forEach((entry) => console.log(entry[0], entry[1]));
// me retorna un map con la clave y el valor asociado, uno de bajo del otro.

'HOLAAAAAAAAAAA!'.toLowerCase()