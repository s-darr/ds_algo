export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }
  insert(value: number): void {}
  delete(): number {}

  private heapifyDown(idx: number): void {
    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);
    if (idx >= this.length || lIdx >= this.length) {
      return;
    }
    const lVal = this.data[lIdx]
    const rVal = this.data[rIdx]
    const v = this.data[idx]

    if(lVal > rVal && v > rVal){
        this.data[idx] = rVal
        this.data[rIdx] = v;
        this.heapifyDown(rIdx)
    }else if (rVal > lVal && v > lVal){
        this.data[idx] = lVal
        this.data[lIdx] = v;
        this.heapifyDown(rIdx)

    }
    

    const minValue = 



  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }
    const p = this.parent(idx);
    const parentV = this.data[p];
    const v = this.data[idx];
    if (parentV > v) {
      this.data[p] = v;
      this.data[p] = v;
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
}
