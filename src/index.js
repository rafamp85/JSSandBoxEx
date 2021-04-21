import "./styles.css";

// Literal Object
// const cliente = {
//   nombre: 'Rafael',
//   saldo: 200
// }

// console.log(cliente);


// Object Constructor
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const rafa = new Cliente( 'Rafa', 900);
console.log( rafa );

function formateaCliente( cliente ) {
  const { nombre, saldo } = cliente;
  return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
} 
console.log(formateaCliente(rafa));

// Object Constructor
function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
} 


document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
