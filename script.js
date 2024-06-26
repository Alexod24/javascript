//? =================================================
//?    JavaScript: 11. Arreglos [Arrays] - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 11. Arreglos [Arrays] - #jonmircha
// ==================================================
`);

//En un arrelgo la posicion siempre empieza por le numero 0, 

new Number()

const array1 =[];
const array2 = [1,true,'Hola',["A","B","C",[1,2,3]]]
console.log(array1);
console.log(array2);
console.log(array2.length);
//Si solo deseas imprimir la palabra hola puedes hacerlo de esta forma
console.log(array2[2])

//Con esto se puede imprimir el numero 1 del array que esta dentro de otra array que a su ver tambien esta dentro de un array
console.log(array2[3][3][0])

//Nueva forma de declarar arrays con .off
const array3 = Array.of("X","Y","Z",1,2,3);
console.log(array3);

//Imprime 100 veces false
const array4 = Array(100).fill(false);
console.log(array4) 

//Ya nadie usa esta forma, ha esta cayendo en desuso por los programadores (e,f) no estan mal sino que ya no se suele utilizar
const e = new Array();
console.log(e)

const f = new Array(1,2,3,true,false);
console.log(f);

//Con el metodo push agregamos un nuevo color y con el pop lo eliminamos

const colores = ["Rojo", "Verde","Azul"];
console.log(colores)

colores.push("Negro");
console.log(colores)

colores.pop();
console.log(colores);

//Foreach recibe funciones como callback que se va a ejecutar por cada elemento que tenga

colores.forEach(function(el, index){
    console.log(`<li id="${index}">${el}</li>`)

})



//? =================================================
//?    JavaScript: 12. Objetos - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 12. Objetos - #jonmircha
// ==================================================
`);

let objeto1 = new String("Hola");
console.log(objeto1);

//Al declarar tu objeto con const evitas que se utilize mas adelante
//Los objetos de un objeto a las variables se le van a lamar atributos/propiedades y a las funciones se les llama metodos

const objeto2 = {}
    console.log(objeto2);

const objeto3 = new Object();
    console.log(objeto3)

const alex = {
    nombre: "Alex",
    apellido: "OD",
    edad: 18,
    pasatiempos: ["Existir","Comer"],
    soltero: true,
    contacto:{
        email:"alex.od408@gmail.com",
        mobile:"960700355"
    },
    
    saludar:function(){
        console.log("Hola :)")
    },


    //Tambien podemos usar el This

    decirMiNombre:function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años, me puedes seguir como ${this.contacto.email} en Gmail`)
    }
}

//Otra forma de llamar a los atributos de una array con corchetes o con punto

console.log(alex);
console.log(alex["nombre"])
console.log(alex["apellido"])
console.log(alex["pasatiempos"][1])
console.log(alex.edad)
console.log(alex.contacto.mobile)
alex.saludar();
alex.decirMiNombre();

//Forma una lista de todos los arreglos y hasta funciones

console.log(Object.keys(alex));

//Con el value es mas especifico
console.log(Object.values(alex));

//El hasownProperty sirve para poder verificar si la propiedad mencionada existe en la tabla
console.log(alex.hasOwnProperty("nombre"));
console.log(alex.hasOwnProperty("saludo"));

//? =================================================
//?    JavaScript: 13. Tipos de Operadores - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 13. Tipos de Operadores - #jonmircha
// ==================================================
`);

// Operadores aritmeticos: +-*/%()*/

let ecuacion = 5 + (5-2)*2;

console.log(ecuacion); 

/* == Operadores Relacionales 
<, >, >=, <=, ==, ===, !=, !== */

// obtendras falso porque 8 no es mayor que 9
console.log(8>9); 
// obtendras true porque 9 si es mayor que 8
console.log(9>8);

// == Operadores compuestos == 
console.log(9>=8);
console.log(8>=9 );

// = 1 igual es asignacion de variable
// == 2 iguales es comparacion de valores
// === 3 iguales es comparacion mas estria porque compara valor y tipo de dato
//console.log("Operadores con los 3 iguales ===")
console.log(7==7);
console.log("7"==7);
console.log("7"===7);

// Operadores de incremento y decremento que sirve para que una variable aumente la capacidad de controlar el flujo de 
// Estamos controlando los datos dentro de la variable i
let i=1;
// i = i+2;
// i -=2;

// operador unario, hay mucha diferencia en el orden pero como recomendacion primero usa la variable y luego el ++

i++;
i--;
++i;
--i;
console.log(i);

// Operadores logicos: 
// "! - Not(Lo que es verdadero lo vuelva falaso y viceversa)
// || - Or(Si una de las condiciones se cumple lo validara , si tengo dos solo basta que una sea correcta)
// && - and(Cuando tengo 2 o mas condiciones ambas tiene que cumplirse para que valide)
console.log(!true);
console.log(("9"==="9")||(9==="9"));
console.log(("9"==="9") && ("9"==="9"));

