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

function gameInterface (){

    let interfaceChoice = prompt("Choisissez : \nj : jouer\nr : voir les règles\nq : quitter");

    while(interfaceChoice){
        if(interfaceChoice === 'j'){
            main();
        }else if (interfaceChoice === 'r'){
            alert("Voici les règles :");
            gameInterface();
        }else if (interfaceChoice === 'q'){
            alert("Au revoir ");
            exit();
        }else{
            interfaceChoice = prompt("Choisissez : \nj : jouer\nr : voir les règles\nq : quitter");
        }
    }
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
        gameInterface();

    } else if(!gameNotOver){
        alert(`Bravo vous avez gagné!`);
        gameInterface();
    }

}
gameInterface();