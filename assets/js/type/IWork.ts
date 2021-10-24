import { IImage } from './IImage'
// OUCRCの作品
export interface IWorkCategory {
  id: string,
  name: string,
  // eslint-disable-next-line camelcase
  name_english: string,
  // eslint-disable-next-line camelcase
  ordering_key: number,
  color: string
}

export interface IWork {
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
