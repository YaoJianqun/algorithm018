// 二叉树的前序遍历

// 递归方法
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];
  const preorder = (root) => {
      if (!root) {
          return;
      }
      result.push(root.val);
      preorder(root.left);
      preorder(root.right);
  }
  preorder(root);
  return result;
};