export class UserDto{
    constructor(
        public nombre: string,
        public apellidos: string,
        public nif: string,
        public email: string,
        public telefono: string,
        public sexo: string,
        public conocimientoPagina: string,
        public contrasenia: string,
        public contrasenia2: string,
    ){}

}