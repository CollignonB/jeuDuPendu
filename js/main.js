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
    let randomIndex = Math.floor(Math.random() * Math.floor(5));
    let computerChoice = wordList[0];
    return computerChoice;
}


function main(){
    alert("Bonjour, vous allez jouer au jeu du pendu");
    let userChoice = prompt("Choisissez une lettre : ");

    console.log(userChoice);

}

main();