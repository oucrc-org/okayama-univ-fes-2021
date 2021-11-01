import IClub from '../club/IClub'
import IImage from '~/assets/js/type/IImage'
export default interface IPresentation {
  id: string,

  // 一覧に表示
  title:string,

  // ヘッダーから元団体にリンク可能にする
  club: IClub,

  // 動画のURL。埋め込みにする必要はない
  videoUrl: string,

  // 動画の下の見出し
  videoTitle?: string,

  // 「メッセージ」の文章。リッチテキストという指定があったので
  messageHtml?: string,

  cover?:IImage
}
