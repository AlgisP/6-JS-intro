const nuo5 = -0;
const iki5 = 11;
const daliklis5 = 3;


let count5 = 0;

// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.


for (let i = nuo5; i <= iki5; i++) {
    console.log(i, '%', daliklis5, '=', i % daliklis5);

    if (i % daliklis5 === 0) {
        count5++;
    }
}


console.log('Skaiciu intervale tarp ' + nuo5 + ' ir ' + iki5 + ', besidalijanciu be liekanos is ' + daliklis5 + ' yra ' + count5 +' vienetai');

console.log(`Skaiciu intervale tarp ${nuo5} ir ${iki5}, besidalijanciu be liekanos is ${daliklis5} yra ${count5} vienetai  `);

const name3 = 'Vardenis';
const lastName = "Pavardenis";

const city = `Miestas`;

// Vienguba (') kabute.
console.log("Vienguba (') kabute.");

// Dviguba (") kabute.
console.log('Dviguba (") kabute.');

// Vienguba (') ir dviguba (") kabutes.

const pradzia = "Vienguba (') ir ";
const pabaiga = 'dviguba (") kabutes.';

console.log(pradzia + pabaiga);

const links = ['Home', 'Services', 'Contact us'];


const HTML = `<header>

           < img src = "#" alt = "Logo" />
                <nav>
                    <a href="#">${links[0]}</a>
                    <a href="#">${links[1]}</a>
                    <a href="#">${links[2]}</a>
                    <a href="#">${2 + 2}</a>     
                </nav>
            </header>`;

console.log(HTML);
