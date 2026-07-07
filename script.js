let wins = 0;
let losses = 0;
let draws = 0;
function playGame(player){
    const choices = ['⚛️', '🕳️', '🌀'];
    const bot = choices[Math.floor(Math.random()*3)];
    document.getElementById('Player').textContent = player;
    document.getElementById('Computer').textContent = bot;
const outcomes = {
    '⚛️⚛️' : "EQUILIBRIUM! Cosmic forces perfectly balanced.",
    '🕳️🕳️' : "EQUILIBRIUM! Cosmic forces perfectly balanced.",
    '🌀🌀' : "EQUILIBRIUM! Cosmic forces perfectly balanced.",
    '🕳️⚛️': "EVENT HORIZON! Your Black Hole swallows their Dark Matter Core!",
    '⚛️🕳️': "CRUSHED! Enemy Black Hole consumes your Dark Matter Core.",
    '🌀🕳️': "SPACE RIFT! Your Wormhole rips apart their Black Hole!",
    '🕳️🌀': "TRAPPED! Enemy Black Hole collapses your Wormhole.",
    '⚛️🌀': "QUANTUM CRUSH! Your Dark Matter Core shatters their Wormhole!",
    '🌀⚛️': "DISINTEGRATED! Enemy Wormhole tears your Dark Matter Core apart."
    }
    document.getElementById('battle-log').textContent = outcomes[player+bot];
    const win = ['⚛️🌀', '🕳️⚛️', '🌀🕳️'].includes(player + bot);
    if (player===bot){
        draws++; document.querySelector('.draws').textContent = draws;}
        else if (['⚛️🌀', '🕳️⚛️', '🌀🕳️'].includes(player+bot)){
        wins++; document.querySelector('.wins').textContent = wins;}
        else{
        losses++;document.querySelector('.losses').textContent = losses;}
}
