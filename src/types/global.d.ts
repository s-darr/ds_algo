declare type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};
declare type LNode<T> = {
  value: T;
  prev?: LNode<T>;
  next?: LNode<T>;
};

declare type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};
