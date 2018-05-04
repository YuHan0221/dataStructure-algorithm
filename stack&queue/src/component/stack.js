/*
*   push(element) 添加一个新元素到栈顶
*   pop()   移除栈顶的元素，同时返回移除的元素
*   peek()  返回栈顶的元素，不对栈做任何修改
*   isEmpty()   如果栈内没有任何元素返回true，否则返回false
*   clear() 移除栈内所有元素
*   size()  返回栈里元素个数
*   print() 打印栈内元素
* */
class Stack{
    constructor(name) {
        this.item = [];
        this.name = name;
    }
    push(element) {
        this.item.push(element);
    }
    pop() {
        return this.item.pop();
    }
    peek() {
        return this.item[this.item.length - 1];
    }
    isEmpty() {
        return this.item.length === 0;
    }
    clear() {
        this.item = [];
    }
    size() {
        return this.item.length;
    }
    print() {
        console.log(this.item.toString());
    }
    toString() {
        return this.item.toString();
    }
}
export default Stack;