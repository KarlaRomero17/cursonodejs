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

const id=1;
//await tiene que estar dentro de una funcion async
//async transforma la funcion para que retorne una promesa
const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }
}

getInfoUsuario()
    .then(msg =>{
        console.log('TODO BIEN'); 
        console.log(msg)
    }).catch(err => {
        console.log('TODO MAL');
        console.log(err);
    });