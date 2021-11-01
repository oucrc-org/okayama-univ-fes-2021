/**
 * @property twitter_id   - Twitter ID
 * @property avatar_url   - アバター画像のURL
 * @property display_name - Twitterの表示名
 * @property comment      - ツイート内容
 * @property tweet_url    - ツイートのURL
 * @property updated_at
 */
export default interface ITweet {
  // eslint-disable-next-line camelcase
  twitter_id: string,
  // eslint-disable-next-line camelcase
  avatar_url: string,
  // eslint-disable-next-line camelcase
  display_name: string,
  comment: string,
  // eslint-disable-next-line camelcase
  tweet_url: string,
  // eslint-disable-next-line camelcase
  updated_at: string
}
