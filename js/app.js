console.log('sanity check');
// scoreboard 
let playerScore = 0;
let cpuScore = 0;
const playerScoreId = document.querySelector('#player-score');
const cpuScoreId = document.querySelector('#cpu-score');

// start screen display
const messageDisplay = document.querySelector('#message');
const winnerDisplay = document.querySelector('#winner');

// game characters
const thanos = document.querySelector('#thanos');
const hulk = document.querySelector('#hulk');
const captainAmerica = document.querySelector('#captain-america');


// 1. generate  a random number for each character
function choiceSelection() {
    const randomNum = Math.floor(Math.random() * 3 );
 
    if(randomNum === 0){
        messageDisplay.innerHTML = 'Computer selected Thanos!';
        return 'thanos';
    } else if (randomNum === 1) {
        messageDisplay.innerHTML = 'Computer selected Hulk!'
        return 'hulk';
    } else if (randomNum === 2) {
        messageDisplay.innerHTML = 'Computer selected Captain America!'
        return 'captain';
    }
}
 // change scores
function updateScoreBoard() {
    playerScoreId.innerHTML = playerScore;
    cpuScoreId.innerHTML = cpuScore;
}

// 2. winner is chosen by comparing player with computer
function playGame (selection) {
    const selection2 = choiceSelection();
    const match = selection + selection2;
    console.log(match);
    // if there is a tie 
    if(match === 'thanosthanos' || match === 'hulkhulk' || match === 'captaincaptain'){
        winnerDisplay.innerHTML = `It's a tie!`
    } else if (match === 'thanoscaptain' || match === 'hulkthanos' || match === 'captainhulk') {
        winnerDisplay.innerHTML = `Player won this round!`
        playerScore++;
    } else if (match === 'thanoshulk' || match === 'captainthanos' || 'hulkcaptain') {
        winnerDisplay.innerHTML = `Computer won this round!`
        cpuScore++;
    }
    updateScoreBoard();
}

// event listeners to click on characters
thanos.addEventListener('click', function() {
    console.log('User clicked Thanos');
    playGame('thanos');
})

hulk.addEventListener('click', function() {
    console.log('User clicked Hulk');
    playGame('hulk');
})

captainAmerica.addEventListener('click', function() {
    console.log('User clicked Captain America');
    playGame('captain');

})



