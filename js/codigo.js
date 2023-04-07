const primeraPagina = document.getElementById('primera')
const segundaPagina = document.getElementById('segunda')
const paraSegunda = document.getElementById('para-segunda')
const contenedorPersonajes = document.getElementById('contenedor-personajes')

let inputpersonaje1 = document.getElementById('personaje1')
let inputpersonaje2 = document.getElementById('personaje2')
let inputpersonaje3 = document.getElementById('personaje3')

function playgame(){
    paraSegunda.style.display = 'none'
    segundaPagina.style.display = 'none'

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
}







window.addEventListener('load', playgame)