const grid = document.querySelector('#grid');

let cardChosen = [];
const cardChosenIds = [];
const cardsWon = [];

const cardArray = [
    {name: 'cheeseburger', img: '../img/cheeseburger.png'},
    {name: 'fries', img: '../img/fries.png'},
    {name: 'hotdog', img: '../img/hotdog.png'},
    {name: 'ice-cream', img: '../img/ice-cream.png'},
    {name: 'milkshake', img: '../img/milkshake.png'},
    {name: 'pizza', img: '../img/pizza.png'},
    {name: 'cheeseburger', img: '../img/cheeseburger.png'},
    {name: 'fries', img: '../img/fries.png'},
    {name: 'hotdog', img: '../img/hotdog.png'},
    {name: 'ice-cream', img: '../img/ice-cream.png'},
    {name: 'milkshake', img: '../img/milkshake.png'},
    {name: 'pizza', img: '../img/pizza.png'}
        
]
cardArray.sort(() => 0.5 - Math.random());

const createGrid = () => {
    cardArray.forEach( (card, index) => {

        let src = `src="../img/blank.png"`
        const cardImg = `<img ${src} class="img-fluid" id=${index}>`;
        grid.innerHTML += cardImg;
    })
}
createGrid();

const checkMatch = () => {
    console.log('match')
    const cards = grid.querySelectorAll('img')
    if (cardChosen[0] == cardChosen[1]) {
        alert('You found a match')
        cards[cardChosenIds[0]].setAttribute('src', '../img/white.png');
        cards[cardChosenIds[1]].setAttribute('src', cardArray[cardId].img);
        cards[cardChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);   
    }
}

const flipCard = () => {
    grid.addEventListener ('click', flipCard=> {
        if (flipCard.target.className === 'img-fluid') {
            let cardId = flipCard.target.id;
            cardChosen.push(cardArray[cardId].name);
            cardChosenIds.push(cardId);
            console.log(cardChosen);
            console.log(cardChosenIds);
            flipCard.target.setAttribute('src', cardArray[cardId].img);
            if (cardChosen.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    })
}
flipCard();