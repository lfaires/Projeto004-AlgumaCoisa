//Variables

let listCard = [];
let j = 0;
let counter = 0;
let hasFlippedCard = false;
let firstCard, secondCard;
let numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
let remainder = numberOfCards % 2;    
let idInterval = setInterval(incrementerTime,1000);
let parrotList = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "metalparrot.gif"]
const numberOfList = document.querySelector(".game");
const time = document.querySelector(".timer");
const sectionDisplay = document.querySelector("section");

//Functions

askNumberOfCards();
startGame();

function askNumberOfCards(){
    while (remainder !== 0 || numberOfCards >14 || numberOfCards <4){
        numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
        remainder = numberOfCards % 2;
    }
}
 
function startGame(){
    parrotList.sort(comparador);
    for(let i=0;i<numberOfCards;i++){    
        if (i%2 !== 0){
            listCard[i] = listCard[i-1]; 
            j--;
        } else {
            listCard.push(`<li class="card" onclick='flipCards(this)'\><img class="back-face" src="Images/${parrotList[j]}"><img class="front-face" src="Images/front.png" alt="parrot"></li>`);
        }
        j++
    }
    shuffleCards();
}

function shuffleCards() {
    listCard.sort(comparador);
    for(let i=0;i<numberOfCards;i++){
        numberOfList.innerHTML += listCard[i];
    }
    sectionDisplay.classList.add("unhide");
}

function flipCards(flip) {
    flip.classList.add("flip");
    
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = flip;
    } else {
        hasFlippedCard = false;
        secondCard = flip;
        checkForMatch();
        startCounter();
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function checkForMatch(){
    if (firstCard.innerHTML !== secondCard.innerHTML){ 
        setTimeout(removeFlip,1000);
    } 
}

function removeFlip(){
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
}

function startCounter(){
    counter++;
    finishGame();
}

function finishGame(){
    let allFlippedCards = document.querySelectorAll(".flip")
    if(allFlippedCards.length === numberOfCards){
        clearInterval(idInterval)
        const finalTime = time.innerHTML;
        setTimeout(alert(`Parabéns! Você ganhou o jogo em ${counter} jogadas e ${finalTime} segundos!`),500);
        numberOfList.innerHTML = "";
        time.innerHTML = 0;
        sectionDisplay.classList.remove("unhide");
        restartGame();
    }
}

function restartGame() {
    counter = 0;
    j=0;
    listCard = [];
    const restart = prompt("Você gostaria de reiniciar o jogo? (Responda apenas sim ou não)");
    if(restart === "sim"){
        numberOfCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
        remainder = numberOfCards % 2;
        idInterval = setInterval(incrementerTime,1000);
        askNumberOfCards()
        startGame()
    } else if (restart === "não") {
        alert("Obrigado!")
    }
}

function incrementerTime(){
    time.innerHTML ++;
}