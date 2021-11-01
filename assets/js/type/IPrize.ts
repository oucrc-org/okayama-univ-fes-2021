export default interface IPrize {
  id: number,
  name: string,
  // eslint-disable-next-line camelcase
  image_path: string,
  // eslint-disable-next-line camelcase
  required_stamps: number,
  stock: number
}
