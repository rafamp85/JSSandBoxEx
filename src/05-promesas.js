const empleados = [
  {
    id: 1,
    nombre: "Rafael"
  },
  {
    id: 2,
    nombre: "Nancy"
  },
  {
    id: 3,
    nombre: "Axel"
  },
  {
    id: 4,
    nombre: "Karina"
  }
];

const salarios = [
  {
    id: 1,
    salario: 900000
  },
  {
    id: 4,
    salario: 600000
  }
];

// Funciones
const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado
      ? resolve(empleado)
      : reject(`El empleado con id ${id}, no existe`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;

    salario
      ? resolve(salario)
      : reject(`No existe un salario para el id: ${id}`);
  });
};

let nombre;
let id = 22;
getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado ${nombre}, tiene un salario de: ${salario}`)
  )
  .catch((err) => console.log(err));

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((error) => console.log(error));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((error) => console.log(error));
