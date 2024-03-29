function createRef<T>(): RefObject<T>;

interface RefObject<T> {
  // immutable
  readonly current: T | null;
}
