<template>
  <div class="container max-w-screen-lg mt-8 mx-auto" style="font-weight: normal !important">
    <h2 class="font-semibold w-3/4 pl-6 py-4 text-xl text-white tracking-widest rounded-r-xl bg-themeColor text-white">
      サイトポリシー
    </h2>

    <p class="mt-12 sm:px-8">
    <div
      class="text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative z-10 border-themeColor text-themeColor tracking-widest"
    >
      推奨環境
    </div>
    <p>
      当サイトでは、より安全で快適にご利用いただくために下記のブラウザを推奨致します。
    </p>
    <ul class="list-disc flex flex-col gap-y-3 ml-4 px-4">
      <li>Mozilla Firefox最新バージョン</li>
      <li>Google Chrome最新バーション</li>
      <li>Safari最新バージョン</li>
    </ul>

    <div
      class="text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative z-10 border-themeColor text-themeColor tracking-widest"
    >
      JavaScriptについて
    </div>
    <p>当サイトはJavaScriptを使用しています。ブラウザ設定でJavaScriptを無効にされている場合、一部の機能が正しく動作しなかったり、正しく表示されたりしないことがあるので、必ず JavaScript
      を有効にしてください。</p>

    <div
      class="text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative z-10 border-themeColor text-themeColor tracking-widest"
    >
      アクセスデータについて
    </div>

    <p>当サイトのサーバ上に記録されたアクセスログについては、アクセス数の集計など今後の企画の参考のために使用することはありますが、これにより個人を特定することはありません。</p>

    <div
      class="text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative z-10 border-themeColor text-themeColor tracking-widest"
    >
      リンクについて
    </div>
    <p>
      当サイトへのリンクは、原則自由です。ただし、ウェブサイトの内容やリンクの方法によってはリンクの削除を依頼させていただく場合があります。当サイトへリンクしている他のウェブサイトの内容については、当団体はいかなる責任も負わないものとします。</p>

    <div
      class="text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative z-10 border-themeColor text-themeColor tracking-widest"
    >
      免責事項
    </div>
    <p>
      当サイトの内容は、予告なしに変更または削除する場合があります。
      当サイトに掲載された情報又は当サイトのコンテンツ等のご利用により、何らかの損害、損失が発生したとしても、当サイトの関係者が責任を負うものではありません。また、当サイト内に掲載したリンク先が他団体の管理する外部サイトである場合、外部サイトの内容に対して、当サイトは責任を負いません。
    </p>

    <div
      class="text-xl px-4 pb-1 border-b-4 mb-6 mt-12 w-5/6 sm:w-2/3 relative z-10 border-themeColor text-themeColor tracking-widest"
    >
      著作権等について
    </div>
    <p>
      当サイトに掲載されるコンテンツ（テキスト、画像、映像等）に関する著作権、その他の権利は、当団体または関係団体、その他の権利者に帰属します。当団体、もしくは権利者の許可なく複写、複製、転用、販売、改変、掲示、公衆送信、頒布等、二次利用をしたり、権利者の権利を損なったりする行為を固く禁じます。
    </p>
  </div>
</template>

<script>
export default {
  name: 'SitePolicy',
  head () {
    return {
      title: 'サイトポリシー'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

* {
  font-family: 'Noto Sans JP', 'Roboto', sans-serif;
  font-weight: 400;
}

p {
  @apply mb-4 px-8 sm:px-0
}

ul {
  @apply px-8 sm:px-0
}
</style>
