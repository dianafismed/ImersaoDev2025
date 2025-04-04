function converter() {
  const wons = 1000;
  let reais = parseFloat(prompt("Digite o valor em reais: "));
  alert("O valor convertido é de: " + wons * reais + " wons");
}

function jogo() {
  jogador = prompt("Escolha: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura \n");
  computador = Math.floor(Math.random() * 3) + 1;
  alert("O computador escolheu " + computador + ".");

  if (jogador == computador) {
    alert("Empate!");
  } else if (
    (jogador == "1" && computador == "3") ||
    (jogador == "2" && computador == "1") ||
    (jogador == "3" && computador == "2")
  ) {
    alert("Você ganhou!");
  } else if (
    (computador == "1" && jogador == "3") ||
    (computador == "2" && jogador == "1") ||
    (computador == "3" && jogador == "2")
  ) {
    alert("Você perdeu!");
  } else {
    alert("Escolha inválida!");
  }
}

function pegada() {
  let rodada = 1;
  while (rodada <= 5) {
    jogador = prompt("Nível " + rodada + "\nEscolha o vidro: 1, 2, 3, 4 ou 5 ");
    vidro = Math.floor(Math.random() * 5) + 1;
    if (jogador == vidro) {
      alert("O vidro quebrou ! Fim de jogo !");
      rodada = 1000;
    } else {
      alert("O vidro não quebrou ! Você pode continuar jogando !");
    }
    rodada++;
  }

  if (rodada == 4) {
    alert("Você venceu ! Parabéns !");
  }
}

function jogar() {
  let herois = ["", "", ""];
  let viloes = ["", "", ""];
  let forcaHerois = 0;
  let forcaViloes = 0;

  for (let i = 0; i < 3; i++) {
    heroi = prompt("Digite o nome do heroi: " + (i + 1));
    herois[i] = heroi;
    forcaHerois += Math.floor(Math.random() * 10) + 1;
  }

  for (let i = 0; i < 3; i++) {
    aleatorio = Math.floor(Math.random() * 10);
    possiveis = [
      "Thanos",
      "Loki",
      "Ultron",
      "Hela",
      "Doutor Octopus",
      "Venom",
      "Carnificina",
      "Duende Verde",
      "Mysterio",
      "Doutor Destino",
    ];
    viloes[i] = possiveis[aleatorio];
    forcaViloes += Math.floor(Math.random() * 10) + 1;
  }

  alert("Herois: " + herois + "\nViloes: " + viloes);
  alert("Força dos Herois: " + forcaHerois + "\nForça dos Viloes: " + forcaViloes);
  if (forcaHerois == forcaViloes) {
    alert("Deu empate !");
  } else if (forcaHerois > forcaViloes) {
    alert("Os Herois venceram !");
  } else {
    alert("Os Viloes venceram !");
  }
}
