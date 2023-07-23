type LNode<T> = {
  value: T;
  prev?: LNode<T>;
  next?: LNode<T>;
};

export class DoublyLinkedList<T> {
  public length: number;
  private head?: LNode<T>;
  private tail?: LNode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const node = { value: item } as LNode<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index out of bounds");
    }

    if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }

    const node = { value: item } as LNode<T>;
    const curr = this.getAt(idx) as LNode<T>;

    node.prev = curr.prev;
    node.next = curr;
    curr.prev!.next = node;
    curr.prev = node;

    this.length++;
  }

  append(item: T): void {
    const node = { value: item } as LNode<T>;
    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    while (curr) {
      if (curr.value === item) {
        return this.removeNode(curr);
      }
      curr = curr.next;
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    if (node) {
      return this.removeNode(node);
    }
    return undefined;
  }

  private removeNode(node: LNode<T>): T {
    this.length--;
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    return node.value;
  }

  private getAt(idx: number): LNode<T> | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
    let curr = this.head;
    for (let i = 0; i < idx && curr; i++) {
      curr = curr.next;
    }
    return curr;
  }
}
