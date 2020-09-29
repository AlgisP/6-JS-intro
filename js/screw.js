/* Medvarztis:
ilgi: 15mm
zingznis: 1.5mm
rankos pasukimas: 140deg
kiek reikia pasukimu pilnai susukti medvarzti?
*/


function medvarztis(ilgis, zingsnis, rankosPasukimas) {
   
    const zingsniuSkaiciusVarzte = ilgis / zingsnis;
    const pasukimaiZingsniui = 360 / 140;
    const pasukimuSkaicius = zingsniuSkaiciusVarzte * pasukimaiZingsniui;
   return pasukimuSkaicius;   
    
}

console.log('Kiek reikia pasukimu pilnai susukti medvarzti:');

console.log(medvarztis(15, 1.5, 140));

let pasukimai = medvarztis(15, 1.5, 280);

console.log(`Kad isukti medvarzti reikia ${pasukimai} pasukimu`);
console.log(`Kad isukti medvarzti reikia pasukti ranka ne daugiau ${Math.ceil(pasukimai)} pasukimu`);
console.log(`Kad isukti medvarzti reikia pasukti ranka ne maziau ${Math.floor(pasukimai)} pasukimu`);
console.log(`Kad isukti medvarzti reikia pasukti ranka suapvalintai ${Math.round(pasukimai)} pasukimu`);