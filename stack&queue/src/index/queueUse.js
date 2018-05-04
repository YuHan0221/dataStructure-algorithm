import Queue from '../component/queue';

const queuer = new Queue();
queuer.enqueue('小红');
queuer.enqueue('小兰');
queuer.enqueue('小绿');
queuer.dequeue();
console.log(queuer.front());
console.log(queuer.size());
console.log(queuer.isEmpty());
queuer.print();