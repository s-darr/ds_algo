import dfs from "../src/DFSGraphList";
type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];

describe("dfs", () => {
  it("returns a path from source to target", () => {
    const graph: WeightedAdjacencyList = [
      [{ to: 1, weight: 1 }],
      [{ to: 2, weight: 1 }],
      [{ to: 3, weight: 1 }],
      [],
    ];
    const source = 0;
    const target = 3;
    const expectedPath = [0, 1, 2, 3];

    const result = dfs(graph, source, target);

    expect(result).toEqual(expectedPath);
  });

  it("returns null if there is no path from source to target", () => {
    const graph: WeightedAdjacencyList = [
      [{ to: 1, weight: 1 }],
      [],
      [{ to: 3, weight: 1 }],
      [],
    ];
    const source = 0;
    const target = 3;

    const result = dfs(graph, source, target);

    expect(result).toBeNull();
  });
});