//? =================================================
//?    JavaScript: 14. Condicionales - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 14. Condicionales - #jonmircha
// ==================================================
`);


console.log("JavaScript: 14. Condicionales");

//Que es una estructura de control? es aquel mecanismo que permite controlar el flujo de tu programacion

//* Estructuras condicionales:
//? Estructuras condicionales:
//! Estructuras condicionales:
//TODO Estructuras condicionales:
 
// If - Else

let edad = 20;
if(edad <= 17){
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad")
}
//TODO if- else if - else
// Dejame dormir - 0hrs - 5hrs 
// Buenos dias - 6hrs - 11hrs
// Buenas tardes 12hrs - 18hrs
// Buenas noches 19hrs - 23hrs

let hora = 25;
if (hora >= 0 & hora <=5){
    console.log("Dejame dormir miercoles");
}else if(hora >= 6 & hora <=11){
    console.log("Buenos dias causa");
}else if(hora >= 12 & hora <=18){
    console.log("Buenas tardes causa");
}else if(hora >= 19 & hora <=23){
    console.log("Buenas noches causa");
}else{
    console.log("Esa hora no existe oe tremenda llama jaja")
};

//TODO Operador Ternario(Condicion) ? verdadero : falsa 
//! Interesante

console.log("Operador Ternario");
let eresMayor = (edad >= 18)?"Eres mayor de edad": "Eres menor de dedad";
console.log(eresMayor)

//TODO Switch - case

// domingo - 0 
// Lunes - 1 
// martes - 2 
// Miercoles - 3
// Jueves - 4
// Viernes - 5 
// Sabado - 6

let dia = 5;

switch (dia) {
    case 0:
        console.log("Domingo")
    break;
    case 1:
        console.log("Lunes")
    break;
    case 2:
        console.log("Martes")
    break;
    case 3:
        console.log("Miercoles")
    break;
    case 4:
        console.log("Jueves")
    break;
    case 5:
        console.log("Viernes")
    break;
    case 6:
        console.log("Sabado")
    break;
    default:
     console.log("El dia no existe maldito imbecil jkeje")
     break;
}
//? =================================================
//?    JavaScript: 15. Ciclos (Loops) - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 15. Ciclos (Loops) - #jonmircha
// ==================================================
`);


//TODO Cada vuelta se le llama iteracion
//Este es un gran ejemplo de como funcion el While y el Do ya que el while primero 
//verifica si el numero es 10 y si no lo es va a imprimir +1 hasta llegar a 10
//mientras que do primero imprime y si cumple la condicion se sale de la iteracion 
//! Estas estructuras son cada ves menos usadas en Js
//TODO While - do - for

let contador = 0;
while (contador < 10){
    console.log(contador);
    contador++;
}

do {
    console.log("do while" + contador);
    contador++;
} while (contador < 10);

//TODO ciclo for
// for (inicializacion de variable; condicion;
// decremento o incremento ){
//     sentencias que ejecuta el for
//     sentencias que ejecuta el for
// }

for (let i= 0; i < 10; i++) {
    console.log("for " + i);
    
}

let numero = [10,20,30,40,50,60,70,80,90];
for (let i= 0; i < numero.length;i++){
    console.log(numero[i])
}

//Todo variantes del for - forin sirve para recorrer propiedades de un objeto(Imprime los datos de la lista)

const objeto = {
    nombre:"alex",
    apellido:"Od",
    edad:20
} 

for (const propiedad in objeto) {
    console.log(`Key:${propiedad}, Value:${propiedad}`)
   
}
for (const propiedad in objeto) {
    console.log(`Key:${propiedad}, Value:${alex[propiedad]}`)
   
}

//Todo variantes del for - forof sirve para imprimir listas( va a impirimir hola mudno letra por letra)

let cadena = "Hola mundo"

for (const elemento of numero) {
    console.log(elemento);
}

for (const caracter of cadena) {
    console.log(caracter);
}

//? =================================================
//?    JavaScript: 16. Manejo de Errores - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 16. Manejo de Errores - #jonmircha
// ==================================================
`);

//TODO trycatch - estructura de control al manejo de errores

try{
    console.log("En el try se agrega el codigo a evaluar")
    noExiste;
    console.log("Segundo mensaje en el try")

} catch (error){
    console.log("Catch, captura cualquier error surgido o lanzado en el try")
    console.log(error)

    
}finally{
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch")

}

//TODO Finally
//! Finally dato interesante
//*Utilice un ejemplo con try catch y entendi el valor de finally
//*En este caso para no repetir la funcion de cerrar el modal lo colocamos en finally
//*Ya que finally se ejecutara siempre ya sea try o catch quien se ejecute

try{
    const destructuracion = [1,2,3 ];

    let d1 = destructuracion[0],
        d2 = destructuracion[1],
        d3 = destructuracion[2]; 
    
        console.log(d6);
    console.log("Abrimos modal exitoso");
    
    
} catch (error){
    console.log("Abrimos modal error")

    
}finally{

          console.log("Cerrar modal");
}

//todo Saboteando con throw 
try {
    let tryerror="y";

//* Levanta un error y con el new error lo especificas     

    if(isNaN(tryerror)){
        throw new Error("El caracater introducido no es un Numero");

    }    
    console.log(tryerror*tryerror);
} catch(error){
    console.log(`Se produjo el siguiente error: ${error}`);

}

//? =================================================
//?    JavaScript: 17. break & continue - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 17. break & continue - #jonmircha
// ==================================================
`);

//TODO Break

const numerosbreak = [1,2,3,4,5,6,7,8,9,10,11,12,13,"Hola mundo"];
for (let i=0; i < numerosbreak.length; i++){
    if (i===5){
        break;
    }
    console.log(numerosbreak[i]);
}

//* Break rompe el ciclo
//Se rompe el ciclo cuando se cumpla la condicion

//TODO Continue

const numerosbreak1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,"Hola mundo"];
for (let i=0; i < numerosbreak.length; i++){
    if (i===5){
        continue;
    }
    console.log(numerosbreak[i]);
}

//* Continue Salta el ciclo
// Cuando llega al valor 5 se salta porque cumple el if pero sigue todo el ciclo


//const numerosbreak1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,"Hola mundo"];
//for (let i=0; i < numerosbreak.length; i++){
//    console.log(i);
//}  

