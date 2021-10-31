import IImage from '~/assets/js/type/IImage'

export default interface IPrize {
  id: string,
  name: string,
  cover: IImage | null,
  presentCount: number,
  stampCount: number
}
