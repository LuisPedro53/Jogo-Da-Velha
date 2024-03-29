let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let btnVoltar = document.getElementById("voltar");
let btnZerar = document.getElementById("zerar");
let gameInProgress = true;

//contador de jogadas

let player1 = 0;
let player2 = 0;

//adicionando evento ao click dos boxes

for (let i = 0; i < boxes.length; i++) {
  //quando clica na caixa
  boxes[i].addEventListener("click", eventoBoxes);
}
//evento de clique dos boxes
function eventoBoxes() {
  //teste

  let el = check(player1, player2);

  //verifica se ja tem x ou o
  if (this.childNodes.length == 0) {
    //clona o elemento para pode usa dps em outros boxes
    let cloneEl = el.cloneNode(true);
    this.appendChild(cloneEl);

    //computador jogada
    if (player1 == player2) {
      player1++;
      if (secondPlayer == "ai-player") {
        player2++;
        computerplayer();
      }
    } else {
      player2++;
    }

    //checar quem venceu
    checkWinCondition();
  }
}

//executar logica da jogada da cpu
function computerplayer() {
  if (gameInProgress) {
    setTimeout(() => {
      let cloneO = o.cloneNode(true);
      counter = 0;
      filled = 0;
      //aqui verifica se o jogo terminou, olhando se a classe hide esta ativa
      // caso não esteja, e definido o gameinprogress = false, bloqueando a IA de jogar novamente
      if (messageContainer.classList.contains("hide")) {
        for (let i = 0; i < boxes.length; i++) {
          let randomNumber = Math.floor(Math.random() * 5);
          //so preenche se estivar vazio o filho
          if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
              boxes[i].appendChild(cloneO);
              counter++;
              break;
            }
            //checagem de quantas estão preenchidas
          } else {
            filled++;
          }
        }
        if (counter == 0 && filled < 9) {
          computerplayer();
        }
        checkWinCondition();
      } else {
        gameInProgress = false;
      }
    }, 350);
  }
}

function check(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }
  return el;
}

function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }
  //Vertical

  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }
  //vertical
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      declareWinner("o");
    }
  }
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }

  //deu velha

  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner("Deu velha");
  }
}

function declareWinner(winner) {
  let scoreboardx = document.querySelector("#scoreboard-1");
  let scoreboardy = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreboardx.textContent = parseInt(scoreboardx.textContent) + 1;
    msg = "O jogador 1 venceu!";
  } else if (winner == "o") {
    scoreboardy.textContent = parseInt(scoreboardy.textContent) + 1;
    msg = "O jogador 2 venceu!";
  } else {
    msg = "Deu velha!";
  }

  // exibe mensagem
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  for (let i = 0; i < boxes.length; i++) {
    //quando clica na caixa
    boxes[i].removeEventListener("click", eventoBoxes);
  }

  let voltar = document.querySelector("#voltar-container");
  voltar.classList.add("hide");

  //esconde mensagem
  setTimeout(function () {
    messageContainer.classList.add("hide");
    //Zerar as jogadas
    player1 = 0;
    player2 = 0;
    //remove x e o
    let boxToRemove = document.querySelectorAll(".box div");
    for (let i = 0; i < boxToRemove.length; i++) {
      boxToRemove[i].parentNode.removeChild(boxToRemove[i]);
    }

    for (let i = 0; i < boxes.length; i++) {
      //quando clica na caixa
      boxes[i].addEventListener("click", eventoBoxes);
    }

    voltar.classList.remove("hide");
    gameInProgress = true;
  }, 3000);
}

//EVENTOS PARA SABER SE É DOIS OU IA
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id");

    // for (let j = 0; j < buttons.length; j++) {
    //   buttons[j].style.display = "none";
    // }
    let container = document.querySelector("#buttons-container");
    container.classList.add("hide");

    setTimeout(() => {
      let container = document.querySelector("#container");
      container.classList.remove("hide");

      let voltar = document.querySelector("#voltar-container");
      voltar.classList.remove("hide");
    }, 300);
  });
}

btnVoltar.addEventListener("click", function () {
  zerarJogadas();
  let container = document.querySelector("#container");
  container.classList.add("hide");

  let voltar = document.querySelector("#voltar-container");
  voltar.classList.add("hide");

  let voltarBotoes = document.querySelector("#buttons-container");
  voltarBotoes.classList.remove("hide");
});

btnZerar.addEventListener("click", function () {
  zerarJogadas();
});

function zerarJogadas() {
  player1 = 0;
  player2 = 0;
  let boxToRemove = document.querySelectorAll(".box div");
  for (let i = 0; i < boxToRemove.length; i++) {
    boxToRemove[i].parentNode.removeChild(boxToRemove[i]);
  }

  let scoreboardx = document.querySelector("#scoreboard-1");
  let scoreboardy = document.querySelector("#scoreboard-2");

  scoreboardx.textContent = "0";
  scoreboardy.textContent = "0";
}
