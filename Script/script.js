const numCards = prompt("Com quantas cartas deseja jogar?");
let remainder = parseInt(numCards) % 2;


while (remainder !== 0) {
    const numCards = prompt("Com quantas cartas deseja jogar?");
    remainder = parseInt(numCards) % 2;
}
