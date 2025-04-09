
///////////////////////////////////// hezagonal parte 2


//Dominio - Entidades del dominio todo lo relacionado al negocio

//======================================================================
// Dominio - Entidades
//======================================================================

//Dominio/Entidades
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

//Dominio/Repositorio(Puerto Segundario)/RepoUsuario
interface RepositorioUsuario {
  guardar(usuario: EntidadUsuaio): Promise<void>;
  listarTodos(): Promise<EntidadUsuaio[]>;
  existeConEmail(email: string): Promise<Boolean>;
  buscarPorEmail(email: string): Promise<EntidadUsuaio>;
}



//======================================================================
// Applicacion
//======================================================================
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


  //Puerto primario
  interface ServicioUsuario {
    insertar(usuarioDto: DtoInsertarUsuario) : Resultado<DtoRespuestaUsuario>;
    existeUsuario(email: string): boolean;
  }

  //Implementación del puerto primario
  class ServicioUsuarioImpl implements ServicioUsuario {

    constructor(private cuRegistrarUsuario: CasoUsoRegistrarUsuario){}

    insertar(usuarioDto: DtoInsertarUsuario): Resultado<DtoRespuestaUsuario> { 
      
      // Simular registro en memoria 
      /*
      // Crear respuesta simulada
      const respuestaDto: DtoRespuestaUsuario = {
        nombre: usuarioDto.nombre,
        apellido: usuarioDto.apellido,
        cmp: usuarioDto.cmp
      };
      */

      const resultado = this.cuRegistrarUsuario.ejecutar(usuarioDto);
      return resultado;
      // Devolver resultado con traza simulada
      /*
      return {
        traza: `mock-${Date.now()}`,
        payload: {
          datos: resultado
        }
      };
      */
    }

    existeUsuario(email: string): boolean {
      throw new Error("Method not implemented.");
    }

  }

  //Aplicación/CasoDeUso(UseCse)/interface
  interface CasoUsoRegistrarUsuario{
    ejecutar(usuarioDto: DtoInsertarUsuario): Resultado<DtoRespuestaUsuario>;
  }

  interface CasoUsoNotificarUsuario {
    ejecutar(email: string, nombre: string) : void;
  }

  //Aplicación/CasoDeUso(UseCse)/Implementación
  class CasoUsoRegistrarUsuarioImpl implements CasoUsoRegistrarUsuario {

    constructor(private repoUsuario: RepositorioUsuario){}

    ejecutar(usuarioDto: DtoInsertarUsuario): Resultado<DtoRespuestaUsuario> {

        // Crear respuesta simulada
        /*
        const respuestaDto: DtoRespuestaUsuario = {
          nombre: usuarioDto.nombre,
          apellido: usuarioDto.apellido,
          cmp: usuarioDto.cmp
        };
        */

        const entidadUsuario : EntidadUsuaio = {
           apellido: usuarioDto.apellido,
           nombre: usuarioDto.nombre,
           cmp: usuarioDto.cmp,
           email: usuarioDto.email,
           password: usuarioDto.password,
           refreshToken: usuarioDto.refreshToken
        };

        this.repoUsuario.guardar(entidadUsuario);

        const respuestaDto: DtoRespuestaUsuario = {
          apellido: usuarioDto.apellido,
           nombre: usuarioDto.nombre,
           cmp: usuarioDto.cmp,
        }

        return {
        traza: `mock-${Date.now()}`,
        payload: {
          datos: respuestaDto
        }
      };

    }

  }



//======================================================================
// Shared
//======================================================================

// Shared -> dto -> resultados ->
interface Resultado<T> {
  traza: string;
  payload: {
    datos: T
  }
}


//======================================================================
// Infraestructura
//======================================================================
// Controladores/Controller

class ControladorUsuario {
  
  constructor(private servicioUsuario: ServicioUsuario){}

  insertar(req: any, res: any = '') : Resultado<DtoRespuestaUsuario>{
    const resultado  = this.servicioUsuario.insertar(req.body);
    return resultado;
  }

}

// EntidadesDePersistencia //
/*
  class usuarios
  class usuarios_datos
  class usuario_dir
*/

//Implementacion del puerto segundario = Adaptador Segundario

class RepositorioUsuarioEnMemoria implements RepositorioUsuario {

  //simulando bd en memoria
  private usuarios: Map<string, {
    id: string;
    nombre: string;
    apellido: string;
    cmp: string;
    email: string;
    password: string;
    refreshToken?: { valor: string, expiracion: Date};
  }> = new Map();

  async guardar(usuario: EntidadUsuaio): Promise<void> {

    const tokenRefresco = "cod.generado";
    const expiracionToken = new Date();
    expiracionToken.setHours(expiracionToken.getHours()+1);

    //Generar codigo
    const randonCode = Math.random().toString(36).substring(2,10);
    const refreshToken = Math.random().toString(40).substring(2,10);


    //Mapper, que tenga la responsabilidad de mapear la entidad de dominio a las entidades de persistencia


    this.usuarios.set(randonCode,{
      id: randonCode,
      apellido: usuario.apellido,
      nombre: usuario.nombre,
      cmp: usuario.cmp,
      email: usuario.email,
      password: usuario.password,
      refreshToken: {
        valor: tokenRefresco,
        expiracion: expiracionToken
      }
    })
  }
  listarTodos(): Promise<EntidadUsuaio[]> {
    throw new Error("Method not implemented.");
  }
  existeConEmail(email: string): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  buscarPorEmail(email: string): Promise<EntidadUsuaio> {
    throw new Error("Method not implemented.");
  }

}

//======================================================================
// Simulando un cliente POSTMAN
//======================================================================
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

//======================================================================
// Simulación del comportamiento trabajando con hexagonal basico 1
//======================================================================
//Inicialización
const repoUsuario: RepositorioUsuario = new RepositorioUsuarioEnMemoria();
const curegistrarUsuario : CasoUsoRegistrarUsuario = new CasoUsoRegistrarUsuarioImpl(repoUsuario);
const servicioUsuario: ServicioUsuario = new ServicioUsuarioImpl(curegistrarUsuario);
const controller: ControladorUsuario = new ControladorUsuario(servicioUsuario);
//Inicio del proceso de regisgro
console.log("Inicio del proceso de registro");
const respuestaUsuario = controller.insertar(req);
console.log(respuestaUsuario)