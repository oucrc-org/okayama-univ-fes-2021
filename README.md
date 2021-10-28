# okayama-univ-fes-2021

## 動画・ライブ配信の設定方法

[date-youtube-url.ts](https://github.com/oucrc-org/okayama-univ-fes-2021/blob/main/assets/data/date-youtube-url.ts) を編集してください。

```js
const dateYouTubeUrl: Record<string, string> = {
  // 適当に岡大の動画を入れています
  '2021-10-28': 'https://www.youtube.com/watch?v=RfIo2QOz78I',
  // こんな感じで時間帯ごとに切り替えられます
  '2021-10-28 12:00': 'https://www.youtube.com/watch?v=5gMKcvKoz0Q',
  '2021-10-28 13:30': 'https://www.youtube.com/watch?v=SYSX0GHoBEI',
  '2021-10-28 15:10': 'https://www.youtube.com/watch?v=6dK7YwaEsVM',

  // もちろん日替わりも可能です
  '2021-11-1': 'https://www.youtube.com/watch?v=cg7skAIS7Uk',
  '2021-11-2': 'https://www.youtube.com/watch?v=cg7skAIS7Uk'
}
```

左が「開始時間」、右が「動画のURL」です。上のURlはダミーです。

## Commit Message

| Prefix | 使うシチュエーション |
| :--- | :--- |
| Add: | 機能やファイルなどの追加 |
| Clean: | コードの改善・リファクタリング |
| Change: | 仕様変更 |
| Upgrade: | バージョンアップ |
| Disable: | 機能の無効化（コメントアウト等） |
| Fix: | バグ修正 |
| Hotfix: | クリティカルなバグ修正 |

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
