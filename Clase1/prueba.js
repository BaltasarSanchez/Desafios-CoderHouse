class Usuario {
    constructor (nombre){
        this.nombre=nombre;
    }
    //string. Retorna el nombre completo del usuario. Utilizar template strings.
    getFullName(){
      //return "Hola";
      return `${this.nombre}`
    }
}
const user = new Usuario ("ddd");
console.log(user.getFullName());
