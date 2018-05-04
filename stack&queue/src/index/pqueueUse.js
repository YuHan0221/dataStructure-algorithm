import ProrityQueue from '../component/priorityQueue';

let priorityQueue = new ProrityQueue();
priorityQueue.enqueue("小红", 4);
priorityQueue.enqueue("小黄", 1);
priorityQueue.enqueue("小兰", 3);
priorityQueue.enqueue('小绿', 5);
priorityQueue.print();
priorityQueue.dequeue();
console.log(priorityQueue.front());
console.log(priorityQueue.isEmpty());
console.log(priorityQueue.size());
priorityQueue.print();