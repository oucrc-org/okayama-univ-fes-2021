import { ClubData } from '~/assets/js/type/club/club-data'
import IImage = oufes.IImage;

export default class Club implements ClubData {
  cover?: IImage
  icon?: IImage
  name?: String
  // eslint-disable-next-line camelcase
  parent_department?: String
  body?: String
  // eslint-disable-next-line camelcase
  youtube_url?: String
  // eslint-disable-next-line camelcase
  twitter_url?: String
  // eslint-disable-next-line camelcase
  facebook_url?: String
  // eslint-disable-next-line camelcase
  instagram_url?: String
  // eslint-disable-next-line camelcase
  line_url?: String

  get coverUrl () {
    return this.cover ? this.cover.url : null
  }

  public hasSNSUrl (): boolean {
    return !(
      this.twitter_url == null &&
      this.facebook_url == null &&
      this.instagram_url == null &&
      this.line_url == null
    )
  }
}
