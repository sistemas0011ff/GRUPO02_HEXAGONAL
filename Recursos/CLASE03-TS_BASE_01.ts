// String 

const saludo : string = "Hola, mundo";

console.log(saludo);

const parte1 : string = "Hola";
const parte2 : string = "Como estás?";
const mensaje : string = parte1 + " - " + parte2;
console.log(mensaje);

//Métodos comunes 
const texto = "JavaScript y TypeScript";
const lengitud: number = texto.length;
console.log(lengitud);
const mayuscula: string = texto.toUpperCase();
console.log(mayuscula);
const contiene: boolean = texto.includes("Script");
console.log(contiene);
const subcadena : string = texto.substring(0,5);
console.log(subcadena);


//Number : 
//Enteros
const entero1 : number = 42;
console.log(entero1);

const entero2 : number = -10;
console.log(entero2);

const entero3 : number = 0;
console.log(entero3);


//Números con punto flotante (decimal)
const decimal1 : number = 3.14;
console.log(decimal1);

const decimal2 : number = -0.5;
console.log(decimal2);

const decimal3 : number = 2.0;
console.log(decimal3);

//Notación científica

const notacion1 : number = 1e6; // 1000000
console.log(notacion1);

const notacion2 : number = 1.2e-3; // 0.0012
console.log(notacion2);

//Sistemas numéricos
//Binario
const binario: number = 0b1010; 
//    8|4|2|1| 
//    1|0|1|0| = 10

console.log(binario);


const octal : number = 0o744;

// ||     8.pow(2)   |  8.pow(1)  |  8.pow(0)
//        64           | 8             |     1
//        7*64(448)             | 4*8(32)               | 4*1 (4) = 484
console.log(octal);


// operaciones aritméticas

const suma: number = 5+3;
console.log(suma);

const division: number = 10/3;
console.log(division);

const modulo: number = 10%3;
console.log(modulo);

// conversiones

const textoANumero : number = Number("42");
console.log(textoANumero);
const parseEntero : number = parseInt("42px",10);
console.log(parseEntero);

const numgrandes :number = 1_000_000;
console.log(numgrandes);


const simbolo: symbol = Symbol("descripción");
const simbolo2: symbol = Symbol("descripción");
console.log(simbolo === simbolo2);



//Arrays de string

const arr1: string[] = ['hola', 'mundo'];
//modificacion de elemento en array
arr1[0] = "xxxxxxxxxxx";
console.log(arr1); // Output: ['hola', 'xxxxxxxxxxx']
const arr2: Array<string> =  ['hola','mundo'];
console.log(arr2);

//Arrays de numeros
const arr3: number[] = [12,3];
console.log(arr3);
const arr4: Array<number> =  [12,3];
console.log(arr4);

//Objetos
const generico: object = {
    dato: 'nombre'
};

console.log(generico);

const paisCiudad : {country: string, city: string} =
{
    country:"España",
    city:"Madrid"
};

console.log(paisCiudad);


const geodata: {
    geo:{country: string, city: string}
} = {
    geo: {
        country:"España",
    city:"Madrid"
    }
}


console.log(geodata);

// tuplas: son tipos de datos que permite contener 2 o más valores de distinto tipo
const europe: [number, string] = [0,"España"];
console.log(europe);
europe.push(2,"Francia");
console.log(europe);

/*
const valorPI :number= 3.141516;
valorPI = 333;

let valorPPI : Number= 3.141516;
valorPPI = 3432432;
*/

//any

let edad : any = "diez";
console.log(edad);


//type : es tipo que pemrite personalizar la forma de tu objeto
//permite crear tipos complejos

type Empleado = {
    id: number,
    nombre: string
};


type Habilidades = {
    pogramacion: boolean,
    idiomas: string[]
}

type OtrosDatos = {
    correo: string,
    celular: string,
}

type DesarrolladorWeb = Empleado & Habilidades;

const desarrollador : DesarrolladorWeb = {
    id: 1,
    nombre: "Ana",
    pogramacion:true,
    idiomas: ["ingles","ruso"]
};

console.log(desarrollador);
 
type desarrollador2 = Empleado & ( Habilidades | OtrosDatos );

const desarrollador2values : desarrollador2 = {

    id: 1,
    nombre: "Ana",
    correo: "correo...",
    celular: "12423113",

};

console.log(desarrollador2values);

function sumar(a: number, b: number, callbacks:(resultado: number) => void ) {
    const resultado = a+b;
    callbacks(resultado);
}


function mostrarConsola(valor: number) {
    console.log("El resultado es: " + valor);
};

sumar(5,3,mostrarConsola);







