
//const weekdays = ["pirmadienis", "antradienis", "treciadienis", "ketvirtadienis","penktadienis","sestadienis", "sekmadienis"];
//const weeklength = weekdays.length;


//for (let  i = 0; i < weeklength; i++) {
  //  console.log(weekdays[i]);
//}

const sayHi = 'Labas 😊';
const count = 10;

for (let i = 0; i < count; ++i) {

console.log(i, ': ',sayHi);
}


console.log('Labas 😊');

const seasons = ['Pavasaris', 'Vasara', 'Ruduo', 'Ziema'];
const seasonsCount = seasons.length;

console.log(seasons);

for(let i=0; i<seasonsCount; i++) {
    console.log(seasons[i]);
    
}

// savaites dienos

//console.clear(); isvalo konsole

const week = ['pirmadienis', 
    'antradienis', 
    'treciadienis', 
    'ketvirtadienis', 
    'penktadienis', 
    'sestadienis', 
    'sekmadienis'
];




for (let index1 = 0; index1 < week.length; index1++) {

    const weekday = week[index1];
    const dayNumber = index1 + 1;
    const dayType = index1 < 5 ? 'darbo diena.' : 'savaitgalis.';

    const msg = weekday + ' (' + dayNumber  +') yra ' + dayType;
    console.log(msg);
    
}

// 7-11

const nuo = 7;
const iki = 11;


const diff = iki - nuo;

//for (let index2 = 0; index2 <= diff; index2++) {
  //  console.log(index2 + nuo);
    
//}

//let suma3 = 0;

for (let number = nuo; number <= iki; number++) {
    console.log(number);
}

const nuo1 = 5;
const iki1 = 10;

let suma2 = 0;

for (let i1 = nuo1; i1 <= iki1; i1++){
    suma2 = suma2 + i1;
    console.log(i1, suma2);
}

console.log('Galutine suma: ', suma2);



const text4 = 'Labas! ';
let atbulas = '';

//for (let i4 = 0; i4<text4.length; i4++) {
   // console.log(text4[i4]);
  // atbulas = text4[i4] + atbulas;
    //console.log(i4, atbulas);
//}


console.log(text4, '->', atbulas);

for (let i5=0; i5<text4.length; i5++) {
    const raide = text4[text4.length - 1 - i5];
    atbulas = atbulas + raide;
    console.log(i5, atbulas);
}

console.log(text4, '->', atbulas);

