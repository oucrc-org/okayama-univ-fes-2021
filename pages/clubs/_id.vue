<template>
  <div>
    {{ club }}
  </div>
</template>

<script>

export default {
  async asyncData ({ params, $microcms }) {
    return await $microcms.get({
      endpoint: `clubs/${params.id}`
    }).then((response) => {
      return {
        club: response
      }
    })
  },
  data () {
    return {
      club: process.env.BASE_URL
    }
  }
}
</script>

<style>

</style>