//? =================================================
//?    JavaScript: 18. Destructuración - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 18. Destructuración - #jonmircha
// ==================================================
`);

//todo SIN DESTRUCTURACION
        const destructuracion = [1,2,3,4 ];

        let uno = destructuracion[0],
            dos = destructuracion[1],
            tres = destructuracion[2], 
            cuatro = destructuracion[3];

        console.log(uno,dos,tres,cuatro);

        //*================================

        const vocalesd = ["a","b","c"];
        let primera = vocalesd[0],
            segundo = vocalesd[1],
            tercero = vocalesd[2];

        console.log(primera,segundo,tercero);

        //*================================





//todo CON DESTRUCTURACION
        const [one,two,three,four] = destructuracion;
        console.log(one,two,three,four);

        const [a,b,c] = vocalesd;
        console.log(a,b,c)

        //*================================

        const persona = {
            Nombre: "alex",
            Apellido: "od",
            Edad: 35,
        }
        //* Recordemos que las varaibles se tienen que llamar igual o sino 
        //* Tener en cuenta que el orden de las variables no afectara el resultado
        const {Nombre,Edad,Apellido} = persona;
        console.log(Nombre,Apellido,Edad);
        
            
        
//Ejemplo de Harvey 
//class Carro{

//}
//let aaa = new Carro() 
//console.log(typeof aaa)

// Azucar sintactico es el mejor termino al referirse lo que es poo en JS segun stackoverflow

//? =================================================
//?    JavaScript: 19. Objetos literales - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 19. Objetos literales - #jonmircha
// ==================================================
`);

    let nombre19 = "kEnAi",
        edad19 = 7,
        nombre20 = "Firulais",
        edad20 = 10;

    const perro19 = {
        nombre19:nombre19,
        edad19:edad19,
        ladrar:function(){
            console.log("Guau guau auuuuu")
        }
    }

    const perro20={
        nombre20:nombre20,
        edad20:edad20,
        ladrar:function(){
            console.logwe("Miau miauuu")
        }
    }

    console.log(perro19);
    perro19.ladrar()

//! Dato interesnte
// Nuevas formas de declarar objetos literales

    const dog ={
        nombre20,
        edad20,
        raza:"Callejero",
        ladrar(){
            console.log("guau guau guau")
        }
    }

    dog.ladrar ();
    
//? =========================================================================
//?    JavaScript: 20. Parámetros REST & Operador Spread - #jonmircha
//? =========================================================================
console.log(`
// ==========================================================================
//    JavaScript: 20. Parámetros REST & Operador Spread - #jonmircha
// ==========================================================================
`);

