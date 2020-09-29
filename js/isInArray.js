

function check(a, x) {
    for (let i10 = 0; i10 < a.length; i10++) {
        if (a[i10] === x) {
            
    console.log("true");
            return;
        }
    }

    console.log("false");
}

check([66, 101], 66);
check([80, 117, 115, 104, 45, 85, 112, 115], 45);
check(['t', 'e', 's', 't'], 'e');
check(['what', 'a', 'great', 'kata'], 'kat');