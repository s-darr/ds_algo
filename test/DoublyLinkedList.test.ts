import { DoublyLinkedList } from "../src/DoublyLinkedList";

describe("DoublyLinkedList", () => {
  it("should create a new list, add items, and remove them", () => {
    const list = new DoublyLinkedList<number>();

    list.append(0); // Append to tail
    list.append(1);
    list.append(2);

    expect(list.get(0)).toBe(0); // Get by index
    expect(list.get(1)).toBe(1);
    expect(list.get(2)).toBe(2);

    list.prepend(-1); // Add to head
    expect(list.get(0)).toBe(-1);

    list.insertAt(1.5, 3); // Insert at index 3
    expect(list.get(3)).toBe(1.5);

    expect(list.remove(2)).toBe(2); // Remove by value

    expect(list.get(2)).toBe(1); // Now the item at index 2 should be 1.5, not undefined
  });
});
