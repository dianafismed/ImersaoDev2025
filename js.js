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
