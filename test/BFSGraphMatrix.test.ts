import bfs from "../src/BFSGraphMatrix";
type WeightedAdjacencyMatrix = number[][];
describe("bfs", () => {
  it("returns the shortest path from source to target", () => {
    const graph: WeightedAdjacencyMatrix = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ];
    const source = 0;
    const target = 3;
    const expectedPath = [0, 1, 2, 3];

    const result = bfs(graph, source, target);

    expect(result).toEqual(expectedPath);
  });

  it("returns null if there is no path from source to target", () => {
    const graph: WeightedAdjacencyMatrix = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
    ];
    const source = 0;
    const target = 3;

    const result = bfs(graph, source, target);

    expect(result).toBeNull();
  });
});
