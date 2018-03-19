'use strict'
/* eslint camelcase: off */

import _ from 'lodash'
import rp from 'request-promise'
import Debug from 'debug'

const encrypt: (s: string) => string = require('@magicdawn/music-api/src/crypto').aesRsaEncrypt
const debug = Debug('yun:api:playurl:music-api')

/**
 * getData
 */

export default async function getData(ids: string[], quality: number) {
  if (!ids || !ids.length) return
  quality = quality || 320000 // 320 | 192 | 128

  // bl
  let bl = {
    br: quality,
    csrf_token: '',
    ids: ids,
  }
  const bls = JSON.stringify(bl)

  // {params, encSecKey}
  // https://github.com/LIU9293/musicAPI/blob/9b75830249b03599817b792c4cb05ded13a50949/src/netease/getSong.js#L11
  const body = encrypt(bls)

  let json = await rp({
    method: 'POST',
    url:
      'http://music.163.com/weapi/song/enhance/player/url?csrf_token=6817f1ae5c9664c9076e301c537afc29',
    form: body,
    simple: false,
  })
  json = JSON.parse(json)

  debug('POST result: %j', json)
  return json.data
}
