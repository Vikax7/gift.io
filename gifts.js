// контейнер всей игры
let gameContainer = document.querySelector(`.game-container`);

// 4 подарка
let card1 = document.querySelector(`.card1`);
let card2 = document.querySelector(`.card2`);
let card3 = document.querySelector(`.card3`);
let card4 = document.querySelector(`.card4`);

// выводи сюда результат
let alert = document.querySelector(`#alert`);

let c = 0

function onCardClick(evt) {
    c++
    let node = evt.target;
    let card = node.closest(`.card`);
    if (card) {
        if (card.classList.contains(`card4`)) {
            card.classList.add(`animate__flip`);
            card1.classList.add(`animate__zoomOut`);
            card2.classList.add(`animate__zoomOut`);
            card3.classList.add(`animate__zoomOut`);
            alert.innerHTML = `О, четко!`;
        } else {
            card.classList.add(`animate__zoomOut`);
            if (c == 1) {
                alert.innerHTML = `Чето не то`;
            } else if (c==2){
                alert.innerHTML = `Ты че`
            }else{
                alert.innerHTML = `Ну пиздец`
            }


        }
    }
};

card1.addEventListener(`click`, onCardClick);
card2.addEventListener(`click`, onCardClick);
card3.addEventListener(`click`, onCardClick);
card4.addEventListener(`click`, onCardClick);