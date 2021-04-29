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
  const empleado = empleados.find((e) => e.id === id)?.nombre;

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`El empleado con id ${id}, no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;

  if (salario) {
    callback(null, salario);
  } else {
    callback("no tiene salario");
  }
};

// Invocaciones
const id = 1;

getEmpleado(id, (err, empleado) => {
  if (err) {
    return console.log(err);
  }

  getSalario(id, (err, salario) => {
    if (err) {
      return console.log("El empleado", empleado, err);
    }

    console.log("El empleado", empleado, "tiene un salario de:", salario);
  });
});
