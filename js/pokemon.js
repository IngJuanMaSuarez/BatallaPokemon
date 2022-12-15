const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const botonMascotaJugador = document.getElementById('boton-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaquesJugador = document.getElementById('contenedorAtaquesJugador')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const imagenPokemonJugador = document.getElementById('imagen-pokemon-jugador')
const imagenPokemonEnemigo = document.getElementById('imagen-pokemon-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const sectionReiniciar = document.getElementById('reiniciar')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

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
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoMapa = 350

if(anchoDelMapa > anchoMaximoMapa){
    anchoDelMapa = anchoMaximoMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext('2d')
let intervalo

class Mokepon {
    constructor(nombre, foto, vida, tipo, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.tipo = tipo
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height- this.alto)
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarPokemon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.alto, 
            this.ancho
        )
    }
}

let squirtle = new Mokepon('Squirtle', './assets/squirtle.png', 5, 'AGUA', './assets/squirtle.png')
let bulbasaur = new Mokepon('Bulbasaur', './assets/bulbasaur.png', 5, 'PLANTA', './assets/bulbasaur.png')
let charmander = new Mokepon('Charmander', './assets/charmander.png', 5, 'FUEGO', './assets/charmander.png')
let poliwag = new Mokepon('Poliwag', './assets/poliwag.png', 5, 'AGUA', './assets/poliwag.png')
let oddish = new Mokepon('Oddish', './assets/oddish.png', 5, 'PLANTA', './assets/oddish.png')
let growlithe = new Mokepon('Growlithe', './assets/growlithe.png', 5, 'FUEGO', './assets/growlithe.png')

let squirtleEnemigo = new Mokepon('Squirtle', './assets/squirtle.png', 5, 'AGUA', './assets/squirtle.png')
let bulbasaurEnemigo = new Mokepon('Bulbasaur', './assets/bulbasaur.png', 5, 'PLANTA', './assets/bulbasaur.png')
let charmanderEnemigo = new Mokepon('Charmander', './assets/charmander.png', 5, 'FUEGO', './assets/charmander.png')

squirtle.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-planta'}
)

squirtleEnemigo.ataques.push(
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

bulbasaurEnemigo.ataques.push(
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

charmanderEnemigo.ataques.push(
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
    sectionVerMapa.style.display = 'none'

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
    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function(res) {
            if (res.ok) {
                res.text()
                    .then(function(respuesta) {
                        console.log(respuesta)
                    })
            }
        })
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'

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
        location.reload()
    }

    for (let i = 0; i < mokepones.length; i++) {
        if (nombreMascotaJugador === mokepones[i].nombre) {
            mascotaJugador = mokepones[i]
        }
    }

    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function seleccionarMascotaEnemigo(enemigo) {

    mascotaEnemigo = enemigo
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
    
    nuevoAtaqueDelJugador.innerHTML = "Atacas con " + indexAtaqueJugador.toLowerCase()
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

function pintarCanvas(){
    mascotaJugador.x = mascotaJugador.x + mascotaJugador.velocidadX
    mascotaJugador.y = mascotaJugador.y + mascotaJugador.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugador.pintarPokemon()
    squirtleEnemigo.pintarPokemon()
    bulbasaurEnemigo.pintarPokemon()
    charmanderEnemigo.pintarPokemon()

    if (mascotaJugador.velocidadX !== 0 || mascotaJugador.velocidadY !== 0) {
        revisarColision(squirtleEnemigo)
        revisarColision(bulbasaurEnemigo)
        revisarColision(charmanderEnemigo)
    }
}

function moverArriba(){
    mascotaJugador.velocidadY = -5
}

function moverIzquierda(){
    mascotaJugador.velocidadX = -5
}

function moverAbajo(){
    mascotaJugador.velocidadY = 5
}

function moverDerecha(){
    mascotaJugador.velocidadX = 5
}

function detenerMovimiento(){
    mascotaJugador.velocidadX = 0
    mascotaJugador.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugador.y
    const abajoMascota = mascotaJugador.y + enemigo.alto
    const derechaMascota = mascotaJugador.x + enemigo.ancho
    const izquierdaMascota = mascotaJugador.x

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return 
    }
    
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarJuego)