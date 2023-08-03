import dfs from "../src/DFSOnBST";

type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

describe("DFS on BST", () => {
  let head: BinaryNode<number>;

  beforeEach(() => {
    head = {
      value: 10,
      left: {
        value: 5,
        left: { value: 3, left: null, right: null },
        right: { value: 7, left: null, right: null },
      },
      right: {
        value: 15,
        left: { value: 12, left: null, right: null },
        right: { value: 20, left: null, right: null },
      },
    };
  });

  it("should return true if the value is in the BST", () => {
    expect(dfs(head, 7)).toBe(true);
    expect(dfs(head, 20)).toBe(true);
    expect(dfs(head, 5)).toBe(true);
  });

  it("should return false if the value is not in the BST", () => {
    expect(dfs(head, 100)).toBe(false);
    expect(dfs(head, 0)).toBe(false);
  });
});
