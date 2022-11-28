const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')

const sectionMensajes = document.getElementById('resultado')
const sectionReiniciar = document.getElementById('reiniciar')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaquesJugador = document.getElementById('contenedorAtaquesJugador')
const imagenPokemonJugador = document.getElementById('imagen-pokemon-jugador')
const imagenPokemonEnemigo = document.getElementById('imagen-pokemon-enemigo')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let botones = []

let opcionDeMokepones
let nombreMascotaJugador
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonPlanta
let indexAtaqueJugador
let indexAtaqueEnemigo
let tipoMokemonEnemigo
let mascotaAleatoria

let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.tipo = tipo
    }
}

let squirtle = new Mokepon('Squirtle', './assets/squirtle.png', 5, 'AGUA')
let bulbasaur = new Mokepon('Bulbasaur', './assets/bulbasaur.png', 5, 'PLANTA')
let charmander = new Mokepon('Charmander', './assets/charmander.png', 5, 'FUEGO')
let poliwag = new Mokepon('Poliwag', './assets/poliwag.png', 5, 'AGUA')
let oddish = new Mokepon('Oddish', './assets/oddish.png', 5, 'PLANTA')
let growlithe = new Mokepon('Growlithe', './assets/growlithe.png', 5, 'FUEGO')

squirtle.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-planta'}
)

bulbasaur.ataques.push(
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

charmander.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-planta'}
)

poliwag.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-planta'}
)

oddish.ataques.push(
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)

growlithe.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-planta'}
)

mokepones.push(squirtle, bulbasaur, charmander, poliwag, oddish, growlithe)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascota" id="${mokepon.nombre}"/>
            <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
                <p>${mokepon.nombre}</p>
                <img src="${mokepon.foto}" alt="${mokepon.nombre}">
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputSquirtle = document.getElementById('Squirtle')
        inputBulbasaur = document.getElementById('Bulbasaur')
        inputCharmander = document.getElementById('Charmander')
        inputPoliwag = document.getElementById('Poliwag')
        inputOddish = document.getElementById('Oddish')
        inputGrowlithe = document.getElementById('Growlithe')
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = inputSquirtle.id
        nombreMascotaJugador = inputSquirtle.id
    } else if (inputBulbasaur.checked) {
        spanMascotaJugador.innerHTML = inputBulbasaur.id
        nombreMascotaJugador = inputBulbasaur.id
    } else if (inputCharmander.checked) {
        spanMascotaJugador.innerHTML = inputCharmander.id
        nombreMascotaJugador = inputCharmander.id
    } else if (inputPoliwag.checked) {
        spanMascotaJugador.innerHTML = inputPoliwag.id
        nombreMascotaJugador = inputPoliwag.id
    } else if (inputOddish.checked) {
        spanMascotaJugador.innerHTML = inputOddish.id
        nombreMascotaJugador = inputOddish.id
    } else if (inputGrowlithe.checked) {
        spanMascotaJugador.innerHTML = inputGrowlithe.id
        nombreMascotaJugador = inputGrowlithe.id
    } else {
        alert("Selecciona una mascota")
    }

    for (let i = 0; i < mokepones.length; i++) {
        if (nombreMascotaJugador === mokepones[i].nombre) {
            mascotaJugador = mokepones[i]
        }
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    mascotaEnemigo = mokepones[mascotaAleatoria]
    spanMascotaEnemigo.innerHTML = mascotaEnemigo.nombre

    extraerAtaques()
}

function extraerAtaques(){

    if (mascotaJugador.tipo === mascotaEnemigo.tipo) {
    } else if (
        mascotaJugador.tipo === 'AGUA' && mascotaEnemigo.tipo === 'FUEGO' || 
        mascotaJugador.tipo === 'FUEGO' && mascotaEnemigo.tipo === 'PLANTA' ||
        mascotaJugador.tipo === 'PLANTA' && mascotaEnemigo.tipo === 'AGUA') {
            mascotaJugador.ataques.unshift(mascotaJugador.ataques[0])
    } else {
        mascotaEnemigo.ataques.unshift(mascotaEnemigo.ataques[0])
    }
    
    mostrarAtaques(mascotaJugador.ataques, mascotaEnemigo.ataques)
}

