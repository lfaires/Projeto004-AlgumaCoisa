let numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
let remainder = numCards % 2;

while (remainder%2 !== 0 || numCards >14 || numCards <4){
    numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
    remainder = parseInt(numCards) % 2;
}