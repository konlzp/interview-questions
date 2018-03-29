/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) {
        return "";
    }
    var serialized = [];
    var queue = [root];
    while (queue.length > 0) {
        var node = queue.shift();
        if (!node) {
            serialized.push("null");
            continue;
        }

        serialized.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
    }

    var validLength = serialized.length - 1;
    for (; validLength >= 0; --validLength) {
        if (serialized[validLength] !== "null") {
            break;
        }
    }
    return serialized.slice(0, validLength + 1).join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === "") {
        return null;
    }
    var root = null;
    var queue = [];
    data = data.split(",");
    for (var i = 0; i < data.length; ++i) {
        var node = data[i] === "null" ? null : { val: parseInt(data[i]) };
        if (queue.length) {
            var parentNode = queue[0];
            if (typeof parentNode.left === "undefined") {
                parentNode.left = node;
            } else {
                parentNode.right = node;
                queue.shift();
            }
        } else {
            root = node;
        }
        if (node) {
            queue.push(node);
        }
    }
    return root;
}

console.log(serialize(deserialize("1,2,3,null,null,4,5")));

console.log(deserialize(serialize(null)));

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
