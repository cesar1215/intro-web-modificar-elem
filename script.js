// Ejercicio 1. Cambia el color de fondo del elemento body a "#DDD894"
document.body.style.backgroundColor = "#DDD894"

/*
Ejercicio 2. Utiliza el método .querySelector() para:
Crear una variable "bird" con el valor del elemento con clase ".bird"
Crear una variable "sky" el elemento con clase ".sky"
Crear una variable "ground" el elemento con clase ".ground"
*/

let bird = document.querySelector(".bird")
let sky = document.querySelector(".sky")
let ground = document.querySelector(".ground")


// Ejercicio 3. Utiliza console.log() para imprimir en la consola el valor de bird, sky, y ground
console.log(sky)
console.log(bird)
console.log(ground)



/*
Ejercicio 4. Utiliza la propiedad style para que:
La propiedad bottom de bird tenga un valor de 300px
La propiedad left de bird tenga un valor de 500px 
*/

bird.style.bottom= '300px';
bird.style.left= '500px';
