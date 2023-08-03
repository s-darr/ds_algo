import MinHeap from "../src/MinHeap";

describe("MinHeap", () => {
  test("should insert in the correct order", () => {
    const heap = new MinHeap();
    heap.insert(5);
    heap.insert(2);
    heap.insert(3);
    heap.insert(1);
    expect(heap.delete()).toBe(1);
    expect(heap.delete()).toBe(2);
    expect(heap.delete()).toBe(3);
    expect(heap.delete()).toBe(5);
  });

  test("should return -1 when deleting from an empty heap", () => {
    const heap = new MinHeap();
    expect(heap.delete()).toBe(-1);
  });

  test("should handle duplicate values correctly", () => {
    const heap = new MinHeap();
    heap.insert(5);
    heap.insert(2);
    heap.insert(2);
    heap.insert(1);
    heap.insert(1);
    expect(heap.delete()).toBe(1);
    expect(heap.delete()).toBe(1);
    expect(heap.delete()).toBe(2);
    expect(heap.delete()).toBe(2);
    expect(heap.delete()).toBe(5);
  });
});
