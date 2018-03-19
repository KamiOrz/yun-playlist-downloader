declare module 'humanize-duration' {
  function humanizeDuration(duration: number, options: humanizeDuration.Options): string;

  namespace humanizeDuration {
    interface Options {
      language: string
    }
  }

  export = humanizeDuration
}