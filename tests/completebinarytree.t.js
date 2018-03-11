var CBT = require("../utils/completebinarytree");
var Stack = require("../utils/stack");

describe('CBT', () => {
    it('CBT constructed correctly', () => {
        var cbt = new CBT([1,2,3,4,5,6,7,8]);
        
        var path = new Stack([cbt.root]);
        expect(cbt.getRightmostNode().value).toBe(8);
        expect(cbt.depth).toBe(4);
    });

    it('get path to node', () => {
        var cbt = new CBT([1,2,3,4,5,6,7,8,9,10]);

        var path = new Stack([cbt.root]);
        cbt.__getPathToNode(path, 10);
        expect(path.size()).toBe(4);
        expect(cbt.depth).toBe(4);
    })
});