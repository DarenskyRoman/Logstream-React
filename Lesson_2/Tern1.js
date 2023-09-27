function normIF(a){
    let b;

    if (a > 10) {
        b = a;
    }
    else {
        b = a * 2;
    }
    
    if (b > 5) {
        b = 2 * a + 1;    
    }
    else {

        if (a < 3) {
            b = 1;
        }
        else {
            b = 2 * (a - 2);
        }
        
        if (b > 4) {
            b = 5;    
        }
        else {

            if (a % 2 == 0) {
                b = 6;
            }
            else {
                b = 7;
            }

        }

    }

    return b;
}

function normSwich(a){
    let b;
    
    switch (true) {
        case (a > 10):
            b = a;
            break;
        default:
            b = a * 2;
    }
    
    switch (true) {

        case (b > 5):
            b = 2 * a + 1;
            break;
        default:
            switch (true) {
                case (a < 3):
                    b = 1;
                    break;
                default:
                    b = 2 * (a - 2);
            }
            
            switch (true) {
                case (b > 4):
                    b = 5;
                    break;
                
                case ((a % 2) === 0):
                    b = 6;
                    break;
                default:
                    b = 7;
            }

    }

    return b;
}

let a = Math.floor(Math.random() * 100);
console.log("a: ", a);

let erunda = (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
console.log("erunda: ", erunda);

console.log("normIF: ", normIF(a));
console.log("normSwich: ", normSwich(a));