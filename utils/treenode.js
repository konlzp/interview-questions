class TreeNode {
    constructor(value) {
        this.value = value;
        /**
         * @type {TreeNode}
         */
        this.left = null;
        /**
         * @type {TreeNode}
         */
        this.right = null;
        /**
         * @type {TreeNode}
         */
        this.parent = null;
    }
}

module.exports = TreeNode;