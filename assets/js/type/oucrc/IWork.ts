import IImage from '~/assets/js/type/IImage'
import IWorkCategory from '~/assets/js/type/oucrc/IWorkCategory'

export default interface IWork {
  id: string,
  category: IWorkCategory,
  title: string,
  cover: IImage,
  // eslint-disable-next-line camelcase
  youtube_video_url?: string,
  image1?: IImage | null,
  image2?: IImage | null,
  image3?: IImage | null,
  // eslint-disable-next-line camelcase
  body_html: string,
  creator?: string
}
