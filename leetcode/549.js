/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
    return longestConsecutiveRecursive(root).sequence;
};

function longestConsecutiveRecursive(root) {
    if (!root) {
        return createLengths(0, 0, 0);
    }
    var lengths = createLengths(1, 1, 1);
    var leftLengths, rightLengths;
    if (root.left) {
        leftLengths = longestConsecutiveRecursive(root.left);
        if (root.left.val === root.val + 1) {
            lengths.ascend = Math.max(leftLengths.ascend + 1, lengths.ascend);
        } else if (root.left.val === root.val - 1) {
            lengths.descend = Math.max(leftLengths.descend + 1, lengths.descend);
        }
        lengths.sequence = Math.max(leftLengths.sequence, lengths.sequence);
    }
    if (root.right) {
        rightLengths = longestConsecutiveRecursive(root.right);
        if (root.right.val === root.val + 1) {
            lengths.ascend = Math.max(rightLengths.ascend + 1, lengths.ascend);
        } else if (root.right.val === root.val - 1) {
            lengths.descend = Math.max(rightLengths.descend + 1, lengths.descend);
        }
        lengths.sequence = Math.max(rightLengths.sequence, lengths.sequence);
    }
    if (root.left && root.right) {
        if (root.left.val === root.val + 1 && root.val === root.right.val + 1) {
            lengths.sequence = Math.max(leftLengths.ascend + 1 + rightLengths.descend, lengths.sequence);
        } else if (root.left.val === root.val - 1 && root.val === root.right.val - 1) {
            lengths.sequence = Math.max(leftLengths.descend + 1 + rightLengths.ascend, lengths.sequence);
        }
    }
    lengths.sequence = Math.max(lengths.ascend, lengths.descend, lengths.sequence);
    return lengths;
}

function createLengths(ascending, descending, sequence) {
    return {
        ascend: ascending,
        descend: descending,
        sequence: sequence
    };
}

var root = {
    val: 2,
    left: {
        val: 1
    },
    right: {
        val: 3
    }
};
console.log(longestConsecutive(root));