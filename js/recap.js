console.log('oooppp');

// kintamieji: numbers, string, array, boolean
// salygos: if, switch


// const / let / var


const age = 99;
const name = 'Vardenis';
const luckyNumbers = [3, 5, 7,13];
const cities = ['Vilnius', 'Klaipeda', 'Riga'];

let agreedWithCookies = false;
if (agreedWithCookies === false) {
    console.log('Ar sutinki su sausainiais? Y/N');
}

const eyeColor = 'ttt';

if (eyeColor === 'melynos'){
    console.log('uj, koks geras katinelis!');
} else if (eyeColor === 'zalios') {
    console.log('Bais protingas.');
} else if (eyeColor === 'rudos') {
    console.log('Melagis');
} else if(eyeColor === 'pilkos') {
    console.log('Karocia...');
} else {
    console.log('A tu turi akis?');
}
    
const eyeColor1 = 'melynos';
let eyeSentenceEnd = '';

switch (eyeColor1) {

    case 'melynos':
        eyeSentenceEnd = 'Uj, koks geras katinelis!';
        break;
    case 'zalios':
        console.log('Bais protingas.');
        break;
    case 'rudos':
        console.log('Melagis 😜');
        break;
    case 'pilkos':
        console.log('Karocia...');
        break;
    default:
        console.log('A tu turi akis');
        break;

        




}

console.log('Kadangi tavo akiu spalva yra ', eyeColor1, 'tai ',eyeSentenceEnd);


// ternary operatorius

const favoriteAnimal = 'rand';

const sentence = 'My favorite animal is: ' + (favoriteAnimal === 'doggo' ? 'dog' : 'cat');

// jeigu ? taip : ne
// if salyga ? jei tenkina : jei netenkina

console.log(sentence); 

