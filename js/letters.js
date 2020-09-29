function letters(text, step) {
    let errors = [];

    // validacija
if (typeof text !== 'string') {
    errors.push('ERROR: pirmas kintamasis turi buti tekstas.');
}
if (typeof step !== 'number') {
    errors.push('ERROR: antras kintamasis turi buti skaicius.');
}

if (errors.length > 0) {
    return errors;
}

// logika
 const textSize = text.length;
 for (let i = 1; i <= textSize; i++) {
     const letter = text[i - 1];

    if (i % step === 0) {
        ats += letter;
    }

 }

return ats;

}

console.log(letters(1234, 'abc'));
console.log (letters('abcdefghijklmn', 3));