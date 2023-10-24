let mensajesAtaque = [
    '¡Has atacado al enemigo!',
    '¡Un poderoso ataque ha impactado al enemigo!',
    '¡El enemigo se tambalea bajo tu feroz ataque!',
    '¡El enemigo recibe un golpe directo!'
];
let playerhp = 20
let enemyhp = 6
let mensajeIndex = 0;

function atacar() {
    enemyhp -= 2;
    playerhp -= 1;

    if (playerhp <= 0) {
        playerhp = 0;
        document.getElementById('atacar').innerHTML = 'DEAD';
    } else {
        document.getElementById('atacar').innerHTML = 'Atacar';
    }

    
    const mensajesDiv = document.getElementById('mensajes');
    mensajesDiv.textContent = mensajesAtaque[mensajeIndex];

    mensajeIndex = (mensajeIndex + 1) % mensajesAtaque.length;

    refreshhp();
    playerrefreshhp();
}


function defender() {
    document.getElementById('defender').innerHTML = 'Defender';
    if (playerhp <= 0) {
        playerhp = 0; 
        document.getElementById('defender').innerHTML = 'DEAD';
    } else {
        document.getElementById('defender').innerHTML = 'Defender';
    }

    enemyhp = 0
    playerhp = 0;
}

function rendirse() {
    playerhp = 0;
    document.getElementById('rendirse').innerHTML = 'DEAD';
    playerrefreshhp();
}

function refreshhp() {
    document.getElementById('enemyhp').innerHTML = 'enemy HP: ' + enemyhp;
}

function playerrefreshhp() {
    document.getElementById('playerhp').innerHTML = 'player HP: ' + playerhp;
}

document.getElementById('atacar').addEventListener('click', atacar);
document.getElementById('defender').addEventListener('click', defender);
document.getElementById('rendirse').addEventListener('click', rendirse);