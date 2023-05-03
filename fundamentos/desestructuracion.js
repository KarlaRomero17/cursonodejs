const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimirHeroe ( { nombre, apellido, poder , edad=0} ){

    console.log(nombre, apellido, poder, edad);
}
// imprimirHeroe(deadpool);
const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [ h1 , h2, h3] = heroes;
console.log(h1, h2, h3)

//para evitar escribir tanto codigo
// const { nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder, edad);

