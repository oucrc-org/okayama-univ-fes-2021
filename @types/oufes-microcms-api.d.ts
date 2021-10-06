declare namespace oufes {

  interface IDepartment {
    id: string,
    name: string,
    // eslint-disable-next-line camelcase
    ordering_key: number
  }

  interface IImage {
    url: string,
    height: number,
    width: number
  }

  interface IClub {
    id: string,
    name: string,
    // eslint-disable-next-line camelcase
    parent_department: IDepartment | null,
    cover: IImage | null
  }

  // OUCRCの作品
  interface IWorkCategory {
    id: string,
    name: string,
    // eslint-disable-next-line camelcase
    ordering_key: number
  }

  interface IWork {
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
}
