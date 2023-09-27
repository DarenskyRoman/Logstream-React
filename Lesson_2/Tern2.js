function manyChecks() {
  
    return (a > 10 ? 'a is bigger than 10 ' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case ' : '')) + (a === 15 ? 'but a is 15 ' : '') + (a > 5 ? 'and a is greater than 5 ' : 'and a is less than or equal to 5 ') + (a % 2 ? 'and a is odd' : 'and a is even');
}

function manyChecksIF(a) {
    let answer = '';
    
    if (a > 10) {
        answer += 'a is bigger than 10 ';
    }
    else {
        answer += 'a is less than or equal to 10 ';
        
        if (a === 5) {
            answer += 'an example of a special case ';
        }
    }
    
    if (a === 15) {
        answer += 'but a is 15 ';
    }
    
    if (a > 5) {
        answer += 'and a is greater than 5 ';
    }
    else {
        answer += 'and a is less than or equal to 5 ';
    }
    
    if (a % 2) {
        answer += 'and a is odd';
    }
    else {
        answer += 'and a is even';
    }
  
    return answer;
}

function manyChecksSwich(a) {
    let answer = '';
    
    switch (true) {
        case (a > 10):
            answer += 'a is bigger than 10 ';
            break;
        default:
            answer += 'a is less than or equal to 10 ';
            switch (a) {
                case (5):
                    answer += 'an example of a special case ';
            }
    }
    
    switch (a) {
        case (15):
            answer += 'but a is 15 ';
    }
    
    switch (true) {
        case (a > 5):
            answer += 'and a is greater than 5 ';
            break;
        default:
            answer += 'and a is less than or equal to 5 ';
    }
    
    switch (a % 2) {
        case (1):
            answer += 'and a is odd';
            break;
        default:
            answer += 'and a is even';
    }
    
    return answer;
}

let a = Math.floor(Math.random() * 20) + 1;
console.log('a = ', a);

console.log('manyChecks: ', manyChecks(a));
console.log('manyChecksIF: ', manyChecksIF(a));
console.log('manyChecksSwich: ', manyChecksSwich(a));