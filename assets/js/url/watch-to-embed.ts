/***
 * Youtubeのurlにおいて、閲覧用から埋め込み用に変換する関数
 * @param url
 */
const watchToEmbed = (url?: String) => url?.replace(/youtu.be\/([^?&]+)/, 'www.youtube.com/embed/$1')
  .replace(/\/watch\?v=([^&]+)/, '/embed/$1')

export default watchToEmbed
