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

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado ${empleado}, tiene un salario de ${salario}`;
  } catch (error) {
    throw error;
  }
};

const id = 1;

getInfoUsuario(id)
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));
