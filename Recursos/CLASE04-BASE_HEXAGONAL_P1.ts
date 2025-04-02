
///////////////////////////////////// hezagonal parte 1


//Dominio - Entidades del dominio todo lo relacionado al negocio


interface EntidadUsuaio {
  nombre: string;
  apellido: string;
  cmp: string;
  email: string;
  password: string;
  refreshToken: string;
};

interface EntidadConductor {
  nombre: string;
  apellido: string;
}

interface EntidadMedico {
  nombre:string;
  apelldio: string;
}

interface EntidadHistoria {
  numHistoria: number;
  nombrePaciente: string;
  medico: EntidadMedico;
  conducto: EntidadConductor;
  usuario: EntidadUsuaio;
}

//Capa aplicacion

  //dto
  interface DtoRespuestaUsuario {
    nombre: string;
    apellido: string;
    cmp: string;
  }

  //mapeo para respuesta al controlador
  const mapearUusarioDto = (usuario: EntidadUsuaio) : DtoRespuestaUsuario => ({
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    cmp : usuario.cmp

  });

  //Dto de Entrada
  interface DtoInsertarUsuario {
    nombre: string;
    apellido: string;
    cmp: string;
    email: string;
    password: string;
    refreshToken: string;
  }

  interface ServicioUsuario {
    insertar(usuarioDto: DtoInsertarUsuario) : Resultado<DtoRespuestaUsuario>;
    existeUsuario(email: string): boolean;
  }

  class ServicioUsuarioImpl implements ServicioUsuario {

  insertar(usuarioDto: DtoInsertarUsuario): Resultado<DtoRespuestaUsuario> { 
    
    // Simular registro en memoria 
    
    // Crear respuesta simulada
    const respuestaDto: DtoRespuestaUsuario = {
      nombre: usuarioDto.nombre,
      apellido: usuarioDto.apellido,
      cmp: usuarioDto.cmp
    };
    
    // Devolver resultado con traza simulada
    return {
      traza: `mock-${Date.now()}`,
      payload: {
        datos: respuestaDto
      }
    };
  }

    existeUsuario(email: string): boolean {
      throw new Error("Method not implemented.");
    }

  }



// Shared -> dto -> resultados ->
interface Resultado<T> {
  traza: string;
  payload: {
    datos: T
  }
}

// Controller

class ControladorUsuario {
  
  constructor(private servicioUsuario: ServicioUsuario){}

  insertar(req: any, res: any = '') : Resultado<DtoRespuestaUsuario>{
    const resultado  = this.servicioUsuario.insertar(req.body);
    return resultado;
  }

}

//Definiendo request
const req = {
  body: {
    nombre: "Eduardo",
    apellido: "Fajardo",
    cmp: "1204892",
    email: "efajardogutierrez@hotmail.com",
    password: "123123",
    refreshToken: ""
  }
}


//Inicialización
const servicioUsuario: ServicioUsuario = new ServicioUsuarioImpl();
const controller: ControladorUsuario = new ControladorUsuario(servicioUsuario);
//Inicio del proceso de regisgro
console.log("Inicio del proceso de registro");
const respuestaUsuario = controller.insertar(req);
console.log(respuestaUsuario)