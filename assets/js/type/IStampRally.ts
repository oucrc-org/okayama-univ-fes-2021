import IImage from '~/assets/js/type/IImage'

export interface IStampRallyItem {
  id: string,
  name: string,
  cover: IImage | null,
  presentCount: number,
  stampCount: number
}
