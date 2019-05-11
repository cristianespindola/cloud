let students = [
  {
    "name": "Pearl Thompson",
    "age": 19,
    "applicationYear": 2015,
    "applicationNumber": 1548,
    "courses": [
      {
        "name": "Matematicas I",
        "mark": 10
      },
      {
        "name": "Matematicas II",
        "mark": 9
      }
    ]
  },
  {
    "name": "Corey Strickland",
    "age": 31,
    "applicationYear": 2015,
    "applicationNumber": 4424,
    "courses": [
      {
        "name": "Matematicas I",
        "mark": 4
      },
      {
        "name": "Matematicas II",
        "mark": 4
      }
    ]
  },
  {
    "name": "Jeanette Palmer",
    "age": 28,
    "applicationYear": 2004,
    "applicationNumber": 3819,
    "courses": []
  },
  {
    "name": "Alfred Olson",
    "age": 33,
    "applicationYear": 2014,
    "applicationNumber": 4001,
    "courses": [
      {
        "name": "Matematicas III",
        "mark": 6
      },
      {
        "name": "Algebra",
        "mark": 8
      },
      {
        "name": "Programación II",
        "mark": 8
      },
      {
        "name": "Matematicas I",
        "mark": 3
      },
      {
        "name": "Redes y Comunicaciones",
        "mark": 10
      }
    ]
  },
  {
    "name": "Edith Henry",
    "age": 33,
    "applicationYear": 2015,
    "applicationNumber": 1343,
    "courses": [
      {
        "name": "Programación I",
        "mark": 8
      },
      {
        "name": "Redes y Comunicaciones",
        "mark": 3
      },
      {
        "name": "Programación II",
        "mark": 4
      },
      {
        "name": "Matematicas II",
        "mark": 6
      },
      {
        "name": "Matematicas II",
        "mark": 7
      }
    ]
  },
  {
    "name": "Steven Jones",
    "applicationYear": 2015,
    "age": 19,
    "applicationNumber": 4744,
    "courses": [
      {
        "name": "Redes y Comunicaciones",
        "mark": 7
      },
      {
        "name": "Algebra",
        "mark": 7
      },
      {
        "name": "Programación II",
        "mark": 7
      },
      {
        "name": "Programción Funcional",
        "mark": 7
      }
    ]
  },
  {
    "name": "Lida Bennett",
    "age": 27,
    "applicationYear": 2014,
    "applicationNumber": 4000,
    "courses": [
      {
        "name": "Redes y Comunicaciones",
        "mark": 8
      },
      {
        "name": "Estructura de Datos",
        "mark": 8
      },
      {
        "name": "Programación I",
        "mark": 9
      },
       {
        "name": "Programación II",
        "mark": 8
      },
      {
        "name": "Matematicas III",
        "mark": 2
      },
    ]
  },
  {
    "name": "Antonio Collier",
    "age": 20,
    "applicationYear": 2015,
    "applicationNumber": 3688,
    "courses": []
  },
  {
    "name": "Hilda Lewis",
    "age": 26,
    "applicationYear": 2014,
    "applicationNumber": 3000,
    "courses": [
      {
        "name": "Programación I",
        "mark": 7
      },
      {
        "name": "Programación II",
        "mark": 6
      },
      {
        "name": "Matematicas I",
        "mark": 10
      },
      {
        "name": "POO",
        "mark": 9
      },
      {
        "name": "Programción Funcional",
        "mark": 2
      },
      {
        "name": "Estructura de Datos",
        "mark": 3
      },
      {
        "name": "POO II",
        "mark": 9
      },
      {
        "name": "Probabilidad y Estadisticas",
        "mark": 10
      },
      {
        "name": "Algebra",
        "mark": 7
      }
    ]
  },
  {
    "name": "Phillip Hansen",
    "age": 23,
    "applicationYear": 2014,
    "applicationNumber": 4529,
    "courses": [
      {
        "name": "POO",
        "mark": 7
      },
      {
        "name": "Programación I",
        "mark": 10
      },
      {
        "name": "Matematicas II",
        "mark": 8
      }
    ]
  },
  {
    "name": "George Bush",
    "age": 28,
    "applicationYear": 2004,
    "applicationNumber": 666,
    "courses": [
      {
        "name": "POO",
        "mark": 3
      },
      {
        "name": "Programación I",
        "mark": 3
      },
      {
        "name": "Matematicas II",
        "mark": 2
      }
    ]
  },
  {
    "name": "Barack Obama",
    "age": 44,
    "applicationYear": 2007,
    "applicationNumber": 777,
    "courses": [
      {
        "name": "POO",
        "mark": 7
      },
      {
        "name": "Programación I",
        "mark": 7
      },
      {
        "name": "Matematicas II",
        "mark": 7
      }
    ]
  },
];

