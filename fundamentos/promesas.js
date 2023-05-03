const empleados = [
    {
        id: 1,
        nombre: 'Karla'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];


const id=3;
const getEmpleado = (id) => {
    const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;
    return new Promise((resolve, reject) => {
        (empleado) ? resolve(empleado) : reject(`Empleado con id ${id} no existe`);
    });
}

const getSalario = (id) => {
    const salario = salarios.find((salario) => salario.id === id)?.salario;
    return new Promise((resolve, reject) => {
        (salario) ? resolve(salario) : reject(`Empleado con id ${id} no existe`);
    });
}

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

//promesas en cadena
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado: ', nombre, 'tiene un salario de: ', salario))
    .catch(err => console.log(err));