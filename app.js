// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaDeAmigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  listaDeAmigos.push(nombre);

  actualizarListaVisual();

  input.value = "";
}

function actualizarListaVisual() {
  const ul = document.getElementById("listaAmigos");

  ul.innerHTML = "";

  listaDeAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function mostrarListaDeAmigos() {
  const listaHTML = document.getElementById("listaAmigos");

  listaHTML.innerHTML = "";

  for (let i = 0; i < listaDeAmigos.length; i++) {
    const amigo = listaDeAmigos[i];

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigo;

    listaHTML.appendChild(nuevoElemento);
  }
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  listaDeAmigos.push(nombre);
  mostrarListaDeAmigos();

  input.value = "";
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (listaDeAmigos.length === 0) {
    resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

  const amigoSorteado = listaDeAmigos[indiceAleatorio];

  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
