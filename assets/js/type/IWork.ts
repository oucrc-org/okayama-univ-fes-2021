import { IImage } from './IImage'
// OUCRCの作品
export interface IWorkCategory {
  id: string,
  name: string,
  // eslint-disable-next-line camelcase
  ordering_key: number
}

export interface IWork {
  id: string,
  category: IWorkCategory,
  title: string,
  cover: IImage,
  // eslint-disable-next-line camelcase
  youtube_video_url?: string,
  image1?: IImage,
  image2?: IImage,
  image3?: IImage,
  body: string,
  creator?: string,
}
