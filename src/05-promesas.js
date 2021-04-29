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
const getEmpleado = (id, callback) => {
  const promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    if (empleado) {
      resolve(empleado);
    } else {
      reject(`El empleadi con id ${id}, no existe`);
    }
  });
};
