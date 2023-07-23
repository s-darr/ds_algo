import { post_order_search } from "../src/BTPostOrder";
import { pre_order_search } from "../src/BTPreOrder";
import { in_order_search } from "../src/BTInOrder";
type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

describe("Tree Traversal", () => {
  const tree: BinaryNode<number> = {
    value: 1,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  };

  test("post-order traversal", () => {
    const result = post_order_search(tree);
    expect(result).toEqual([2, 3, 1]);
  });
  test("pre-order traversal", () => {
    const result = pre_order_search(tree);
    expect(result).toEqual([1, 2, 3]);
  });
  test("in-order traversal", () => {
    const result = in_order_search(tree);
    expect(result).toEqual([2, 1, 3]);
  });
});
