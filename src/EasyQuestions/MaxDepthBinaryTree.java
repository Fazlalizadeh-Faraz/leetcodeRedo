package EasyQuestions;


class MaxDepthBinaryTree {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public int maxDepth(TreeNode root) {
        return recurDepth(root, 0);
    }

    private int recurDepth(TreeNode root, int depth) {
        if (root == null) {
            return depth;
        }
        depth++;
        return Math.max(recurDepth(root.left, depth), recurDepth(root.right, depth));
    }
}
