/*
*   enqueue(element, priority) 根据优先级向队列添加一个新元素
*   dequeue() 移除队列的第一项，并返回被移除的元素
*   front() 返回队列的第一个元素，最先被添加，最先被移除
*   isEmpty() 如果队列不包含任何元素返回true，否则返回false
*   size()  返回队列包含的元素个数
*   print() 打印队列元素
* */

//用于保存元素和元素的优先级
class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class ProrityQueue {
    constructor() {
        this.item = [];
    }

    enqueue(element, priority) {
        let queue = new QueueElement(element, priority);
        let flag = false;
        for (let i = 0; i < this.item.length; i++) {
            if (queue.priority < this.item[i].priority) {
                this.item.splice(i, 0, queue);
                flag = true;
                break;
            }
        }
        if (!flag) {
            this.item.push(queue);
        }
    }

    dequeue() {
        return this.item.shift();
    }

    front() {
        return this.item[0];
    }

    isEmpty() {
        return this.item.length === 0;
    }

    size() {
        return this.item.length;
    }

    print() {
        for (let i = 0; i < this.item.length; i++) {
            console.log(`${this.item[i].element}  - ${this.item[i].priority}`);
        }
    }
}

export default ProrityQueue;