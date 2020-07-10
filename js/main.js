// Creation word list
const wordList = [
    'rasoir',
    'poisson',
    'jouet',
    'renard',
    'maison'
];

// Function Definition

<<<<<<< HEAD
// Generate a random number and choice a word
function generateComputerChoice(){
    let randomIndex = Math.floor(Math.random() * Math.floor(4));
    let computerChoice = wordList[randomIndex];
    return computerChoice;
}

// tranform a word into an array 
function transformChain(word){
    let table = word.split('');
    return table;    

}
// create a String of "_ " based on the length of the computerChoice
function chainTounderscore(word){
    let under = [];
    for (let i = 0; i < word.length; i ++){
        under[i] = "_";
    }
    return under;
}

function checkUserInput(letter){
    while(letter.length !== 1){
        letter = prompt("Veuillez rentrer une seule lettre");
    }
    return letter;
}


function isUnderLeft (underChain){
    let underCount = 0;
    for (const letter of underChain) {
        if (letter === "_"){
            underCount ++;
        }      
    }
    return underCount === 0 ?  false : true;
}


function main(){

    alert("Bonjour, vous allez jouer au jeu du pendu");
    let points = 7;
    let compteur = 0;
    let computerChoice = generateComputerChoice();
    const table = transformChain(computerChoice);
    console.log(computerChoice);
    let underChain = chainTounderscore(computerChoice);
    let userChoice;

    let gameNotOver = isUnderLeft(underChain);

    while(points > 0 && gameNotOver){
        userChoice = checkUserInput(prompt(`Le mot a trouver : ${underChain}\n il vous reste ${points} erreurs possible(s)\n Entrez une lettre : ` ));

        for (let i = 0; i < table.length; i ++){
            if (userChoice === table[i]){
                underChain[i] = userChoice;
                compteur ++;
            }
        }
        if(compteur < 1 ){
            points --;
            compteur = 0;
        }else{
            compteur = 0;
        }
        gameNotOver = isUnderLeft(underChain);

        
    }
    if(points === 0){
        alert(`Vous avez perdu, le mot était ${computerChoice}`);

    } else if(!gameNotOver){
        alert(`Bravo vous avez gagné!`);
    }
=======
function generateComputerChoice(){
    let randomIndex = Math.floor(Math.random() * Math.floor(5));
    let computerChoice = wordList[0];
    return computerChoice;
}


function main(){
    alert("Bonjour, vous allez jouer au jeu du pendu");
    let userChoice = prompt("Choisissez une lettre : ");

    console.log(userChoice);
>>>>>>> 4769aee088ddd6ead8828f9d48917785d24bfcf2

}

main();