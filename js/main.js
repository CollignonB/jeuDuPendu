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
    let table = word.split('');
    console.log(" taille de la chaine "+table.length);
    console.log(`${word} devient ${table}`);
    return table;    

}
// create a String of "_ " based on the length of the computerChoice
function chainTounderscore(word){
    let under = [];
    for (let i = 0; i < word.length; i ++){
        under[i] = "_";
    }
    console.log(under);
    return under;
}

function checkUserInput(letter){
    while(letter.length !== 1){
        letter = prompt("Veuillez rentrer une seule lettre");
    }
    return letter;
}

function isInChain(table, userChoice){
    let result = table;
    console.log(table);
    console.log("avant la boucle");
    for (let i = 0; i < result.length; i ++){
        if (result[i] === "_" && result[i] !== userChoice){
            result[i] = userChoice;
        }
    }
    console.log("bite");
    console.log(table);
    return result.join('');
}

function isUnderLeft (underChain){
    let underCount = 0;
    for (const letter of underChain) {
        if (letter === "_"){
            underCount ++;
            console.log(underCount);
        }      
    }
    return underCount === 0 ? true : false;
}


function main(){

    alert("Bonjour, vous allez jouer au jeu du pendu");

    let computerChoice = generateComputerChoice();
    const table = transformChain(computerChoice);
    console.log(table);
    let underChain = chainTounderscore(computerChoice);
    let userChoice;
    // isUnderLeft(underChain);
    while(underChain !== computerChoice){
        userChoice = checkUserInput(prompt("Le mot a trouver : "+underChain +"\nChoisissez une lettre : "));
        //console.log(`user input = ${userChoice}`);
        underChain = isInChain(table, userChoice);
        console.log(underChain);
        console.log("c'est table : " + table);
    }

}

main();