function mostrarAtaques(ataquesJugador, ataquesEnemigo){

    imagenPokemonJugador.innerHTML = `<img src="${mascotaJugador.foto}" alt="">`
    imagenPokemonEnemigo.innerHTML = `<img src="${mascotaEnemigo.foto}" alt="">`

    ataquesJugador.forEach(ataqueJugador => {
        ataquesMokepon = `
            <button id="${ataqueJugador.id}" class="boton-de-ataque BAtaque">${ataqueJugador.nombre}</button>
        `
        contenedorAtaquesJugador.innerHTML += ataquesMokepon
    });

    ataquesEnemigo.forEach(ataqueEnemigo => {
        ataquesMokepon = `
            <button id="${ataqueEnemigo.id}" class="boton-de-ataque boton-rival">${ataqueEnemigo.nombre}</button>
        `
        contenedorAtaquesEnemigo.innerHTML += ataquesMokepon
    });

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonPlanta = document.getElementById('boton-planta')
    botones = document.querySelectorAll('.BAtaque')
    
    botonesRival = document.querySelectorAll('.boton-rival')
    botonesRival.forEach((botonRival) => {
        botonRival.style.background = 'var(--background)'
        botonRival.disabled = true
        botonRival.style.border = '2px solid var(--background-claro)'               
    })

    secuenciaAtaque()
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                boton.style.background = 'var(--background)'
                boton.disabled = true
                boton.style.border = '2px solid var(--background-claro)'
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                boton.style.background = 'var(--background)'
                boton.disabled = true
                boton.style.border = '2px solid var(--background-claro)'
            } else {
                ataqueJugador.push('PLANTA')
                boton.style.background = 'var(--background)'
                boton.disabled = true
                boton.style.border = '2px solid var(--background-claro)'
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function ataqueAleatorioEnemigo() {

    let ataqueAleatorio = aleatorio(0, mascotaEnemigo.ataques.length - 1)

    if (mascotaEnemigo.ataques[ataqueAleatorio].nombre == '🔥'){
        ataqueEnemigo.push('FUEGO')
    } else if (mascotaEnemigo.ataques[ataqueAleatorio].nombre == '💧'){
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('PLANTA')
    }

    mascotaEnemigo.ataques.splice(ataqueAleatorio, 1)

    combate()
}

function combate() {

    index = ataqueJugador.length - 1

    if (ataqueJugador.at(-1) === ataqueEnemigo.at(-1)){
        indexAmbosOponente(index, index)
        crearMensaje()
    } else if (ataqueJugador.at(-1) === 'FUEGO' && ataqueEnemigo.at(-1) === 'PLANTA') {
        indexAmbosOponente(index, index)
        crearMensaje()
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueJugador.at(-1) === 'AGUA' && ataqueEnemigo.at(-1) === 'FUEGO') {
        indexAmbosOponente(index, index)
        crearMensaje()
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueJugador.at(-1) === 'PLANTA' && ataqueEnemigo.at(-1) === 'AGUA') {
        indexAmbosOponente(index, index)
        crearMensaje()
        victoriasJugador++
        spanVidasJugador.innerHTML = victoriasJugador
    } else {
        indexAmbosOponente(index, index)
        crearMensaje()
        victoriasEnemigo++
        spanVidasEnemigo.innerHTML = victoriasEnemigo
    }

    if (ataqueJugador.length === 5) {
        revisarVidas()
    }
}

function indexAmbosOponente(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function crearMensaje() {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    
    nuevoAtaqueDelJugador.innerHTML = "Atacas al rival con " + indexAtaqueJugador.toLowerCase()
    nuevoAtaqueDelEnemigo.innerHTML = "Tu rival ataca con " + indexAtaqueEnemigo.toLowerCase()

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Empataste 😕")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("Ganaste 😎")
    } else {
        crearMensajeFinal("Perdiste 😢")    
    }
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)