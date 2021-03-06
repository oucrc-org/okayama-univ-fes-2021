import IImage from '~/assets/js/type/IImage'
import IDepartment from '~/assets/js/type/club/IDepartment'

export default interface IClub {
  id: string,
  name: string,
  cover?: IImage,
  icon?: IImage,
  // eslint-disable-next-line camelcase
  parent_department?: IDepartment,
  body?: string,
  // eslint-disable-next-line camelcase
  twitter_url?: string,
  // eslint-disable-next-line camelcase
  facebook_url?: string,
  // eslint-disable-next-line camelcase
  instagram_url?: string,
  // eslint-disable-next-line camelcase
  line_url?: string,
  // eslint-disable-next-line camelcase
  youtube_url?: string
}
