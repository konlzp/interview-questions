/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root || isSubTreeBST(root)) {
        return true;
    }
    return false;
};

function isSubTreeBST(root) {
    var minMax = [root.val, root.val];
    if (!root.right && !root.left) {
        return minMax;
    }

    if (root.left) {
        var leftMinMax = isSubTreeBST(root.left);
        if (!leftMinMax || leftMinMax[1] >= root.val) {
            return false;
        }
        minMax[0] = leftMinMax[0];
    }
    if (root.right) {
        var rightMinMax = isSubTreeBST(root.right);
        if (!rightMinMax || rightMinMax[0] <= root.val) {
            return false;
        }
        minMax[1] = rightMinMax[1];
    }

    return minMax;
}