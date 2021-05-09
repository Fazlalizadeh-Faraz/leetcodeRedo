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
 * @return {number}
 */
var maxDepth = function (root) {
  const recurDep = (dep, node) => {
    // base case
    if (node == null) {
      return dep
    }
    dep++
    return Math.max(recurDep(dep, node.left), recurDep(dep, node.right))
  }
  return recurDep(0, root)
}
