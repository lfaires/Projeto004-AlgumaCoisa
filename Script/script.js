const numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
const remainder = numCards % 2;
let listCard = [];
let j = 0;
let hasFlippedCard = false;
let firstCard, secondCard;
const parrotList = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "metalparrot.gif"]
const numberOfList = document.querySelector(".game")
parrotList.sort(comparador)
let counter = 0;

deckOfCards()
startGame()


function deckOfCards(){
while (remainder !== 0 || numCards >14 || numCards <4){
    numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
    remainder = pnumCards % 2;
}
}

function startGame(){
    for(let i=0;i<numCards;i++){    
        if (i%2 !== 0){
            listCard[i] = listCard[i-1]  
            j--
        } else {
            listCard.push(`<li class="card" onclick='flipCards(this)'\><img class="back-face" src="../Images/${parrotList[j]}"><img class="front-face" src="../Images/front.png"></li>`);
        }
        j++
    }
    shuffleCards()
}


function shuffleCards() {
    listCard.sort(comparador);
    for(let k=0;k<numCards;k++){
        numberOfList.innerHTML += listCard[k]
    }
}


function flipCards(flip) {
    flip.classList.add("flip")
    
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = flip;

    } else {
        hasFlippedCard = false;
        secondCard = flip;
        console.log({hasFlippedCard,firstCard,secondCard})
        checkForMatch()
        playsCounter()
    }
  
}

function comparador() { 
	return Math.random() - 0.5; 
}

function checkForMatch(){
    if (firstCard.innerHTML !== secondCard.innerHTML){ 
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        unflipCards()
    } 
}

function unflipCards(){
}

function playsCounter(){
    counter++
    finishGame()
}

function finishGame(){
    let li = document.querySelectorAll(".flip")
    if(li.length === numCards){
        alert(`Parabéns! Você ganhou o jogo em ${counter} jogadas!`)
        restartGame()
    }
}

/*function restartGame() {
    const restart = prompt("Você gostaria de reiniciar o jogo? (Responsa apenas sim ou não)");
    if(restart === "sim"){
        deckOfCards()
        startGame()
    }
}*/