//Esto se usa en el dia dia
//TODO Parametros Rest
function sumar (a,b, ...c) {
    let resultado = a+b;
//* Recordemos que el foreach sirve para imprimir cada elemento que contenga c
    c.forEach(function (n){
        resultado += n
    });
    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
//* Parametros infinitos 

//TODO Spread Operator 
//Tambien se puede usar el operador de propagacion 
const arr1 =[1,2,3,4,5];
    arr2 = [6,7,8,9,0];
console.log(arr1,arr2)
//* Si quiero que el arreglo imprima la combinacion de los arreglos anteriores puedo usar el SO
const arr3=[arr1, arr2];
console.log(arr3);

const arr4=[...arr1, ...arr2];
console.log(arr4);

const arrhm =["H","O","L","A"];
const arrhm2 = ["M","U","N","D","O"];
console.log(arrhm,arrhm2)
//* Aqui uso el Spread Operator
const arrhm3 = [...arrhm,...arrhm2]
console.log(arrhm3)

//? =================================================
//?    JavaScript: 21. Arrow Functions - #jonmircha
//? =================================================
console.log(`
// ==================================================
//    JavaScript: 21. Arrow Functions - #jonmircha
// ==================================================
`);

//TODO Ejemplo de Arrow Functions


//TODO* Una arrow function es cuando borramos la palabra function y entre el parentesis y la llave hacemos un =>

// const saludar = function(){
//     console.log("Hola");
// }

// saludar();

//* Segunda forma 

// const saludar = () => {
//     console.log("Hola");
// }
// saludar();

//* Tercera forma (Codigo limpio y ahorramos lineas)

// const saludar = () => console.log("Hola");

// saludar();

// TODO Arrow Function con parametros 

const saludar = nombre => console.log(`Hola ${nombre}`);
saludar("Alex");
//* Tambien podemos evitar la palabra retunr 

const sumarAF = function (a,b){
    return a+b;
}
console.log(sumarAF(5,5))

const sumarAF1 = (a,b) => a+b;
console.log(sumarAF1(10,10))

//TODO Arrow Function con el metodo foreach 
//* El foreach puede recibir la posicion de los datos que esta recibiendo del arreglo
const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
funcionDeVariasLineas();

const numerosAF = [1,2,3,4,5];

//* Normal 
// numerosAF.forEach(function(el,index)  {
//     console.log(`El elemento ${el} esta en la posicion
//     ${index}`)

// })

//* Transformando a una AF

numerosAF.forEach((el,index) => console.log(`El elemento ${el} esta en la posicion ${index}`));

//TODO Las arrow function con this 
//* Las arrow function tienen la capcacidad de capturar el contexto donde se encuentran

function perroAF (){
    console.log(this);
}
perroAF();
//* Una funcion normal respeta el contexto donde se encuentra , para esta funcion this es un objeto
const perroAF1 = {
    nombre:"Firualis",
    edad:20,
    ladrar: function(){
        console.log(this)
    }
}
perroAF1.ladrar();


//*Las arrowfunciont tienes la capacidad de saltar el contexto 
const perroAF2 = {
    nombre:"Firualis",
    edad:20,
    ladrar:()=>{
        console.log(this)
    }
}
perroAF2.ladrar();

//* Esta forma de expresar las formas literales, vemos que this vuelve a ser como antes
const perroAF3 = {
    nombre:"Firualis",
    edad:20,
    ladrar(){
        console.log(this)
    }
}
perroAF3.ladrar();

//? =================================================
//?    JavaScript: 22. Prototipos - #jonmircha
//? =================================================

console.log(`
// =================================================
//    JavaScript: 22. Prototipos - #jonmircha
// =================================================
`);

//! Programacion orientaba a objetos
// Dentro de la programacion orientaba a objetos tiene 3 caracteristicas
/* 
Clases - Modelo a seguir
Objeto - Es una instancia de una clase (es una copia de las clases)
    Atributo -es una caracteristica de un objeto (son variables dentro de un objeto)
    Metodos - son acciones que un objeto puede realizar (son funciones dentro de un objeto )
*/

//! Recomiendo ver el curso de POo con PHP y mysql
//TODO Js es un lenguaje orientaba a objetos pero basado en prototipos no en clases
//TODO transforma las clases en una funcion prototipal, por eos es muy importante los prototipos

//* PLaton decia que viviamos en el mundo de las ideas, es decir que cuando alguien dice silla cada uno le viene la repesentacion de una silla pero diferente es decir yo pienso en una silla de madera y tu de plastico 
//* Platon decia que eso era la representacion fisica en el mundo tangible que como nosotros como sere humanos pensantes llammos silla
//* Ootro ejemplo es que no importa en que idioma lo digas ya que seria la misma idea 

// const mascota = {
//     nombre:"Boby",
//     hablar(){
//       console.log("Guau guau")
//     }
// }

// console.log(mascota);

// const mascota1 = {
//     nombre:"Michi",
//     hablar(){
//         console.log("Miau miau")
//     }
// }

// console.log(mascota1);

//TODO Funcion constructora 

// function Animal(nombre,genero  ){
//     this.nombre =nombre;
//     this.genero =genero;

//     this.sonar = function(){
//         console.log("Hago sonidos porque estoy vivo")
//     }
//     this.saludar =function(){
//         console.log(`Hola me llamo ${nombre}`)
//     }
// }

// const Boby = new Animal ("Snoopy", "Macho");
//  Michi = new Animal ("Kira","Macho");

//  console.log(Boby);
//  console.log(Michi);

//  Boby.sonar();
//  Boby.saludar();

//  Michi.sonar();
//  Michi.saludar();

//! ESTO ES UNA BUENA PRACTICA Y UN CODIGO LIMPIO
//TODO Funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal
//* Dato importante que estas funciones no son problemas cuando solo tenemos dos objetos pero si tuvieramos mas si lo seria porque duplicaria en los 100
//TODO PROTOTIPOS 
// function Animal(nombre,genero){
//     //Atributos
//     this.nombre =nombre;
//     this.genero =genero;
//     }

//     // Metodos agrgados al prototipo de la funcion constructora

//     Animal.prototype.sonar = function(){
//         console.log("Hago sonidos porque estoy vivo");
//     }

//     Animal.prototype.saludar= function(){
//         console.log(`Hola me llamo ${this.nombre}`);
//     }


// const Boby = new Animal ("Snoopy", "Macho");
//  Michi = new Animal ("Kira","Macho");

//  console.log(Boby);
//  console.log(Michi);

//  Boby.sonar();
//  Boby.saludar();

//  Michi.sonar();
//  Michi.saludar();

// Una mejora cuando hay muchos objetos ya que la funcion se va a repetir dentro de los 100 objetos que se crea 
// Para esto quitaremos el metodo sabor en esta caso 





 //* Me toca hacerlo 

//Atributos
function Heroes (nombre,especial){
    this.nombre=nombre;
    this.especial=especial;
}

Heroes.prototype.saludo = function(){
    console.log(`Hola mi nombres es ${this.nombre}`)
    console.log(`Mi poder es ${this.especial}`)
}

const Axe = new Heroes("Axe","Girar")

console.log(Axe)
Axe.saludo();




// Una mejora cuando hay muchos objetos ya que la funcion se va a repetir dentro de los 100 objetos que se crea 
// Para esto quitaremos el metodo sabor en esta caso 

//* Me toca de nuevo 

//? ========================================================
//?    JavaScript: 23. Herencia Prototípica - #jonmircha
//? ========================================================

console.log(`
// ========================================================
//    JavaScript: 23. Herencia Prototípica - #jonmircha
// ========================================================
`);

//Java scipt usa el poo de otra manera pero si lo utiliza no basado en clases sino en prototipos
//* Js desde el año 2015 trajo las clases que es azucar sintatico , esa escritura de clases js lo tranforma a prototipos  


//TODO Herencia Prototipica 

// function Animal(nombre,genero){
//     //Atributos
//     this.nombre =nombre;
//     this.genero =genero;
//     }

//     // Metodos agrgados al prototipo de la funcion constructora

//     Animal.prototype.sonar = function(){
//         console.log("Hago sonidos porque estoy vivo");
//     }

//     Animal.prototype.saludar= function(){
//         console.log(`Hola me llamo ${this.nombre}`);
//     }

//     //Herencia prototipica

// function Perro(nombre,genero,tamanio){
//     this.super = Animal;
//     this.super(nombre,genero);
//     this.tamanio = tamanio ;
// }
// // Perro esta heredando de animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;


// // Sobreescritura de metodos del Prototipo padre en el hijo

// Perro.prototype.sonar = function (){
//     console.log("Soy un perro y mi sonido es un ladrido")
// }
// Perro.prototype.ladrar = function(){
//     console.log("Guau guau gua")
// }

// const Snoopy = new Perro ("Snoopy", "Macho","Mediano");
//  Michi = new Animal ("Kira","Macho");

//  console.log(Snoopy);
//  console.log(Michi);

//  Snoopy.sonar();
//  Snoopy.saludar();
//  Snoopy.ladrar();

//  Michi.sonar();
//  Michi.saludar();


 //? ========================================================
//?    JavaScript: 24. Clases y Herencia - #jonmircha
//? ========================================================

console.log(`
// ========================================================
//    JavaScript: 24. Clases y Herencia - #jonmircha
// ========================================================
`);

//TODO Clases y Herencia

// class Animal{
//     constructor(nombre,genero){
//         this.nombre =nombre;
//         this.genero =genero;
//     }

// //Metodos 
//     sonar(){
//         console.log("Hago sonidos porque estoy vivo");
//     }
//     saludar(){
//         console.log(`Hola me llamo ${this.nombre}`);
//     }
// } 

// class Perro extends Animal{
//     constructor(nombre,genero,tamanio){
//     //con el metodo super() se manda a llamar el cosntructor de la clase padre
//     super(nombre,genero);
//     this.tamanio=tamanio;
//     }
//     sonar(){
//         console.log("Soy un perro y mi sonido es un ladrido")
//     }

//     ladrar(){
//         console.log("Guau guau")
//     }
// }


// const mimi = new Animal("Mimi","Hembra");
//     scooby = new Perro("Scobby","Macho","Gigante");

// console.log(mimi);
// mimi.saludar();
// mimi.sonar();

// console.log(scooby);
// scooby.sonar();
// scooby.saludar();
// scooby.ladrar();

//* Me tocaaaa a miiii vamos crjo (Si fallas tienes que hacerlo de nuevo campeon)
//! Practica 

// class Animal {
//     constructor(nombre, especie){
//         this.nombre=nombre;
//         this.especie=especie;
//     } 

//     saludo(){
//         console.log(`Hola me llamo ${this.nombre}`)
//     }

//     accion(){
//         console.log(`Soy un ${this.especie}, mucho gusto`)
//     }
// }

// class Mascota extends Animal {
//     constructor(nombre,especie,edad){
//         super(nombre,especie);
//         this.edad=edad;
//     }

//     despedida(){
//         console.log(`Tengo ${this.edad} ,adios fue un placer`)
//     }
// }

// const M1 = new Animal("Firulais","Perro")
//     M2 = new Mascota("Michifus","Gato","20");

// console.log(M1);
// M1.saludo();
// M1.accion();

// console.log(M2);
// M2.saludo();
// M2.accion();
// M2.despedida();

//? ===========================================================
//?    25. Métodos estáticos, getters y setters - #jonmircha
//? ===========================================================

console.log(`
// ============================================================
//    25. Métodos estáticos, getters y setters - #jonmircha
// ============================================================
`);

//* Las clases solo es azucar sintactico y no puedes hacer que las calses sean publicas o privadas ya que solo es azucar no se basa en clases enr realidad

class Animal{
    constructor(nombre,genero){
        this.nombre =nombre;
        this.genero =genero;
    }

//Metodos 
    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
} 

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
    //con el metodo super() se manda a llamar el cosntructor de la clase padre
    super(nombre,genero);
    this.tamanio=tamanio;
    //TODO Colocamos null para que no nos pida al inicio
    this.raza=null;
    }
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido")
    }

    ladrar(){
        console.log("Guau guau")
    }

    //TODO STATIC
    //Un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase

    static queEres(){
        console.log("Los perros somos animales mamiferos que pertneceosa la familia de los caninos , somos considerados los mejores amigos del hombre")
    }

    //TODO SETTER Y GETTERS 
    //Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de neustra clase
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza=raza
    }
}

