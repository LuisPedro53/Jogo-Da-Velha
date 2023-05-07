let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");

//contador de jogadas

let player1 = 0;
let player2 = 0;

//adicionando evento ao click dos boxes

for (let i = 0; i < boxes.length; i++) {
  //quando clica na caixa
  boxes[i].addEventListener("click", function () {
    let el = check(player1, player2);

    //verifica se ja tem x ou o
    if (this.childNodes.length == 0) {
      //clona o elemento para pode usa dps em outros boxes
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      //computador jogada
      if (player1 == player2) {
        player1++
      } else {
        player2++
      }
    }
  })
}

function check(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }

  return el;
}