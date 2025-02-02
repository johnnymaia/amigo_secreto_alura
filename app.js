// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const lista = document.getElementById("listaAmigos");
  const nome = input.value.trim();

  if (nome) {
    if (amigos.includes(nome)) {
      alert("Este nome já foi adicionado!");
    } else {
      amigos.push(nome);

      // Criar elemento de lista e adicionar ao DOM
      const li = document.createElement("li");
      li.textContent = nome;
      lista.appendChild(li);

      // Limpar o campo de entrada
      input.value = "";
      input.focus();
    }
  } else {
    alert("Digite um nome válido!");
  }
}

// Função para sortear apenas um nome da lista
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo para realizar o sorteio!");
    return;
  }

  const lista = document.getElementById("listaAmigos");
  const resultado = document.getElementById("resultado");
  const botaoSortear = document.querySelector(".button-draw");
  const botaoReiniciar = document.querySelector(".button-reset");

  // Sortear um nome aleatório da lista
  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  // Limpar e ocultar a lista de nomes
  lista.innerHTML = "";
  lista.style.display = "none";

  // Exibir apenas o nome do sorteado
  resultado.innerHTML = `<li>O amigo sorteado foi: <strong> ${sorteado} </strong></li>`;

  // Desativar o botão "Sortear amigo" e ativar "Reiniciar Sorteio"
  botaoSortear.disabled = true;
  botaoSortear.style.opacity = "0.5";

  botaoReiniciar.disabled = false;
  botaoReiniciar.style.opacity = "1";
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
  const lista = document.getElementById("listaAmigos");
  const resultado = document.getElementById("resultado");
  const botaoSortear = document.querySelector(".button-draw");
  const botaoReiniciar = document.querySelector(".button-reset");

  // Restaurar a lista de nomes
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
  lista.style.display = "block";

  // Limpar o resultado do sorteio
  resultado.innerHTML = "";

  // Reativar o botão "Sortear amigo" e desativar "Reiniciar Sorteio"
  botaoSortear.disabled = false;
  botaoSortear.style.opacity = "1";

  botaoReiniciar.disabled = true;
  botaoReiniciar.style.opacity = "0.5";
}
