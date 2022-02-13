// Funciones que se DECLARAN con la palabra reservada function
function Fn() {
  // { prop: 'propiedad' }
  //
  this.prop = 'propiedad'
}

Fn.prototype.lala = function FuncionDePrototipo(){}

const r = new Fn()

//console.log(r.__proto__)
//

// fat arrow function

const fatFn = () => { // No tienen contexto this
  console.log(this) // este this es del alcance superior.
  return this
}

const r1 = fatFn()


// tienen un return implicito
const fnR = () => 2
console.log(fnR())




