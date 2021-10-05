<template>
  <!-- リンクが変わった際の修正を楽にするため、インポートは面倒ですがコンポーネントにしています -->
  <!-- TODO: プライバシーポリシーページを作成後リンクを差し替えてください -->
  <NuxtLink class="text-xs text-gray-700" to="#">
    プライバシーポリシー
  </NuxtLink>
</template>

<script>
export default {
  name: 'LinkToPrivacyPolicy'
}
</script>
