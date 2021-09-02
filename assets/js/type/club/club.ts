class Club {
  cover: String | null = null
  icon: String | null = null
  name: String | null = null
  parentDepartment: String | null = null
  body: String | null = null
  youtubeUrl: String | null = null
  twitterUrl: String | null = null
  facebookUrl: String | null = null
  instagramUrl: String | null = null
  lineUrl: String | null = null

  constructor (json: any) {
    this.cover = json.cover
    this.icon = json.icon
    this.name = json.name
    this.parentDepartment = json.parent_department
    this.body = json.body
    this.youtubeUrl = json.youtube_url
    this.twitterUrl = json.twitter_url
    this.facebookUrl = json.facebook_url
    this.instagramUrl = json.instagram_url
    this.lineUrl = json.line_url
  }
}

export default Club
