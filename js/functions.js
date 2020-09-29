function tusciaFunkcija() {

    return false;
}
console.log(tusciaFunkcija());

function daugyba(pirmas, antras) {
    return pirmas * antras;
}


console.log(`daugyba: ${daugyba(4, 5)}`);
console.log(`daugyba: ${daugyba(3, 5)}`);
console.log(`daugyba: ${daugyba(13, 55)}`);

const vardas3 = 'Algirdas';

function sayHi3(vardas) {
    return `Labas, as esu ${vardas}... Ka tu?`;

}

const name10 = 'Vardenis';
const name20 = 'Vardeniauskas';

// Labas, as esu Vardenis... Ka tu?
console.log(sayHi3(name10));

// Labas, as esu Vardeniauskas... Ka tu?
console.log(sayHi3(name20));

function sum(a, b, c) {

    const suma = a + b + c;
    return `Susumavus ${a}, ${b} ir ${c} gauname ${suma}.`;
}

// Susumavus 1, 2, ir 3 gauname 6.
// Susumavus 11, 22, ir 33 gauname 66.

console.log(sum(1, 2, 3));
console.log(sum(11, 22, 33));


function dienos(days) {
    return `Spausdinu ${days} dienas.`;
    }

console.log(dienos(45));


function mokesciai(money, tax) {
    return money * tax / 100;
 }

 console.log(mokesciai(1000, 21));
 console.log(mokesciai(500, 15));

 function autoAshys(ratuKiekis) {

    let asiuKiekis = 1;
    let darNepanaudotuRatuKiekis = ratuKiekis -2;
    if (darNepanaudotuRatuKiekis === 2) {
        asiuKiekis++;

    } else {
        asiuKiekis = asiuKiekis + darNepanaudotuRatuKiekis / 4;
    }
  return asiuKiekis;
 }

 function autoAshys(ratuKiekis) {
     if (ratuKiekis === 4) {
         return 2;

     } else {
         return (ratuKiekis - 2) / 4 + 1;
     }
 }
    
 console.log(autoAshys(4)); // 2   2+2
 console.log(autoAshys(10)); // 3    2+4+4
 console.log(autoAshys(14)); // 4   2+4+4+4
 console.log(autoAshys(18)); // 5   2+4+4+4+4


 const appSize = [4, 8, 7, 6, 1, 1, 9, 45, 7, 2];
 const phoneMemorySize = 70;

 const appSize2 = [1, 2, 4, 3, 2, 7, 9, 1, 1];
 const phoneMemorySize2 = 15;

 function kiekTilpsAppsu(memory, list) {
     let usedSpace = 0;
     let installedAppsCount = 0;
     const appCount = list.length;

     for (let i = 0; i < appCount; i++) {
         const appSize = list[i];
         usedSpace += appSize;
         if (usedSpace <= memory) {
             installedAppsCount++;

         }
     }

     return installedAppsCount;
 }

 const phoneAppCount = kiekTilpsAppsu(phoneMemorySize, appSize);
 const phoneAppCount2 = kiekTilpsAppsu(phoneMemorySize2, appSize2);

 console.log(phoneAppCount);     // 7
 console.log(phoneAppCount2);    // 5



// 2020-09-28 5. Funkcija pavadinimu "isrinktiRaides":


/*

const tekstas = 
const kelintaRaide = */

function isrinktiRaides(tekstas, kasKelintaRaide) {

    if (typeof tekstas === 'string') {
        if ((tekstas !== '') && (tekstas.length <= 100)) {
            if (typeof kasKelintaRaide === 'number') {
                if (kasKelintaRaide > 0) {
                    if (kasKelintaRaide <= tekstas.length) {
                        let rezultatas = ''; 
                        for (let i = kasKelintaRaide - 1; i < tekstas.length; i = i + kasKelintaRaide) {
                            
                            rezultatas = rezultatas + tekstas[i];                          
                        }
                        return rezultatas;
                    } else {
                       // console.log("Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi");
                        return "Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi";
                    }

                } else {
                    return "Antrasis kintamasis turi buti didesnis uz nuli";
                    // console.log("Antrasis kintamasis turi buti didesnis uz nuli");
                }


            } else {
                return "Antrasis kintamasis yra netinkamo tipo";
                // console.log("Antrasis kintamasis yra netinkamo tipo");
            }
        } else {
            return "Pirmojo kintamojo reiksme yra netinkamo dydzio";
            // console.log("Pirmojo kintamojo reiksme yra netinkamo dydzio");
        }
    } else {
        return "Pirmasis kintamasis yra netinkamo tipo";
            console.log("Pirmasis kintamasis yra netinkamo tipo");
    }

}



console.log(isrinktiRaides("abcdefg", 2));         //bdf
console.log( isrinktiRaides("abcdefghijkl", 3));    //cfil
console.log( isrinktiRaides("abc", 0));             //Antrasis kintamasis turi buti didesnis uz nuli
console.log( isrinktiRaides("abc", 4));             //Antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi
console.log( isrinktiRaides( 1561, 2));             //Pirmasis kintamasis yra netinkamo tipo
console.log( isrinktiRaides("", 1000));




function skaiciusKvadratu(skaicius) {
    return skaicius * skaicius;
}

console.log(skaiciusKvadratu(3));
console.log(skaiciusKvadratu(10));
