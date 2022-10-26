function computerPlay() {
    let val = Math.random()
    let computerRPS; 
    if (val < .33) {computerRPS = 'Rock'}
    else if (val < .67) {computerRPS = 'Paper'}
    else {computerRPS = 'Scissors'}
    return computerRPS; 
}
function gamePlay(player, computer){
    player = player.toLowerCase()
    computer = computer.toLowerCase()
    if (player == 'rock'){
        if (computer == 'scissors'){return 'You Win! Rock beats Scissors'}
        else if (computer == 'paper'){return 'You Lose! Paper beats Rock'}
        else if (computer == 'rock'){return 'Tie! You both played Rock'}
        else {return 'error!'}
    }
    else if (player == 'scissors'){
        if (computer == 'scissors'){return 'Tie! You both played Scissors'}
        else if (computer == 'paper'){return 'You Win! Scissors beats paper'}
        else if (computer == 'rock'){return 'You Lose! Rock beats Scissors'}
        else {return 'error!'}
    }
    else if (player == 'paper'){
        if (computer == 'scissors'){return 'You Lose! Scissors beats Paper'}
        else if (computer == 'paper'){return 'Tie! You both played Paper'}
        else if (computer == 'rock'){return 'You Win! Paper beats Rock'}
        else {return 'error!'}
    }
}



let buttons = document.querySelectorAll('button')
let wins = document.querySelector('.wins')
let loss = document.querySelector('.losses')
let tie = document.querySelector('.ties')
let body = document.querySelector('body')
let showResult = document.querySelector('.results p')



buttons.forEach(button => {
    button.addEventListener('click', makeGame)
})

function makeGame(event){
    let result = gamePlay(event.target.textContent, computerPlay())
    showResult.textContent = result
    if (result.includes('Win')){
        wins.textContent = Number(wins.textContent) + 1
    }
    else if (result.includes('Lose')) {
        loss.textContent = Number(loss.textContent) + 1
    }
    else if (result.includes('Tie')){
        tie.textContent = Number(tie.textContent) + 1
    }
    checkScore()
}

function checkScore(){
    if (wins.textContent == 5){
        showResult.textContent = "You won!!!"
        showResult.style.cssText = "font-size: 24px; font-weight: bold;"
        buttons.forEach(button => {
            button.removeEventListener('click', makeGame)
        })}
    else if (loss.textContent == 5){
        showResult.textContent = "You lost!!!"
        showResult.style.cssText = "font-size: 24px; font-weight: bold;"
        buttons.forEach(button => {
            button.removeEventListener('click', makeGame)
        })}
}