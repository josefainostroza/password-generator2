// - El ejercicio debe ser capaz de generar un password de la logitud que le establezcamos.
// - Los caracteres disponibles son:
// ```
//   ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/
// ```

// ## Pistas y pasos a seguir

// - Crear las 2 cajas iniciales
// - Poner los textos
// - Sincronizar el length del nuevo password con el input range
// - Conseguir que se genere un string de esa longitud al pulsar el botón y se escriba en el primer input.

// ## Principios Importantes para la creación de aplicaciones.

// - Las funciones deben tener UNA ÚNICA responsabilidad, Es mejor tener 5 funciones con 2 líneas cada una que tener una sola función que se encargue de 5 tareas distintas.

//crear random segun cuantos caracteres tengas, multiplicarlo por legth

const rangeElement =document.getElementById('range')
const printTextPassword =document.getElementById('password')
const printTextLength =document.getElementById('textolength')
const printButton = document.getElementById('button')

const random ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?';

const printValue = ()=>{
    printTextLength.textContent =`LENGTH: ${rangeElement.value}`
};
rangeElement.addEventListener('input', printValue);

const printPassword =() => {
    let password = '';
    for (let i=0; i<rangeElement.value; i++){
        password += random[Math.floor(Math.random()*random.length -1)];
    }
    printTextPassword.textContent = `${password}`;
    }
printButton.addEventListener('click',printPassword);