Perro.queEres();


const mimi = new Animal("Mimi","Hembra");
    scooby = new Perro("Scobby","Macho","Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log(scooby);
scooby.sonar();
scooby.saludar();
scooby.ladrar();

//TODO CONSULTA
//* Cuando usamos get and setter tenemos que tratarlo como 

console.log(scooby.getRaza);
scooby.setRaza="Danes";
console.log(scooby.getRaza);

//? ===========================================================
//?    JavaScript: 26. Objeto console - #jonmircha
//? ===========================================================

console.log(`
// ============================================================
//    JavaScript: 26. Objeto console - #jonmircha
// ============================================================
`);

console.log(console);
console.error("Esto es un error");
console.warn("Esto es un avso");
console.info("Esto es un mensaje infromativo")
console.log("Un registro de lo que ha pasado en nuestra aplicacion")

let nombre = "Alex";
    apellido = "OD";
    edad = 32;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre,apellido,edad)
console.log(`Hola mi nombre es ${nombre}`)

// Este es un comodin % que va a reemplara por ejemplo

console.log(`Hola mi nombre es %s y tengo %s de edad`,nombre,edad)
// console.clear(); //*Limpiar ventana 
console.log(window);
console.log(document)
//TODO GRUPOS
console.group("Los cursos de jon mircha e uoyutube");
console.log("Cursos de Javascript");
console.log("Curso de NodeJS");
console.log("Cursos de Flexbox");
console.log("Curso de Node");
console.groupEnd();
//TODO DESPLEGABLE
console.groupCollapsed("Curso de Node");
console.groupEnd();
// console.clear();
//TODO TABLITA
console.log(console);
console.table(Object.entries(console).sort());
//TODO TABLA DE VOCALES Y NUMEROS
const digitos = [1,2,3,4,5];
    vocales = ["a","b","c","d"];

console.table(digitos);
console.table(vocales);

const perro = {
    nombre:"Lele",
    raza:"Dalmata"
}
console.table(perro);
//TODO MEDIR TIEMPO
//* Todo el tiempo en js te da en ms

console.time("Cuanto tiempo se tarde mi codigo");
const arreglo= Array(100);

for (let i =0; i < arreglo.length; i++){
    arreglo[i]=i;
}

console.timeEnd("Cuanto tiempo se tarde mi codigo")
console.log(arreglo);

