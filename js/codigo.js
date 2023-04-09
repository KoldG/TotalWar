const primeraPagina = document.getElementById('primera')
const segundaPagina = document.getElementById('segunda')
const paraSegunda = document.getElementById('para-segunda')
const contenedorPersonajes = document.getElementById('contenedor-personajes')
const paraTercera = document.getElementById('para-tercera')
const terceraPagina = document.getElementById('tercera')

let contenedorCascos = document.getElementById('cascos')
let contenedorChalecos = document.getElementById('chalecos')
let contenedorFuego = document.getElementById('fuego')

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
    {nombre: 'Fuego', id: 'cabeza3', foto: 'assets/demonio.avif', class: 'cobertor', class2: 'a-cascos'},
    
]

demonio.wiro.push(...demonioWiro)

const humanoWiro = [
    {nombre: 'Mascara', id: 'cabeza', foto: 'assets/humano.jpg', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Gas', id: 'cabeza2', foto: 'assets/humano.jpg', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Nocturno', id: 'cabeza3', foto: 'assets/humano.jpg', class: 'cobertor', class2: 'a-cascos'}

]

humano.wiro.push(...humanoWiro)

const angelWiro = [
    {nombre: 'Aurola', id: 'cabeza', foto: 'assets/angel.jpg', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Corona', id: 'cabeza2', foto: 'assets/angel.jpg', class: 'cobertor', class2: 'a-cascos'},
    {nombre: 'Luz', id: 'cabeza3', foto: 'assets/angel.jpg', class: 'cobertor', class2: 'a-cascos'}

]

angel.wiro.push(...angelWiro)

//..............Pecho..............................................
 
const demonioPechera = [
    {nombre: 'Traje', id: 'pecho', foto: 'assets/demonio.avif', class: 'cobertor-p', class2: 'a-chalecos'},
    {nombre: 'Musculos', id: 'pecho2', foto: 'assets/demonio.avif', class: 'cobertor-p', class2: 'a-chalecos'},
    {nombre: 'Alas', id: 'pecho3', foto: 'assets/demonio.avif', class: 'cobertor-p', class2: 'a-chalecos'},
    
]

demonio.pechera.push(...demonioPechera)

const humanoPechera = [
    {nombre: 'Chaleco', id: 'pecho', foto: 'assets/humano.jpg', class: 'cobertor-p', class2: 'a-chalecos'},
    {nombre: 'Sueter', id: 'pecho2', foto: 'assets/humano.jpg', class: 'cobertor-p', class2: 'a-chalecos'},
    {nombre: 'Armadura', id: 'pecho3', foto: 'assets/humano.jpg', class: 'cobertor-p', class2: 'a-chalecos'}

]

humano.pechera.push(...humanoPechera)

const angelPechera = [
    {nombre: 'Alas', id: 'pecho', foto: 'assets/angel.jpg', class: 'cobertor-p', class2: 'a-chalecos'},
    {nombre: 'Desnudo', id: 'pecho2', foto: 'assets/angel.jpg', class: 'cobertor-p', class2: 'a-chalecos'},
    {nombre: 'Armadura', id: 'pecho3', foto: 'assets/angel.jpg', class: 'cobertor-p', class2: 'a-chalecos'}

]

//................................armas.............................

const demonioBicha = [
    {nombre: 'Tridente', id: 'af', foto: 'assets/demonio.avif', class: 'cobertor-a', class2: 'a-armas'},
    {nombre: 'Fuego', id: 'af2', foto: 'assets/demonio.avif', class: 'cobertor-a', class2: 'a-armas'},
    {nombre: 'Latigo', id: 'af3', foto: 'assets/demonio.avif', class: 'cobertor-a', class2: 'a-armas'},
    
]

demonio.bicha.push(...demonioBicha)

const humanoBicha = [
    {nombre: 'Katana', id: 'af', foto: 'assets/humano.jpg', class: 'cobertor-a', class2: 'a-armas'},
    {nombre: 'Asalto', id: 'af2', foto: 'assets/humano.jpg', class: 'cobertor-a', class2: 'a-armas'},
    {nombre: 'Espadas', id: 'af3', foto: 'assets/humano.jpg', class: 'cobertor-a', class2: 'a-armas'}

]

humano.bicha.push(...humanoBicha)

const angelBicha = [
    {nombre: 'Arco', id: 'af', foto: 'assets/angel.jpg', class: 'cobertor-a', class2: 'a-armas'},
    {nombre: 'Trueno', id: 'af2', foto: 'assets/angel.jpg', class: 'cobertor-a', class2: 'a-armas'},
    {nombre: 'Espada', id: 'af3', foto: 'assets/angel.jpg', class: 'cobertor-a', class2: 'a-armas'}

]

angel.bicha.push(...angelBicha)


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

    if (inputpersonaje1.checked ) {
        jugador = inputpersonaje1.id
    } else if (inputpersonaje2.checked ){
        jugador = inputpersonaje2.id 
    } else if (inputpersonaje3.checked ){
        jugador = inputpersonaje3.id
    }
    
    
    extraerArmamento(jugador)

    paraTercera.addEventListener('click', pagina3)
}
function extraerArmamento(jugador){
    for (let i = 0; i < personajes.length; i++) {
        if (jugador === personajes[i].nombre) {
            wiros = personajes[i].wiro
        }
        
    }
    armamento(wiros)
    
    for (let i = 0; i < personajes.length; i++) {
        if (jugador === personajes[i].nombre) {
            pecheras = personajes[i].pechera
        }
        
    }

    armamento2(pecheras)

    for (let i = 0; i < personajes.length; i++) {
        if (jugador === personajes[i].nombre) {
            bichas = personajes[i].bicha
        }
        
    }
    
    armamento3(bichas)
}
function armamento(wiros){
    wiros.forEach((wiro) =>{
        opcionDeWiro = 
        `
        <lu>
            <input type="radio" name="cascos" id=${wiro.id}>
            <label class=${wiro.class} for=${wiro.id}>
                <p1 class=${wiro.class2}>${wiro.nombre}</p1>
                <img src=${wiro.foto} alt="personaje">
            </label> 

        </lu>
        `
        contenedorCascos.innerHTML += opcionDeWiro
    })
}

function armamento2(pecheras){
    pecheras.forEach((pechera) =>{
        opcionDePechera = 
        `
        <lu>
            <input type="radio" name="pecheras" id=${pechera.id}>
            <label class=${pechera.class} for=${pechera.id}>
                <p1 class=${pechera.class2}>${pechera.nombre}</p1>
                <img src=${pechera.foto} alt="personaje">
            </label> 

        </lu>
        `
        contenedorChalecos.innerHTML += opcionDePechera
    })
}

function armamento3(bichas) {
    bichas.forEach((bicha) =>{
        opcionDeBicha = 
        `
        <lu>
            <input type="radio" name="bichas" id=${bicha.id}>
            <label class=${bicha.class} for=${bicha.id}>
                <p1 class=${bicha.class2}>${bicha.nombre}</p1>
                <img src=${bicha.foto} alt="personaje">
            </label> 

        </lu>
        `
        contenedorFuego.innerHTML += opcionDeBicha
    })
}

function pagina3(){
    segundaPagina.style.display = 'none'
    terceraPagina.style.display = 'flex'
}







window.addEventListener('load', playgame)