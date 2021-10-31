<template>
  <!-- formと書くとプレゼント応募と紛らわしいので「survey」で統一しています -->
  <!-- このリンクは日によって変わり、ないときは非表示になります -->
  <a v-if="url" :href="url" target="_blank">
    <picture>
      <source :srcset="require('~/assets/img/static/home/burner_question.webp')" type="image/webp">
      <img src="~/assets/img/static/home/burner_question.jpg" alt="学祭アンケート実施中" class="">
    </picture>
  </a>
</template>

<script lang="ts">
import getTodaySurveyUrl from '~/assets/js/survey/get-today-survey-url'

export default {
  name: 'DailyVideo',
  data () {
    const { url } = getTodaySurveyUrl()
    return { url }
  }
}
</script>

<style>

</style>
