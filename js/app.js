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


// event listeners to select characters
ironman.addEventListener('click', function () {
    console.log('User clicked Iron man')
})
cyclops.addEventListener('click', function () {
    console.log('User clicked Cyclops')
})
captainAmerica.addEventListener('click', function () {
    console.log('User clicked Captain America')
})
hulk.addEventListener('click', function () {
    console.log('User clicked Hulk')
})
thanos.addEventListener('click', function () {
    console.log('User clicked Thanos')
})


