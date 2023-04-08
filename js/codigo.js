const primeraPagina = document.getElementById('primera')
const segundaPagina = document.getElementById('segunda')
const paraSegunda = document.getElementById('para-segunda')
const contenedorPersonajes = document.getElementById('contenedor-personajes')
const paraTercera = document.getElementById('para-tercera')
const terceraPagina = document.getElementById('tercera')

let jugador

let inputpersonaje1 
let inputpersonaje2 
let inputpersonaje3 

let personajes = []

class Personaje {
    constructor(nombre, foto, tarjeta, tarjeta2, vida){
        this.nombre = nombre
        this.foto = foto
        this.tarjeta = tarjeta
        this.tarjeta2 = tarjeta2
        this.vida = vida
        this.wiro = []
        this.pechera = []
        this.bicha = []
    }
}

let demonio = new Personaje('Demonio', 'assets/demonio.avif', 'demonio', 'p-demonio', 10)
let humano = new Personaje('Humano', 'assets/humano.jpg', 'humano', 'p-humano', 10)
let angel = new Personaje('Angel', 'assets/angel.jpg', 'angel', 'p-angel', 10)

const demonioWiro = [
    {nombre: 'Cuernos', id: 'cabeza', foto: 'assets/demonio.avif', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Corona', id: 'cabeza2', foto: 'assets/demonio.avif', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Fuego', id: 'cabeza3', foto: 'assets/demonio.avif', class: 'cobertor', class2: 'a-cascos'}

]

demonio.wiro.push(...demonioWiro)

const humanoWiro = [
    {nombre: 'Casco', id: 'cabeza', foto: 'assets/humano.jpg', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Gorra', id: 'cabeza2', foto: 'assets/humano.jpg', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Sombrero', id: 'cabeza3', foto: 'assets/humano.jpg', class: 'cobertor', class2: 'a-cascos'}

]

humano.wiro.push(...humanoWiro)

const angelWiro = [
    {nombre: 'Aurola', id: 'cabeza', foto: 'assets/angel.jpg', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Corona', id: 'cabeza2', foto: 'assets/angel.jpg', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Luz', id: 'cabeza3', foto: 'assets/angel.jpg', class: 'cobertor', class2: 'a-cascos'}

]

angel.wiro.push(...angelWiro)

personajes.push(demonio,humano,angel)



function playgame(){
    paraSegunda.style.display = 'none'
    segundaPagina.style.display = 'none'
    terceraPagina.style.display = 'none'

    personajes.forEach((personajex) => {
        opcionDePersonajes=
        `
        <input type="radio" name="muneco" id=${personajex.nombre}>
        <label class=${personajex.tarjeta} for=${personajex.nombre}>
        <p1 class=${personajex.tarjeta2}>${personajex.nombre}</p1>
        <img src=${personajex.foto} alt="personaje">
        </label> 
        `
        contenedorPersonajes.innerHTML += opcionDePersonajes

        inputpersonaje1 = document.getElementById('Demonio')
        inputpersonaje2 = document.getElementById('Humano')
        inputpersonaje3 = document.getElementById('Angel')
    })
    
    
    inputpersonaje1.addEventListener('click', siguiente2)
    inputpersonaje2.addEventListener('click', siguiente2)
    inputpersonaje3.addEventListener('click', siguiente2)
   
    paraSegunda.addEventListener('click', pagina2)

}
function siguiente2(){
    paraSegunda.style.display = 'flex'


}
function pagina2(){
    primeraPagina.style.display = 'none'
    segundaPagina.style.display = 'flex'
    
    wiro.forEach((wiros) =>{
        opcionDeWiro = 
        `
        <p>Cascos:</p>
        <lu>
            <input type="radio" name="cascos" id="cabeza">
            <label class="cobertor" for="cabeza">
                <p1 class="a-cascos">Militar</p1>
                <img src="assets/angel.jpg" alt="personaje">
            </label> 

            <input type="radio" name="cascos" id="cabeza2">
            <label class="cobertor" for="cabeza2">
                <p1 class="a-cascos">Asalto</p1>
                <img src="assets/angel.jpg" alt="personaje">
            </label> 

            <input type="radio" name="cascos" id="cabeza3">
            <label class="cobertor-c" for="cabeza3">
                <p1 class="a-cascos">Nocturno</p1>
                <img src="assets/angel.jpg" alt="personaje">
            </label> 

                </lu>
        `
    })


    paraTercera.addEventListener('click', pagina3)
}

function pagina3(){
    segundaPagina.style.display = 'none'
    terceraPagina.style.display = 'flex'
}







window.addEventListener('load', playgame)