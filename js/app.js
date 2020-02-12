console.log('sanity check');
// scoreboard 
const playerScore = 0;
const cpuScore = 0;
const playerScoreId = document.querySelector('#player-score');
const cpuScoreId = document.querySelector('#cpu-score');

// start screen display
const messageDisplay = document.querySelector('#message');
const winnerDisplay = document.querySelector('#winner');

// game characters
const ironman = document.querySelector('#iron');
const cyclops = document.querySelector('#cyclops');
const captainAmerica = document.querySelector('#captain-america');
const hulk = document.querySelector('#hulk');
const thanos = document.querySelector('#thanos');

// generate  a random number for each character
function choiceSelection() {
    const randomNum = Math.floor(Math.random() * 5 );
 
    if(randomNum === 0){
        messageDisplay.innerHTML = 'Computer selected Iron Man'
        return 'ironman';
    } else if (randomNum === 1) {
        messageDisplay.innerHTML = 'Computer selected Cyclops'
        return 'cyclops';
    } else if (randomNum === 2) {
        messageDisplay.innerHTML = 'Computer selected Captain America';
        return 'captain america';
    } else if (randomNum === 3) {
        messageDisplay.innerHTML = 'Computer selected Hulk'
        return 'hulk';
    } else if (randomNum === 4) {
        messageDisplay.innerHTML  = 'Computer selected Thanos'
        return 'thanos';
    }
}

// event listeners to click on characters
ironman.addEventListener('click', function() {
    console.log('User clicked Iron man');
    choiceSelection();
})

cyclops.addEventListener('click', function() {
    console.log('User clicked Cyclops');
})

captainAmerica.addEventListener('click', function() {
    console.log('User clicked Captain America');
})

hulk.addEventListener('click', function() {
    console.log('User clicked Hulk');
})

thanos.addEventListener('click', function() {
    console.log('User clicked Thanos');
})


