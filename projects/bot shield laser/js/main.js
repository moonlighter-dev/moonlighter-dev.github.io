

document.querySelector("#bot").addEventListener("click", playAsBot)
document.querySelector("#shield").addEventListener("click", playAsShield)
document.querySelector("#laser").addEventListener("click", playAsLaser)

const botBeatsLaser = document.querySelector("#botBeatsLaser")
const laserBeatsShield = document.querySelector("#laserBeatsShield")
const shieldBeatsBot = document.querySelector("#shieldBeatsBot")
const seriouslyKyle = document.querySelector("#tie")
const winner = "You win!"
const loser = "You lose!"
const tie = "Seriously, Kyle?! Try again!"
const youScoreDisplay = document.querySelector("#userScore")
const aiScoreDisplay = document.querySelector("#aiScore")
let aiMove = ""
let results = document.querySelector("#results")
let youScore = 0
let aiScore = 0

function showScore() {
     document.querySelector("#instructions").classList.add("hidden")
     document.querySelector(".scoreboard").classList.remove("hidden")
     document.querySelector(".textResult").classList.remove("hidden")
     youScoreDisplay.textContent = youScore
     aiScoreDisplay.textContent = aiScore
}

function aiDecide() {
     let aiStrategy = Math.floor(Math.random() * 10);
     if (aiStrategy > 3 && aiStrategy < 7){
          aiMove = "Shield";
     }
     else if (aiStrategy >= 7) {
          aiMove = "Laser";
     }
     else {
          aiMove = "Bot";
     }
}

function playAsBot() {
     
     let humanMove = "Bot";
     aiDecide();
     if (aiMove === "Shield"){
          shieldWins()
          results.textContent = `${aiMove} beats ${humanMove}! ${loser}`
          aiScore++
     }
     else if (aiMove === "Laser") {
          botWins()
          results.textContent = `${humanMove} beats ${aiMove}! ${winner}`
          youScore++
     }
     else {
          noWin()
          results.textContent = tie
     }
     showScore();
}

function playAsShield() {
     
     let humanMove = "Shield";
     aiDecide();
     if (aiMove === "Shield"){
          noWin()
          results.textContent = tie
     }
     else if (aiMove === "Laser") {
          laserWins()
          results.textContent = `${aiMove} beats ${humanMove}! ${loser}`
          aiScore++
     }
     else {
          shieldWins()
          results.textContent = `${humanMove} beats ${aiMove}! ${winner}`
          youScore++
     }
     showScore();
}

function playAsLaser() {
     
     let humanMove = "Laser";
     aiDecide();
     if (aiMove === "Shield"){
          laserWins()
          results.textContent = `${humanMove} beats ${aiMove}! ${winner}`
          youScore++
     }
     else if (aiMove === "Laser") {
          noWin()
          results.textContent = tie
     }
     else {
          botWins()
          results.textContent = `${aiMove} beats ${humanMove}! ${loser}`
          aiScore++
     }
     showScore();
}



function shieldWins(){
     botBeatsLaser.classList.add("hidden")
     laserBeatsShield.classList.add("hidden")
     shieldBeatsBot.classList.remove("hidden")
     seriouslyKyle.classList.add("hidden")
}

function laserWins(){
     botBeatsLaser.classList.add("hidden")
     laserBeatsShield.classList.remove("hidden")
     shieldBeatsBot.classList.add("hidden")
     seriouslyKyle.classList.add("hidden")
}

function botWins(){
     botBeatsLaser.classList.remove("hidden")
     laserBeatsShield.classList.add("hidden")
     shieldBeatsBot.classList.add("hidden")
     seriouslyKyle.classList.add("hidden")
}

function noWin() {
     botBeatsLaser.classList.add("hidden")
     laserBeatsShield.classList.add("hidden")
     shieldBeatsBot.classList.add("hidden")
     seriouslyKyle.classList.remove("hidden")
}