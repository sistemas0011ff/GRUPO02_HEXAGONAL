// POO

// interfaces


interface Animal {
    nombre: string,
    hacerSonido(): void
}

//Clase concreta que implementa la interfaz
class Mascota implements Animal {

    nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this._edad = edad;
    }

    hacerSonido() :void {
        console.log("Algún sonido genérico");
    }

    get edad() : number {
        return this._edad;
    }

    set edad(nuevaEdad: number) {
        this._edad = nuevaEdad;
    }

}

const miMascota = new Mascota("Mascota Generica",10);
//miMascota.hacerSonido();


// sub clase que hereda de la clase mascota
class Perro extends Mascota {
    constructor(nombre: string, edad: number){
        super(nombre, edad);
    }

     
    //sobrescribiendo
    hacerSonido(): void {
        console.log("!Guau Guau!")
    }
     
}

class Gato extends Mascota {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }

    hacerSonido(): void {
        console.log("Miau Miau")
    }
}

 
const miPerro = new Perro("Fido",2);
miPerro.hacerSonido();
const miGato = new Gato("Michi",3);
miGato.hacerSonido();

// console.log(miGato.hacerSonido());

// principio de sustitución, la clase padre reemplaza la clase hija

function hacerRuido(animal: Animal){
    console.log(`${animal.nombre} hace:`);
    animal.hacerSonido();
};

console.log("Principio de sustitución");

hacerRuido(miMascota);
hacerRuido(miPerro);
hacerRuido(miGato);

// ------------------------------------------------------------------------------------
// Modificadores de acceso

//Clase con propiedad publica
class ClasePublica {
    public nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
}

console.log("Demostación clase pública");
const objetoPublico = new ClasePublica("Juan");
console.log(objetoPublico.nombre);
objetoPublico.nombre="Pedro";
console.log(objetoPublico.nombre);

//Clase con propiedad privada
class ClasePrivada {
    private edad: number;
    constructor(edad: number){
        this.edad = edad;
    }

    getEdad():  number{
        return this.edad;    
    }
}

console.log("Demostación clase privada");
const objetoPrivado = new ClasePrivada(25);
//objetoPrivado.edad = 43; //ERROR
console.log(objetoPrivado.getEdad());

// Clase protejido
class ClasProtejida {
    protected id: number;
    constructor(id: number) {
        this.id = id;
    }
}

class ClaseHija extends ClasProtejida {
    mostrarId(): void{
        console.log(`El id es: ${this.id}`)    
    }
}
const miClaseProtegida = new ClasProtejida(33);
// miClaseProtegida.id | ERROR
const miClaseHija = new ClaseHija(55);
miClaseHija.mostrarId();

//Clase con propiedades de solo lectura 
class ClaseSoloLectura {
    readonly codigo: string;
    constructor(codigo: string) {
        this.codigo = codigo;
    }
}

const miObjetoReadOnly = new ClaseSoloLectura("AE0001");
// miObjetoReadOnly.codigo =  | error al modificar
console.log(miObjetoReadOnly.codigo);

/*
public: Permite acceso y modificación desde cualquier lugar
private: Solo permite acceso desde dentro de la misma clase
protected: Permite acceso desde la misma clase y sus clases derivadas
readonly: Permite acceso pero no modificación después de su inicialización

*/


// ------------------------------------------------------------------------------------

//Clases genericas
class Contenedor<T> {
    protected contenido: T;

    constructor(contenido: T){
        this.contenido = contenido;
    }

    obtener(): T {
        return this.contenido;
    }

    establecer(valor: T) {
        this.contenido = valor;
    }
}

//contenedor genérico
const miContenedor = new Contenedor<number>(12);
console.log(miContenedor.obtener());

const miContenedor2 = new Contenedor<boolean>(false);
console.log(miContenedor2.obtener());

const miContenedor3 = new Contenedor<string>("Eduardo");
console.log(miContenedor3.obtener());


/*

 No, no puedes escribir 
 class ContenedorConNombre extends Contenedor<T>. 
 El problema es que T no está definido en este contexto.

class ContenedorConNombre<T> extends Contenedor<T> {
  // ...
}
class ContenedorDeNumero extends Contenedor<number> {
  // ...
}
*/

class ContenedorConNombre<T> extends Contenedor<T> {
    nombre: string;

    constructor(nombre: string, contenido: T){
        super(contenido);
        this.nombre = nombre;
    }

    describir(): string {
        return `Contenedor ${this.nombre} con contenido: ${this.contenido}`
    }
}

const objtContenedorConNombre = new ContenedorConNombre("nombres_de_animales","fido");
console.log(objtContenedorConNombre.describir());
//objtContenedorConNombre.establecer = "nombre_de_perros"; //ERROR


//Contenedor especial
class ClaseContenedorEspecial<T,U> extends ContenedorConNombre<T>{
    metadatos: U;

    constructor(contenido: T, nombre: string, metadatos: U) {
        super(nombre,contenido);
        this.metadatos = metadatos;
    }

    obtenerMetadatos(): U {
        return this.metadatos;
    }

    obtenerInformeCompleto(): string {
        return `${this.describir()}\nMetadatos: ${ JSON.stringify(this.metadatos)}`
    }
}

//USANDO CONTENEDOR ESPECIAL

type Metadata = {autor: string, fecha: Date};

const objContenedorEspecial = new ClaseContenedorEspecial<number, Metadata>(
    100,
    "Contenedor de Datos",
    {
        autor: "EFAJARDO", fecha: new Date()
    }
)

console.log(objContenedorEspecial.obtenerInformeCompleto());

// Clase Abstracta

abstract class Figura {
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    abstract calcularArea(): number;

    describir(): string {
        return `Soy una figura de tipo: ${this.nombre}`;
    }
}

class Cuadrado extends Figura {
    lado: number;

    constructor(lado: number, nombre: string){
        super(nombre);
        this.lado = lado;
    }


    calcularArea(): number {
        return this.lado * this.lado;
    }

}

const miObjCuadrado = new Cuadrado(12,"Cuadrado");
console.log(miObjCuadrado.calcularArea());
console.log(miObjCuadrado.describir());
