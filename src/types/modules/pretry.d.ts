declare module 'promise.retry' {
  function pretry<T>(
    fn: (...args: any[]) => Promise<T>,
    options: pretry.Options
  ): (...args: any[]) => Promise<T>;

  namespace pretry {
    interface Options {
      times: number;
      timeout: number;
      onerror(e: Error, i: number): void;
    }
  }

  export = pretry
}