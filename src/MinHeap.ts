export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length == 0) {
      return -1;
    }
    const out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(idx: number): void {
    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);
    if (idx >= this.length) {
      return;
    }

    let smallestIdx = idx;

    if (lIdx < this.length && this.data[lIdx] < this.data[smallestIdx]) {
      smallestIdx = lIdx;
    }
    if (rIdx < this.length && this.data[rIdx] < this.data[smallestIdx]) {
      smallestIdx = rIdx;
    }

    if (smallestIdx !== idx) {
      this.swap(smallestIdx, idx);
      this.heapifyDown(smallestIdx);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }
    const p = this.parent(idx);
    const parentV = this.data[p];
    const v = this.data[idx];
    if (parentV > v) {
      this.swap(p, idx);
      this.heapifyUp(p);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }
  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }
  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }

  private swap(i: number, j: number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}
