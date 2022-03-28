// global constants

const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const patternLength = 6;

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var strikes = 0;


function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  createPattern()
  strikes = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("strikeTitle").classList.remove("hidden");
  playClueSequence()
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("strikeTitle").classList.add("hidden");
  document.getElementById("strike1").classList.add("hidden");
  document.getElementById("strike2").classList.add("hidden");
}

function createPattern() {
  pattern = [];
  for (let i = 0; i < patternLength; i++){
    let num = Math.floor(Math.random() * 4 + 1);
    pattern.push(num);
  }
  console.log(pattern);
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)



function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime = clueHoldTime * 0.8;
  cluePauseTime = cluePauseTime * 0.8;
  //context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(btn != pattern[guessCounter]){
    if (strikes < 2){
      strikes += 1;
      updateStrikeCounter();
      playClueSequence();
    }
    else{
      strikes += 1;
      updateStrikeCounter();
      loseGame()
    }
  }
  else if(guessCounter != progress){
    guessCounter += 1;
  }
  else if(progress + 1 != pattern.length){
    progress += 1;
    playClueSequence();
  }
  else {
    winGame();
  }
}


function updateStrikeCounter() {
  if (strikes == 1){
    document.getElementById("strike1").classList.remove("hidden");
  }
  else if (strikes == 2){
    document.getElementById("strike2").classList.remove("hidden");
  }
}
