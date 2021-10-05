<template>
  <!-- リンクが変わった際の修正を楽にするため、インポートは面倒ですがコンポーネントにしています -->
  <NuxtLink class="text-xs text-gray-700" to="#">
    プライバシーポリシー
  </NuxtLink>
</template>

<script>
export default {
  name: 'LinkToPrivacyPolicy'
}
</script>