// console.clear();
//TODO USA EL FOR Y ES BUENO PARA DETECTAR ERRORES 
for(let i =0;i<= 10;i++){
    console.count("codigo for");
    console.log(i);
}
//TODO ESTO ES PARA HACER TESTING PARA HACER PRUEBAS UNITARIAS 
//* Para hacer pequeñas pruebas esta bien 
//* Si x es menos que 1 no pasara nada pero si es mayor saldra el error
let x =1;
    y = 2;
    pruebaXY = "Se espera que x siempre sea menor que Y";

    console.assert(x<y, (x,y,pruebaXY));


//? ===========================================================
//?    JavaScript: 27. Objeto Date - #jonmircha
//? ===========================================================

console.log(`
// ============================================================
//    JavaScript: 27. Objeto Date - #jonmircha
// ============================================================
`);

//* Es un contructor DATE
// El meridiano de Grenwich es la hora 0
//TODO Constructor Date
console.log(Date());
let fecha = new Date();
    console.log(fecha);
//TODO Dia del mes
//*Recordar colocar el parentesis al final o de lo contrario te dara como respuesta que es nativo
    console.log(fecha.getDate());
    console.log(fecha.getMonth());
    console.log(fecha.getYear());
    console.log(fecha.getFullYear());

    console.log(fecha.getHours());
    console.log(fecha.getMinutes());
    console.log(fecha.getSeconds());
    console.log(fecha.getMilliseconds());
    //*Te dara la misma cadena de texto que fecha
    console.log(fecha.toString());
    console.log(fecha.toDateString());
    console.log(fecha.toLocaleString());
    console.log(fecha.toLocaleDateString());
    console.log(fecha.toLocaleTimeString());

    console.log(fecha.getTimezoneOffset());
    console.log(fecha.getUTCDate());
    console.log(fecha.getUTCHours());

    //*Recordemos que el utc te da la hora 0 del meridiano de Greenwich

    console.log(Date.now()) //*Timestand se le conoce y esta es la manera correcta de representar el tiempo y del instante de cuantos msegundos han pasado desde el 1 de enero de 1770

    //Libreria muy util momento.js 
    let cumpleAlex = new Date(2003,4,23);
    console.log(cumpleAlex);
    
//? ===========================================================
//?    JavaScript: 28. Objeto Math - #jonmircha
//? ===========================================================

console.log(`
// ============================================================
//    JavaScript: 28. Objeto Math - #jonmircha
// ============================================================
`);


//TODO Math nos ayudara para realizar oepraciones matematicos avanzados , recordemos que es un metodo estatico
console.log(Math);
console.log(Math.PI);

//TODO Valor absoluto de un numero
console.log(Math.abs(7.8))
console.log(Math.abs(-7.8))

//TODO Ceil para redondear un numero
console.log(Math.ceil(7.2)); //*Redonde al numero mas grande es decir 8
console.log(Math.floor(7.2)); //* Redondea al numero mas pequeño es decir 7

console.log(Math.round(7.2)); //* Este es el mejor metodo ya que es la justicia ya que dependiendo del decimal va a redonder al numero mas cercano
console.log(Math.round(7.6)); //* Este es el mejor metodo ya que es la justicia ya que dependiendo del decimal va a redonder al numero mas cercano

//TODO Raiz cuadrada de un numero
console.log(Math.sqrt(81)); //*Raiz cuadrada de un numero

//TODO Potencia 
console.log(Math.pow(5,3)) //* Primero numero es la base y el segundo numero es el exponente

//TODO Verificacion si el numero es negativo o positivo o cero (1,-1,0)
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));

//TODO Random
console.log(Math.random()); //* Te dara un numero random entre 0 a 1
console.log(Math.random()*1000); //* Te dara un numero random entre 0 1000
console.log(Math.round(Math.random()*1000)); //* Te dara un numero random entre 0 a 1000 pero con el round sera un numero entero

//? ==============================================================
//?    JavaScript: 29. Operador de Cortocircuito - #jonmircha
//? ==============================================================

console.log(`
// ===============================================================
//    JavaScript: 29. Operador de Cortocircuito - #jonmircha
// ===============================================================
`);

//Conjunto de operadores , funciona colocando 2 condiciones

//TODO Cortocircuito con OR - cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargarara por defecto

//TODO Cortocircuito con AND - cuando el valor de la izquierda en la expresio n siempre pueda validad a false, es el valor que se cargara por defecto

// function saludarC(nombreC="Desconocidos"){ - //* Aqui podemos ver que pdemos asiganar un valor por defecto

// Vemos que si hay preferencia ya que si le doy un valor inicial el valor de abajo ya no funcionara
function saludarC(nombreC){
    nombreC = nombreC || " mundo"
    console.log(`Hola ${nombreC}`);
}

saludarC("Alex") //* Si no viene con un valor se usara lo demas 
saludarC();

