import Queue from '../component/queue';

function hotPotato(nameList, num) {
    let queue = new Queue();
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    let eliminated = '';
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        queue.print();
        eliminated = queue.dequeue();
        console.log(`${eliminated} 被淘汰`);
    }
    return queue.dequeue();
}

// 数到8的人淘汰
const winner = hotPotato(['小红', '小绿', '小黄', '小白', '小蓝'], 7);
console.log(`winner is ${winner}`);
