let numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
let remainder = numCards % 2;
let listCard = [];

const parrot = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "metalparrot.gif"]

parrot.sort(comparador)

const numberOfList = document.querySelector(".game")

let i = 0;
let j = 0;

while (remainder !== 0 || numCards >14 || numCards <4){
    numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
    remainder = parseInt(numCards) % 2;
}

for(let i=0;i<numCards;i++){
    
    if (i%2 !== 0){
        listCard[i] = listCard[i-1]  
        j--
    } else {
        listCard.push(`<li class="card" onclick='flipCard(this)'\><img class="back-face" src="../Images/${parrot[j]}"><img class="front-face" src="../Images/front.png"></li>`);
    }
    j++
}

listCard.sort(comparador);

for(let k=0;k<numCards;k++){
    numberOfList.innerHTML += listCard[k]
}


function flipCard(flip) {
    flip.classList.toggle("flip")
}

function comparador() { 
	return Math.random() - 0.5; 
}