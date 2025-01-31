// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const agregarAmigo = () => {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (inputAmigo.value.trim() === '') {
        alert('Debes ingresar un nombre');
        inputAmigo.value = '';
    } else {
        amigos.push(inputAmigo.value.trim());
        listaAmigos.innerHTML += `<li>${inputAmigo.value.trim()}</li>`;
        inputAmigo.value = '';
        console.log(amigos);
    }
};
const sortearAmigo = () => {
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos');
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `El amigo secreto de hoy es: ${amigoAleatorio}`;
    amigos = [];
    listaAmigos.innerHTML = '';
    }