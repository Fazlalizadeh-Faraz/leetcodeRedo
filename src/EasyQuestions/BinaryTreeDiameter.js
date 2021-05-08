var diameterOfBinaryTree = function (root) {
  let pathLength = 0
  depth(root)
  return pathLength

  function depth(node) {
    // base case when we reach the end
    if (!node) {
      return 0
    }

    // this will not be excuted untill the variable called
    const left = depth(node.left)
    const right = depth(node.right)

    pathLength = Math.max(pathLength, left + right)

    // depth + 1 cause root
    return Math.max(left, right) + 1
  }
}
