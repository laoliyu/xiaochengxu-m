// 既不是字符串也不是数字，而是采用线性数据结构
function ListNode(val) {
    // 将数字的每一位变成linknod的实例
    this.val = val;
    // 指针
    this.next = null;
}
let number = 123456789;
let n1 = new ListNode(1);
let node = n1;
// console.log(n1);
while (node) {
    console.log(node.val);
    node = node.next;
}

// 遍历链表 travel一下
