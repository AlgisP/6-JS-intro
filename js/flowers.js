/* Turim geliu soda
viso turim vazonu: 20
pradinis vazonu kiekis
geliu dauginimo greitis: (kasmet po 1 vaika)

per kiek metu pasidengs visa teritorija gelemis?
*/




function geles(visoTurimVazonu, pradinisVazonuKiekis, geliuDauginimoGreitis) {
    let vazonaiGelems = pradinisVazonuKiekis;
    let metai = 1;

    while(vazonaiGelems < visoTurimVazonu) {
        vazonaiGelems = vazonaiGelems + vazonaiGelems * geliuDauginimoGreitis;
        metai++;

        console.log(vazonaiGelems);


    }

    
    
    
    return metai;
}

console.log(`Kad visa teritorija pasidengtu gelemis reikia ${geles(20, 1, 1)} metu.`)

console.log(geles(20, 1, 1));   //6