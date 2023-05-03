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
    {
        id: 3,
        salario: 2000
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;

    if (empleado) {
        callback(null,empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find((salario) => salario.id === id)?.salario;

    if (salario) {
        callback(null,salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }
}

const id = 3;
getEmpleado(id, (err, empleado) => {
    if (err) {
        
        console.log('ERROR!');
        return console.log(err);
    }
    // console.log('Empleado existe!');
    // console.log(empleado.nombre);
    getSalario(id, (err, salario) => {
        if (err) {
                
                console.log('ERROR!');
                return console.log(err);
        }
        console.log('EL empleado: ', empleado, 'tiene un salario de: ', salario);
        // console.log('Salario existe!');
        // console.log(salario);
    });
});



