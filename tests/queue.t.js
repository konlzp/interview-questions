var Queue = require("../utils/queue");

describe("queue", function() {
    /**
     * @type {Queue}
     */
    var queue;
    beforeEach(function() {
        queue = new Queue([1,2,3]);
    })

    it('queue size', () => {
        expect(queue.size()).toEqual(3);
    });

    it('queue push', () => {
        queue.push(4);

        expect(queue.elements).toEqual([1,2,3,4]);
    });

    it('queue pop', () => {
        expect(queue.pop()).toBe(1);
        expect(queue.elements).toEqual([2,3]);
    });

    it('queue first', () => {
        expect(queue.first()).toBe(1);
    });

    it('queue last', () => {
        expect(queue.last()).toBe(3);
    });
})