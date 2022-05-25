
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';
const player = {
    name: prompt('What\'s your name?'),
    chips: 200,
}
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const playerEl = document.getElementById('player-el');

playerEl.textContent = `${player.name}: ${player.chips}$`;


const getRandomCard = () => {
    let randomNumber = Math.floor(Math.random()*13) + 1; 
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

const startGame = () => {
    if(player.chips > 0) {
        isAlive = true;
        hasBlackjack = false;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame()
    }
}

const renderGame = () => {
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += `${cards[i]} `
    }
    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
        message ='Do you want to draw a new card?';
    } else if (sum === 21) {
        message ='Wohoo! You\'ve got Blackjack!';
        hasBlackjack = true;
    } else {
        message = 'You\'re out of the game!';
        isAlive = false;
        player.chips = player.chips - 20;   
        playerEl.textContent = `${player.name}: ${player.chips}$`; 
    }
    messageEl.textContent = message;
    
}

const newCard = () => {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        cards.push(card)
        sum += card;
        renderGame();
    }
}

