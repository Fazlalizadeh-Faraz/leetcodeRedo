/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return convert(0, nums.length - 1)

    function convert(l, r) {
        if (l > r) return null;
        const mid = parseInt((l+r)/2);
        const node = new TreeNode(nums[mid]);
        node.left = convert(l, mid - 1);
        node.right = convert(mid + 1, r);
        return node;
    }
};
