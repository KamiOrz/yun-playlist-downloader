import BaseAdapter from './base'
import Debug from 'debug'
const API = require('@magicdawn/music-api')
const debug = Debug('yun:adapter:playlist')

export default class PlaylistAdapter extends BaseAdapter {
  getTitle($: CheerioAPI) {
    return $('h2.f-ff2.f-brk').text()
  }

  async getDetail($: CheerioAPI, url: string, quality: number) {
    const id = this.getId(url)
    const ret = await API.getPlaylist('netease', { id, raw: true })
    return ret.playlist.tracks
  }
}
