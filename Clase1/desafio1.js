class Usuario {
    
    constructor (nombre, apellido, libros=[], mascotas=[]){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

    //Retorna el nombre completo del usuario. Utilizar template strings
    getFullName(){
      return `Mi nombre es ${this.nombre} y mi apellido ${this.apellido}`
    };

    //Recibe un nombre de mascota y lo agrega al array de mascotas
    addMascota(NombreMascota){
      this.mascotas.push(NombreMascota);
      return;
    };

    //Retorna la cantidad de mascotas que tiene el usuario
    countMascotas(){
        return this.mascotas.length;
    };

    //Recibe un string 'nombre' y un string 'autor' y debe agregar un 
    //objeto: { nombre: String, autor: String } al array de libros.
    addBook(nombre, autor){
        const libro = {
            titulo:nombre,
            escritor:autor
        }  
        this.libros.push(libro)      
        return;
    };
 
    //Retorna un array con sólo los nombres del array de libros del usuario.
    getBookNames(){
        //const resultado = this.libros.map(ver=>ver.titulo); 
        //return resultado;
        const resultado = this.libros.map(function(value,index){
        return value.titulo;
        });
        return resultado;
    };
//const vector[]=this.libros.map(function(value,index){
//     return value.titulo;
//})

}
const usuario = new Usuario ("Baltasar", "Sanchez",

        [
            {titulo: "100 años de soledad",escritor:"gabriel garcia marquez"},
            {titulo: "el principito",escritor:"Antoine de Saint-Exupéry"}
        ],

        ["vaca","tortuga"]

);

//muestro el nombre completo del usuario
console.log(usuario.getFullName());

//agrego una mascota
usuario.addMascota("Perro");

//cuenta las mascotas
console.log(usuario.countMascotas());

//agrega un libro
usuario.addBook("El secreto","Rhonda Byrne");

//muestra el nombre de los libros
console.log(usuario.getBookNames());