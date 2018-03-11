var MinHeap = require("../utils/minheap");

describe('MinHeap', () => {
    it('min heap is constructed correctly', () => {
        var minHeap = new MinHeap([5,1,6,8,3]);
        expect(minHeap.extractMin()).toBe(1);
        expect(minHeap.extractMin()).toBe(3);
        expect(minHeap.extractMin()).toBe(5);
        expect(minHeap.extractMin()).toBe(6);
        minHeap.insert(2);
        expect(minHeap.extractMin()).toBe(2);
        expect(minHeap.extractMin()).toBe(8);
    });
});