
// From "Rock", "Paper" and "Scissors" returns at random one of them to get the computer choice.
function getComputerChoice(){
    choices = ["Rock", "Paper","Scissors"];
    randomChoicesIndex = Math.floor(Math.random() * choices.length);
    randomChoice = choices[randomIndex]
    return randomChoice;
}