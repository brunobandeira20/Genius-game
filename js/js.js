let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//criando ordem aleatoria 
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1);
  }

}

//acendo a proxima cor
let lightColor = (element, Number) => {
  Number = Number * 500;
  setTimeout(() => {
    element.classList.add('selected')
  }, Number - 250)
  setTimeout(() => {
    element.classList.remove('selected')
  });
}

//checa se os boteos clicados
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê Acertou! iniciando Nível!`);
    nextLevel();
  }
}

//funcao para clicar do usuario
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
  });

  checkOrder();
}

// funcao quer retorna a cor

let createColorElement = (color) => {

  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }

}

//funcao para aumentar o nivel
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//funcao gamer over
let lose = () => {
  alert(`Pontuação: ${score}\nVocê pedeu! hahaha`)
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {

}