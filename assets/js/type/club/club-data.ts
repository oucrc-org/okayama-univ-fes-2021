import IImage = oufes.IImage;

export interface ClubData {
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
}
