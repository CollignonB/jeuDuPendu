// Creation word list
const wordList = [
    'rasoir',
    'poisson',
    'jouet',
    'renard',
    'maison'
];

// Function Definition

function generateComputerChoice(){
    let randomIndex = Math.floor(Math.random() * Math.floor(4));
    let computerChoice = wordList[randomIndex];
    return computerChoice;
}

function transformChain(word){
    let chain = word.split('');
    return chain;    

}
function main(){

    alert("Bonjour, vous allez jouer au jeu du pendu");

    let computerChoice = generateComputerChoice();
    let chain = transformChain(computerChoice);

    let userChoice = prompt("Choisissez une lettre : ");

}

main();