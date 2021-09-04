/***
 * Youtubeのurlにおいて、閲覧用から埋め込み用に変換する関数
 * @param url
 */
// https://youtu.be/wNSN3fPGHsI?t=291
const watchToEmbed = (url?: string) => {
  if (typeof url === 'undefined') {
    return null
  }

  if (url.includes('/embed')) {
    return url
  }

  const videoId = url.match(/(?:[?&]v=|youtu\.be\/)(?<videoId>[^?&]+)/)?.groups?.videoId

  if (!videoId) {
    return null
  }

  const result = new URL(videoId, 'https://youtube.com/embed/')
  const paramsOtherThanId = new URLSearchParams(new URL(url).searchParams)
  console.log(paramsOtherThanId.toString())
  paramsOtherThanId.delete('v')
  // 通常の開始時間指定（t=xx）を埋め込み用（start=xx）に書き換え
  const startTime = paramsOtherThanId.get('t')
  if (startTime !== null) {
    paramsOtherThanId.delete('t')
    paramsOtherThanId.set('start', startTime)
  }
  result.search = paramsOtherThanId.toString()
  return result.toString()
}

export default watchToEmbed
