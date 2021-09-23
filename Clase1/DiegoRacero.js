class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

        this.getFullName =  () => {
            return `${this.nombre} ${this.apellido}`;
        };

        this.addMascota =  (mascota) =>{
            this.mascotas.push(mascota);
        };

        this.countMascotas =  () => {
            return this.mascotas.length;
        };

        this.addBook = (titulo, escritor) => {
            let libro = {
                buch: titulo,
                schriftsteller: escritor
            };
            this.libro.push(libro);
        };

        this.getBookNames =  () => {
            let salida = this.libros.map(item => item.buch)
            return salida
        };

    }
};
//instancio una clase del objeto
let usuario = new Usuario(
    'Diego', 'Racero',
    [
        {buch: 'Democracia y Globalizacion',schriftsteller: 'Josep Maria Colomer'},
        {buch: 'Der Judenstaat', schriftsteller: 'Theodor Herzl'}
    ]
    ['lagartos', 'peces dorados']
);

//muestro el nombre del usuario
console.log(usuario.getFullName());

//agrega mascotas
usuario.addMascota('Canario');
usuario.addMascota('gato');
//cuenta las mascotas
console.log(usuario.countMascotas());

//agrega un libro
usuario.addBook('Ucrania, entre Rusia y occidente', 'Ana Lazaro Bosch');
usuario.addBook('caca', 'Ana Lazaro Bosch');
//muestra el nombre de los libros
console.log(usuario.getBookNames());