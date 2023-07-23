import { bfs } from "../src/BTBFS";
type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};
describe("bfs", () => {
  it("should return true if the needle is found in the binary tree", () => {
    //      1
    //     / \
    //    2   3
    //   / \
    //  4   5
    const head: BinaryNode<number> = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null },
      },
      right: { value: 3, left: null, right: null },
    };

    expect(bfs(head, 4)).toBe(true);
    expect(bfs(head, 3)).toBe(true);
  });

  it("should return false if the needle is not found in the binary tree", () => {
    const head: BinaryNode<number> = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null },
      },
      right: { value: 3, left: null, right: null },
    };

    expect(bfs(head, 6)).toBe(false);
    expect(bfs(head, 0)).toBe(false);
  });
});
