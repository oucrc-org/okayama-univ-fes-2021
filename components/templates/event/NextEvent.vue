<template>
  <div v-if="time && name" class="hero bg-base-200 pb-4 pt-10 sm:py-10">
    <div class="max-w-screen-lg px-2 sm:px-0">
      <LinkTo to="https://www.youtube.com/watch?v=gwjxlonn43o" class="flex-col hero-content lg:flex-row-reverse">
        <picture>
          <source v-if="webp" :srcset="webp" type="image/webp">
          <img
            v-if="jpg"
            :src="jpg"
            class="shadow-xl sm:max-w-lg lg:ml-8"
            :alt="name + 'の画像'"
          >
        </picture>
        <div>
          <h3 id="next_title" class="overflow-hidden mb-6 mt-6 lg:mt-0 text-3xl lg:text-5xl font-bold">
            <span>次</span>
            <span>の</span>
            <span>イ</span>
            <span>ベ</span>
            <span>ン</span>
            <span>ト</span>
          </h3>
          <p class="mb-2 font-bold text-2xl lg:text-3xl text-accentColor">
            {{ time }}
          </p>
          <p class="mb-5 text-lg lg:text-xl text-gray-700">
            {{ name }}
          </p>
          <LinkTo
            to="https://www.youtube.com/watch?v=gwjxlonn43o"
            class="border-3 border-themeColor bg-themeColor inline-block font-medium text-center text-white text-lg mt-4 tracking-wider rounded-full w-56 py-3 transform transition duration-300 hover:scale-105"
          >
            見に行く →
          </LinkTo>
        </div>
      </LinkTo>
    </div>
  </div>
</template>

<script>
import getNextEvent from '~/assets/js/event/get-next-event'
import LinkTo from '~/components/templates/nuxt/LinkTo'

export default {
  components: {
    LinkTo
  },
  data () {
    const {
      time,
      name,
      jpg,
      webp
    } = getNextEvent()
    return {
      time,
      name,
      webp,
      jpg
    }
  }
}
</script>

<style>
#next_title {
  display: flex;
}

#next_title span {
  display: block;
  transform: translate(0, 105%);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
}

#next_title span:nth-child(2) {
  transition-delay: 0.03s;
}

#next_title span:nth-child(3) {
  transition-delay: 0.06s;
}

#next_title span:nth-child(4) {
  transition-delay: 0.09s;
}

#next_title span:nth-child(5) {
  transition-delay: 0.12s;
}

#next_title span:nth-child(6) {
  transition-delay: 0.15s;
}
</style>
