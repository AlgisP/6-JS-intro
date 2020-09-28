// if, switch, ternary


// if
//naudotini: >, <, ===, >=, <=, !==

const num1 = 6;
const num2 = 16;


if (num1 > num2) {
    console.log(num1, "didesnis uz", num2);
} 
  else {

    if(num1 === num2) {
        console.log(num1, 'lygus', num2);
    }
  
else {
    console.log(num1, "mazesnis uz", num2);

 }
}

if (num1 > num2) {
    console.log('daugiau');
} else if (num1 === num2){
    console.log('lygu');
} else {  console.log('maziau');
}

// SWITCH

const diena ='spppooo';

switch (diena)  {

    case 'pirm':
        console.log('Dirbam1.');
        break;
    case 'ant':
        console.log('Dirbam2.');
    
    case 'pir':
    case 'ant':
    case 'tre':
    case 'ket':
    case 'pen':
        console.log('Dirbam.');
        break;

        case 'ses':
            case 'sek':
            console.log('ilsimes 😊');
            break;
    default:
        console.log('diena ne is musu kalendoriaus 👍');
        break;
}
// Autobusas 6G

const stotele = 'Lttt';

switch (stotele) {
    case 'Naujoji Vilnia':
        console.log('Naujoji Vilnia');
    case 'Geniu':
        console.log('Geniu');
    case 'Rudens':
        console.log('Rudens');
    case 'Kar. Mindaugo':
        console.log('Kar. Mindaugo');
    case 'Zaliasis tiltas':
        console.log('Zaliasis tiltas');
        break;
    case 'Lvovo':
        console.log('Lvovo');
    case 'Tuskulenai':
        console.log('Tuskulenai');
    case 'Vasaros':
        console.log('Vasaros');
    case 'Tremtiniu':
        console.log('Tremtiniu');
        break;
    default:
        console.log('Tokia stotele nerasta 😒');
        break;
}