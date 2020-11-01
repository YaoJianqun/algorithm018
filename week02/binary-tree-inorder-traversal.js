// 二叉树的中序遍历

// 递归方法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  const inorder = (root) => {
      if (!root) {
          return;
      }
      inorder(root.left)
      result.push(root.val);
      inorder(root.right);
  }
  inorder(root);
  return result;
};

// 迭代方法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const result = [];
  const stack = [];
  while (root || stack.length > 0) {
      while (root) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      result.push(root.val);
      root = root.right;
  }
  return result;
};