//TODO OR 
console.log("cadena" || "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log(19|| "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log(true || "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log({} || "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log([] || "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log(false || "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 
console.log(null || "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 
console.log(undefined || "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 
console.log(""|| "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 
console.log(-2 || "Valor de la derecha"); 
console.log(0 || "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 

//TODO AND 
//*Basicamente es como OR pero usando && y es todo lo contrario es decir si en un valor verdadero solo imprimia el valor de la izquierda sera lo contrario

console.log("cadena" &&  "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log(19&&  "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log(true &&  "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log({} &&  "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log([] &&  "Valor de la derecha"); //*Aplicara el valor de la izquierda si es verdadero
console.log(false &&  "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 
console.log(null &&  "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 
console.log(undefined &&  "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 
console.log(""&&  "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 
console.log(-2 &&  "Valor de la derecha"); 
console.log(0 && "Valor de la derecha"); //*Aplicara el valor de la derecha si es falso 


//? ==============================================================
//?    JavaScript: 30. alert, confirm y prompt - #jonmircha
//? ==============================================================

console.log(`
// ===============================================================
//    JavaScript: 30. alert, confirm y prompt - #jonmircha
// ===============================================================
`);

//* Si mandamos a la consola el objeto window nos bridanara todas las opciones 
console.log(window);

//* Recorder que no es necesario el window.
//window.alert("Hola esto es una alerta, corre")
//window.confirm("Hola esto es una confirmacion")
//window.prompt("Hola esto es un prompr y le permite al usuario ingresar un valor")

//TODO Una alerta solo sirve para mandar un aviso al usuario
//TODO En la confirmacion si se presiona el boton de aceptar y si no te dara false
//TODO En el prompt si el usuario escribir algo dentro de la caja y le da a aceptar esto hara que se almacene sin embargo si le das a cancelar te dara undefined 
//TODO Un dato en el promp ya que si el usuario escribe algo y le da a cancelar le lanzara null

// let alerta = alert("Hola esto es una alerta");
//     confirmacion = confirm("Hola esto es una confirmacion")
//     aviso = prompt("Hola,esto es un aviso y le permite al usuario ingresar un valor");

// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);

//? ==============================================================
//?     JavaScript: 31. Expresiones Regulares - #jonmircha
//? ==============================================================

console.log(`
// ===============================================================
//     JavaScript: 31. Expresiones Regulares - #jonmircha
// ===============================================================
`);

//! TODO LENGUAJE DE PROGRAMACION TIENE QUE TENER EXPRESIONES REGULARES

//! RECOMIENDO LLER DOCUEMENTACION SOBRE EXPRESIONES REGULARES DE JS

//TODO QUE ES UNA EXPRESION REGULAR?
//* Es mas una secuencia de caracteres que forman un patron de busqueda
// Son una secuencia de caracteres 

//TODO EXRE CON CONSTRUCTOR 

let cadenaER = "Lorem ipsum dolor sit amet cosdasd lorem lorem sadmas  d";

// Con la i hacemos que le valga vrg las mayusculas o minusculas y con la g encontrara todo 
let expReg = new RegExp("lorem","i");

//* Si coloco los corchetes y coloco 1 quiere decir que debe de estar por lo menos una ves
//* Despues del . es como una condicion es decir 1.2 es que tiene que aparecer entre 1 a 2 veces pero si no colocas nada despues del punto significa que no hay limite, encontrara todo 
let expReg2 = /lorem{3}/ig;

console.log(expReg.test(cadenaER));
console.log(expReg.exec(cadenaER));

// Método	Descripción
// exec()	Ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un arreglo de información o null en una discrepancia.
// test()	Prueba una coincidencia en una cadena. Devuelve true o false.
// match()	Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura, o null si no se encuentra ninguna coincidencia.
// matchAll()	Devuelve un iterador que contiene todas las coincidencias, incluidos los grupos de captura.
// search()	Prueba una coincidencia en una cadena. Devuelve el índice de la coincidencia, o -1 si la búsqueda falla.
// replace()	Ejecuta una búsqueda por una coincidencia en una cadena y reemplaza la subcadena coincidente con una subcadena de reemplazo.
// replaceAll()	Ejecuta una búsqueda de todas las coincidencias en una cadena y reemplaza las subcadenas coincidentes con una subcadena de reemplazo.
// split()	Utiliza una expresión regular o una cadena fija para dividir una cadena en un arreglo de subcadenas.




//? ======================================================================
//?     JavaScript: 32. Funciones Anónimas Autoejecutables - #jonmircha
//? ======================================================================

console.log(`
// =======================================================================
//     JavaScript: 32. Funciones Anónimas Autoejecutables - #jonmircha
// =======================================================================
`);

// En ingles inmediat invo anonimo xpres

//* Funcion anonima autoejecutable  - Encapsulamiento
//! Siempre que ustes Autoejecutables tienes que usar el ;
(function(){
    console.log("Mi primera IIFE")
})();

(function(d,w,c){
    console.log("Mi primera IIFE")
    console.log(d);
    console.log(w);
    c.log("Esto es un console.log")
})(document,window, console);

//TODOS Otros metodos

(function(){
    console.log("Version Clasica")
})();

//La Crockford (JS the god parts)
((function(){
    console.log("Version Crockford")
})());

//Unaria
+function(){
    console.log("Version Unaria")
}();

//Facebook
!function(){
    console.log("Version Facebook")
}();

//? ======================================================================
//?     JavaScript: 33. Módulos ( import / export ) - #jonmircha
//? ======================================================================

console.log(`
// =======================================================================
//     JavaScript: 33. Módulos ( import / export ) - #jonmircha
// =======================================================================
`);

// Los modulos te permiten llamar otros archivos 
//* Todos los datos de modulos estan en los archivos /modulo.js

//? =====================================================================================
//?     JavaScript: 34. Ejercicios de Lógica de Programación ( 1 / 10 ) - #jonmircha
//? =====================================================================================

console.log(`
// ======================================================================================
//     JavaScript: 34. Ejercicios de Lógica de Programación ( 1 / 10 ) - #jonmircha
// ======================================================================================
`);



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].



//? ==============================
//?     Practica #01 - Alex OD
//? ==============================

console.log(`
// ==============================
//     Practica #01 - Alex OD
// ==============================
`);

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


// function init(){
//     let saludoPractica = "Hola mundo"
//     console.log("La palabra Hola mundo tiene " +saludoPractica.length +" letras")
// }

// init();
//TODO Mejor forma a diferencia de la basura que hiciste arriba
//* Funciones declaradas usando console warn , if - else 

// function contarLetra(caracteres=""){
//     if (!caracteres){
//         console.warn("No has ingresado ningun dato")
//     } else {
//         console.log(`La palabra ${caracteres} tiene ${caracteres.length} caracteres`)

//     }
// }

// contarLetra();
// contarLetra("Hola mundo");

const cadenaContar=(cadena1="")=>(!cadena1)?console.error("Te olvidaste de ingresar la cadena"):console.warn(`${cadena1} tiene ${cadena1.length} caracteres`)
cadenaContar("Hola mundo");
cadenaContar();


//TODO Una mejor forma es esta
//* Una sola linea de codigo a diferencia del anterior
//* Con la ayuda de las funciones expresadas y de las arrow function se convierte en un codigo limpio 

// Si ponemos llaves en la arrow function tenemos que poner return para que funcion asi que mejor usamos la continuidad de las arrow function


//? ==============================
//?     Practica #02 - Alex OD
//? ==============================

console.log(`
// ==============================
//     Practica #02 - Alex OD
// ==============================
`);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function recorte(){
//     let caracteresIndicado = "Hola mundo"
//     console.log(caracteresIndicado.slice(0,5))
// }
// recorte();

const cadenaRecortar = (cadena2="",recortar=undefined)=>(!cadena2)?console.error("No has ingresado una cadena"):(!recortar)?console.error("No has ingresado el limite para el recorte"):console.warn(`La cadena que ingresaste es: ${cadena2} y el recorte que asignaste es ${recortar} = ${cadena2.slice(0,recortar)}`)
cadenaRecortar("Hola mundo","1");



//? ==============================
//?     Practica #03 - Alex OD
//? ==============================

console.log(`
// ==============================
//     Practica #03 - Alex OD
// ==============================
`);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function letraXletra(){
//     let mensaje = "Hola mundo";
//     for(const letra of mensaje){
//         console.log(letra)
//     }

// }
// letraXletra();

//TODO Me toca a mi 

const separadorCadena = (cadena3="", separador=undefined)=>
    (!cadena3)?console.error("No has ingresado una cadena")
        :(!separador)?console.error("No has ingresado el separador")
            :console.info(cadena3.split(separador));

separadorCadena("Hola mundo Hola mundo Hola mundo"," ");
separadorCadena("Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",",")

// const separadorCadena = (cadena3="", separador=undefined)=>{
//     if(!cadena3) return console.error("No has ingresado una cadena")
//     if(!separador) return console.error("No has ingresado el separador")
//     for (let i = 0; i < cadena3.length; i++) {
//         console.log(cadena3[i]+separador);
        
//     }
// }

// separadorCadena("Hola mundo"," ");





//? ==============================
//?     Practica #04 - Alex OD
//? ==============================

console.log(`
// ==============================
//     Practica #04 - Alex OD
// ==============================
`);

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//TODO ciclo for
// for (inicializacion de variable; condicion;
// decremento o incremento ){
//     sentencias que ejecuta el for
//     sentencias que ejecuta el for
// }

// function practica4(){
//     const impirmirVariasVeces= Array(10).fill("Hola mundo")
//     console.log(impirmirVariasVeces)
// }

// practica4();

const repetirCadena = (cadena4="", ciclo=undefined)=>{

    if(ciclo===undefined) return console.error("No has ingresado el ciclo de repeticion");
    if(ciclo ===0) return console.warn("No puedes repetir una cadena 0 veces, no tiene sentido")
    if(Math.sign === -1) return console.error("No se recibe numeros negativos")
    for (let rep = 1; rep <= ciclo; rep++) {
        console.log(`${cadena4} ${rep}`)
    }
    }

repetirCadena("Hola mundo" , 5);





//? ==============================
//?     Practica #05 - Alex OD
//? ==============================

console.log(`
// ==============================
//     Practica #05 - Alex OD
// ==============================
`);
// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
//TODO Estaba mas facil de lo pensaba

const revertirCadena= (cadena5="")=>
    (!cadena5)?console.error("La cadena esta vacia"):console.warn(cadena5.split("").reverse().join(""));

revertirCadena();
revertirCadena("Hola Mundo");



// const arrayPractica=["Alex","Adrian","Nicolas"];
// console.log(arrayPractica)
// const revertir=arrayPractica.reverse();
// console.log(revertir)

// const revertirPalabras = (mensajeReverse="") => console.log(mensajeReverse)
// const usoDelReverse = revertirPalabras.reverse;
// console.log(usoDelReverse)

// revertirPalabras("Hola mundo prueba")


// function invertirCadena(cad){
//     var separarSplit = cad.split(0);
//     var usarReverse = separarSplit.reverse();
//     var usarJoin = usarReverse.join("");
//     return usarJoin

// }






// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.




//? ==============================
//?     Practica #06 - Alex OD
//? ==============================

console.log(`
// ==============================
//     Practica #06 - Alex OD
// ==============================
`);

const contarPalabra = (texto="", palabra="")=>{
    if(!texto) return console.log("No has ingresado un texto");
    if(!palabra) return console.log("No has ingresado la palabra a buscar");
    let contador=0,
        i=0;
    while(i!==-1){
        texto.indexOf(palabra,i);
        if(i!==-1){
            contador++,
            i++;
        }
    }
    return console.log(`La palabra ${palabra} se repite ${contador} veces`);
}
contarPalabra("Hola mundo mundo","mundo")

// contarPalabra("Hola mundo mundo mundo","mundo")


//? ==============================
//?     Practica #07 - Alex OD
//? ==============================

console.log(`
// ==============================
//     Practica #07 - Alex OD
// ==============================
`);



// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


//TODO Ahora me toca a mi

const polindromo = (palabra="")=>{
    if(!palabra) return console.log("No has ingresado un texto")
    palabra = palabra.toLowerCase();
    
}

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

 
// Curso JavaScript: 36. Ejercicios de Lógica de Programación ( 3 / 10 ) - #jonmircha




