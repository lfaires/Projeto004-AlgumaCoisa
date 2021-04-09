//Variables

let listCard = [];
let j = 0;
let counter = 0;
let hasFlippedCard = false;
let firstCard, secondCard;
let numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
let remainder = numberOfCards % 2;

    
const parrotList = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "metalparrot.gif"]

const numberOfList = document.querySelector(".game")

let idInterval = setInterval(increaseTime,1000)

const time = document.querySelector(".timer")

const sectionDisplay = document.querySelector("section")

//Functions

askNumberOfCards()
startGame()

function askNumberOfCards(){
    while (remainder !== 0 || numberOfCards >14 || numberOfCards <4){
        numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
        remainder = numberOfCards % 2;
    }
}
 
function startGame(){
    parrotList.sort(comparador)
    for(let i=0;i<numberOfCards;i++){    
        if (i%2 !== 0){
            listCard[i] = listCard[i-1]  
            j--
        } else {
            listCard.push(`<li class="card" onclick='flipCards(this)'\><img class="back-face" src="Images/${parrotList[j]}"><img class="front-face" src="Images/front.png"></li>`);
        }
        j++
    }
    shuffleCards()
}

function shuffleCards() {
    listCard.sort(comparador);
    for(let k=0;k<numberOfCards;k++){
        numberOfList.innerHTML += listCard[k]
    }
    sectionDisplay.classList.add("unhide")
}

function flipCards(flip) {
    flip.classList.add("flip")
    
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = flip;
    } else {
        hasFlippedCard = false;
        secondCard = flip;
        checkForMatch()
        playsCounter()
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function checkForMatch(){
    if (firstCard.innerHTML !== secondCard.innerHTML){ 
        unflipCards()
    } 
}

function removeFlip(){
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
}

function unflipCards(){
    setTimeout(removeFlip,1000)
}

function playsCounter(){
    counter++
    finishGame()
}

function finishGame(){
    let allFlippedCards = document.querySelectorAll(".flip")
    if(allFlippedCards.length === numberOfCards){
        clearInterval(idInterval)
        const finalTime = time.innerHTML;
        setTimeout(alert(`Parabéns! Você ganhou o jogo em ${counter} jogadas e ${finalTime} segundos!`),500) 
        numberOfList.innerHTML = ""
        time.innerHTML = 0
        sectionDisplay.classList.remove("unhide")
        restartGame()
    }
}

function restartGame() {
    const restart = prompt("Você gostaria de reiniciar o jogo? (Responsa apenas sim ou não)");
    if(restart === "sim"){
        numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
        remainder = numberOfCards % 2;
        idInterval = setInterval(increaseTime,1000);
        askNumberOfCards()
        startGame()
    }
}

function increaseTime(){
    time.innerHTML ++;
}


// Functions running

