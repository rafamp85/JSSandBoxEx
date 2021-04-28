const miContador = (function () {
  let contador = 0;

  function increment() {
    return contador++;
  }

  function decrement() {
    return contador--;
  }

  function valor() {
    return contador;
  }

  return {
    increment,
    decrement,
    valor
  };
})();

console.log(miContador.valor());
console.log(miContador.increment());
console.log(miContador.increment());
console.log(miContador.increment());
console.log(miContador.decrement());
