/*
*   enqueue(element) 向队列尾部添加一个新元素
*   dequeue() 移除队列的第一(即排在队列最前面的)项，并返回被移除的元素
*   front() 返回队列中的第一个元素，最先被添加，也将是最先被移除的元素。队列不做任何变动（和stack的peek方法类似）
*   isEmpty() 如果队列不包含任何元素，返回true，否则返回false
*   size() 返回队列包含的元素个数
*   print() 打印队列内元素
* */
class Queue {
    constructor() {
        this.item = [];
    }

    enqueue(element) {
        this.item.push(element);
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
        console.log(this.item.toString());
    }
}
export default Queue;
