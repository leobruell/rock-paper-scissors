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



buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', function makeGame(){
        let result = gamePlay(button.textContent, computerPlay())
    
        let wins = document.querySelector('.wins')
        let loss = document.querySelector('.losses')
        let tie = document.querySelector('.ties')
        let body = document.querySelector('body')

        if (result.includes('Win')){
            wins.textContent = Number(wins.textContent) + 1
        }
        else if (result.includes('Lose')) {
            loss.textContent = Number(loss.textContent) + 1
        }
        else if (result.includes('Tie')){
            tie.textContent = Number(tie.textContent) + 1
        }

        let showResult = document.createElement('p')
        showResult.textContent = result
        if (wins.textContent == 5){
            showResult.textContent = "You won!!!"
            showResult.style.cssText = "font-size: 24px; font-weight: bold;"
            myResults.appendChild(showResult)
            button.removeEventListener('click', makeGame)
            querySelector('.rock').removeEventListener('click', makeGame)
            querySelector('.paper').removeEventListener('click', makeGame)

        }
        else if (loss.textContent == 5){
            showResult.textContent = "You lost!!!"
            showResult.style.cssText = "font-size: 24px; font-weight: bold;"
            myResults.appendChild(showResult)
            for (let button in buttons){
                button.removeEventListener('click', makeGame)
            }        
        }

        myResults = document.querySelector('.results')
        if (myResults.childElementCount != 0){
            myResults.removeChild(myResults.firstElementChild)
        }
        myResults.appendChild(showResult)
    })    
});




