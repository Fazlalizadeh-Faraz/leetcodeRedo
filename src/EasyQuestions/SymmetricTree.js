var isSymmetric = function(root) {
    function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
    }
    // check if the root is empty or not
    if (!root) return true;
    return traverseTree(root.left, root.right);// recur



    function traverseTree(leftTree, rightTree) {
        if (leftTree == null && rightTree == null) return true;
        if (leftTree == null || rightTree == null) return false;
        return (leftTree.val === rightTree.val)
            && traverseTree(leftTree.right, rightTree.left)
            && traverseTree(leftTree.left, rightTree.right);
    }
}