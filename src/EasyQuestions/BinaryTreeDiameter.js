var diameterOfBinaryTree = function(root) {
    let pathLength = 0;
    depth(root);
    return pathLength;

    function depth(node) {
        if (!node) {
            return 0;
        }

        const left = depth(node.left);
        const right = depth(node.right);

        pathLength = Math.max(pathLength, left + right);

        // depth + 1 cause root
        return Math.max(left, right) + 1;
    }
};