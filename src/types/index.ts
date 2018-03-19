interface Artist {
  name: string;
};

export interface RawSong {
  id: string,
  ar: Artist[];
  name: string;
  ajaxData: { url: string };
}

export interface Song {
  [key: string]: any
  singer: string // song.ar[0].name
  songName: string // song.name
  url: string // song.ajaxData.url
  ext: string // trimStart(extname(song.ajaxData.url), '.')
  index: string //padStart(String(index + 1), len, '0'),
  rawIndex: number;
}
