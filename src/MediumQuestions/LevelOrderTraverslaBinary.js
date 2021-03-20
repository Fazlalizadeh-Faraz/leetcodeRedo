/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let result=[[root.val]]

    const bfs=(node,level)=> { //level is the level of the current node, current node is already processed

        if (node.left) {
            result[level + 1] = [...(result[level + 1] || []), node.left.val]
        }
        if (node.right) {
            result[level + 1] = [...(result[level + 1] || []), node.right.val]
        }
        if (node.left) {
            bfs(node.left, level + 1)
        }
        if (node.right) {
            bfs(node.right, level + 1)
        }

    }

    bfs(root,0)
    return result
};