function power(skaicius, laipsnis) {
    let rezultatas = 1;
    for (let i22 = 0; i22 < laipsnis; i22++) {
       rezultatas = rezultatas * skaicius;
       //rezultatas *= skaicius;
    }

    return rezultatas;
}

console.log(power(5, 2));
console.log(power(10, 3));

