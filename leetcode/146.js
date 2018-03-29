/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hashTable = {};
    this.tail = null;
    this.head = null;
    this.count = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    return this.hashTable[key] ? this.hashTable[key].val : -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var node;
    if (node = this.hashTable[key]) {
        if (node.key === this.head.key) {
            this.head = node.next;
        }
        if (node.key === this.tail.key) {
            node.val = value;
            return;
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = this.tail;
        node.next = null;
        node.val = value;
        this.tail = node;
    } else {
        node = new Node(key, value);
        if (this.count < this.capacity) {
            if (!this.tail) {
                this.tail = node;
                this.head = node;
            } else {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            }
            this.count ++;
        } else {
            this.hashTable[this.head.key] = null;
            this.head = this.head.next;
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.hashTable[this.tail.key] = this.tail;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Node {
    constructor(key, val) {
        this.val = val;
        this.key = key;
        this.next = this.prev = null;
    }
}

var obj = new LRUCache(2);
obj.put('a', 1);
obj.put('b', 2);
console.log(obj.get('a'));
console.log(obj.get('b'));
obj.put('c', 3);
console.log(obj.get('a'));