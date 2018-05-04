import Stack from '../component/stack';
/*

function hanoi(source, helper, target, n) {
    if (n > 0) {
        hanoi(source, target, helper, n-1);
        console.log(`move ${n} from ${source} to ${target}`);
        hanoi(helper, source, target, n-1);
    }
}
hanoi('A', 'B', 'C', 3);
*/

function hanoi(source, helper, target, n) {
    if (n > 0) {
        hanoi(source, target, helper, n-1);
        count++;
        console.log(`move ${n} from ${source.name}-----${source} to ${target.name}----${target}`);
        target.push(source.pop());
        hanoi(helper, source, target, n-1);
    }
}

const A = new Stack('A');
const B = new Stack('B');
const C = new Stack('C');
let count = 0;
for(let i = 3; i >=1; i--) {
    A.push(i);
}
hanoi(A, B, C, 3);
C.print();
console.log(count);