//Ejercicio1

let student =
{
    "name": "Pnsen",
    "age": 23,
    "inscriptionYear": "2002",
    "inscriptionNumber": 4529,
    "courses": [
      {
        "name": "POO",
        "mark": 7
      },
      {
        "name": "Programación I",
        "mark": 7
      },
      {
        "name": "Matematicas II",
        "mark": 8
      }
    ]
  };

//a
function averageMark(student){
  let res = student.courses;
  let n = res.reduce(function (acc, obj) { return acc + obj.mark; }, 0);
  return n / res.length;
}

//averageMark(student);

//b 
function allAverageMarks(students){

  return students.map((estudiante) =>  ({name : estudiante.name, AvgMark : averageMark(estudiante)}));
}

allAverageMarks(students);

//c 

function studentsBecados(students){
  let res = listaOrdenadaPorMayor(students);
  res = obtenerEstudiantePorPorcentaje(res, 30);
  return res;
}

function hayMismoPromedio(student, students){
  let res = false;
  students.forEach( estudiante => {
      if(averageMark(student) === averageMark(estudiante)){
        res = true;
      }
  })
  return res;
}

function listaOrdenadaPorMayor(students){
  let res = students.filter((student) => (averageMark(student) >= 7));
  res.sort(mayorPromedio);
  return res;
}

function mayorPromedio(a, b){
  if( averageMark(a) !== averageMark(b)){
    return averageMark(b) - averageMark(a);  
  }
  else{
    if( cantMateriasAprobadas(a) !== cantMateriasAprobadas(b)){
      return cantMateriasAprobadas(b) - cantMateriasAprobadas(a);
    }
    else{
      if(a.applicationYear !== b.applicationYear){
        return b.applicationYear - a.applicationYear;
      }
      else{
        return a.applicationNumber - b.applicationNumber;
      }
    }
  }
}

function cantMateriasAprobadas(student){
  let res = student.courses;
  res.filter((materia) => (materia.mark >= 4));
  return res.length;
}

function obtenerEstudiantePorPorcentaje(students, porcentaje){
  let res = [];
  let rec = 0;
  let limite = students.length * porcentaje / 100;
  limite = Math.ceil(limite);
  return students.slice(0, limite);
}
console.log(allAverageMarks(students));
studentsBecados(students);

//Ejercicio 2.

 let filenames =
  ['prueba.txt', 'foto.jpeg', 'sonido.mp3', 'pelicula.mp4', 'index.HTML',
  'foto2.JPG']

let mimeDefinitions =
{
  html: 'text/html',
  htm: 'text/html',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  mp4: 'video/mp4',
}

function getMimeTypesFor(filenames, mimeDefinitions){
let resultado = [];
let exts = extenciones(filenames);
exts.forEach( archivo => 
               {
                 if(mimeDefinitions[archivo] === undefined){
                   res =res.concat('UNKNOWN');
                 }
                 else{
                   res = res.concat(mimeDefinitions[archivo]);
                 }
                 
                 
               })
return resultado;
}

function extenciones(exts){
  return exts.map((ext) => ext.split('.')[1].toLowerCase());
}