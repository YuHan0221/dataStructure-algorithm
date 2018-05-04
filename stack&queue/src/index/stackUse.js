import Stack from '../component/stack';

let stack = new Stack();
console.log(stack.isEmpty()); //outputs true
stack.push(5);
stack.push(8);
console.log(stack.peek()); // outputs 8
stack.push(11);
console.log(stack.size()); // outputs 3
console.log(stack.isEmpty()); //outputs false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // outputs 2
stack.print(); // outputs [5, 8]


//10进制转2进制
function divideBy2(decNumber) {
    const stacker = new Stack();
    let remainder;
    while (decNumber > 0) {
        remainder = decNumber % 2;
        decNumber = Math.floor(decNumber / 2);
        stacker.push(remainder);
    }
    let binaryStr = '';
    while (!stacker.isEmpty()) {
        binaryStr += stacker.pop();
    }
    return binaryStr;
}

console.log(divideBy2(13));
console.log(divideBy2(233));

//十进制转多进制
function baseConverter(decNumber, base) {
    const stacker = new Stack();
    let remainder;
    while (decNumber > 0) {
        remainder = decNumber % base;
        decNumber = Math.floor(decNumber / base);
        stacker.push(remainder);
    }
    let result = '';
    let digit = '0123456789ABCDEF';
    while(!stacker.isEmpty()) {
        result += digit[stacker.pop()];
    }
    return result;
}

console.log(baseConverter(13, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));

















