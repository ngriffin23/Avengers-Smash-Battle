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
const captainAmerica = document.querySelector('#captain');

//reset button
const resetButton = document.querySelector('.restart-btn');


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
    if (cpuScore < 5 && playerScore < 5 ){
        if(match === 'thanosthanos' || match === 'hulkhulk' || match === 'captaincaptain'){
            winnerDisplay.innerHTML = `It's a tie!`;
        } else if (match === 'thanoscaptain' || match === 'hulkthanos' || match === 'captainhulk') {
            fistPunch(selection2);
            winnerDisplay.innerHTML = `Player won!`
            playerScore++;
        } else if (match === 'thanoshulk' || match === 'captainthanos' || match === 'hulkcaptain') {
            fistPunch(selection);
            winnerDisplay.innerHTML = `Computer won!`
            cpuScore++;
        }
    }

    updateScoreBoard();
    //when the game has 5 rounds
    if (playerScore == 5 || cpuScore == 5) {
        messageDisplay.innerHTML = '';
        winnerDisplay.innerHTML = `Game over! Final score is ${playerScore}-${cpuScore}`;
    }
}

function fistPunch(losingHero) {
    let distance;
    if (losingHero === 'thanos') {
        distance = "0px";
    } else if (losingHero === 'hulk') {
        distance = "300px";
    } else if (losingHero === 'captain') {
        distance = "600px";
    }

    document.querySelector(`#${losingHero}`).classList.add('shake');
    document.querySelector('#fist').style.left = distance;

    setTimeout(function() {
        document.querySelector(`#${losingHero}`).classList.remove('shake');
        document.querySelector('#fist').style.left = '-300px';
    }, 4000)
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

//reset button to reset game
resetButton.addEventListener('click', function(){
    console.log('reset game!');
    playerScore = 0;
    cpuScore = 0;
    playerScoreId.innerHTML = playerScore;
    cpuScoreId.innerHTML = cpuScore;
    winnerDisplay.innerHTML = '';
    messageDisplay.textContent = 'Computer is waiting for your move....'
})



