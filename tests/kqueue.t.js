var KQueue = require("../utils/kqueue");

describe('KQueue', () => {

    it('KQueue construct k size', () => {
        var kqueue = new KQueue([1,2,3,4], 3);

        expect(kqueue.elements).toEqual([2,3,4]);
    });

    it('KQueue push', () => {
        var kqueue = new KQueue([1,2,3,4], 3);

        expect(kqueue.push(5)).toBe(2);
        expect(kqueue.elements).toEqual([3,4,5]);
    });

    it('KQeue pop', () => {
        var kqueue = new KQueue([1,2,3,4], 3);

        expect(kqueue.pop()).toBe(2);
        expect(kqueue.elements).toEqual([3,4]);
    })
});