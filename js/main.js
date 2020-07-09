// Creation word list
const wordList = [
    'rasoir',
    'poisson',
    'jouet',
    'renard',
    'maison'
];

// Function Definition

// Generate a random number and choice a word
function generateComputerChoice(){
    let randomIndex = Math.floor(Math.random() * Math.floor(4));
    let computerChoice = wordList[randomIndex];
    return computerChoice;
}

// tranform a word into an array 
function transformChain(word){
    let chain = word.split('');
    return chain;    

}
// create a String of "_ " based on the length of the computerChoice
function chainTounderscore(word){
    let under = "";
    for (let i = 0; i < word.length; i ++){
        under += "_ ";
    }
    return under;
}

function checkUserInput(letter){
    while(letter.length !== 1){
        letter = prompt("Veuillez rentrer une seule lettre");
    }
    return letter;
}

function isInChain(computerChoice, userChoice){
    let chainArray = transformChain(computerChoice);
    for (let i = 0; i < chainArray.length; i ++){
        if (chainArray[i] !== userChoice){
            chainArray[i] = "_ ";
        }
    }
    console.log(chainArray);
    return chainArray;
}

function main(){

    alert("Bonjour, vous allez jouer au jeu du pendu");

    let computerChoice = generateComputerChoice();
    let chain = transformChain(computerChoice);
    console.log(computerChoice);
    let underChain = chainTounderscore(computerChoice);
    let userChoice = checkUserInput(prompt("Le mot a trouver : "+underChain +"\nChoisissez une lettre : "));
    underChain = isInChain(computerChoice, userChoice);
    console.log(userChoice);

}

main();