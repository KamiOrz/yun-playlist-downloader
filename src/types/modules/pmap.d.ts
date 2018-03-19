declare module 'promise.map' {
  function pmap<T, U>(
    arr: T[],
    fn: (item: T, index: number, arr: T[]) => Promise<U>
  ): Promise<U[]>;

  export = pmap
}