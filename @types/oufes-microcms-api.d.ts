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
}
