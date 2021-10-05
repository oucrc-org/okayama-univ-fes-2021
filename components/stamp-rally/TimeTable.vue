<template>
  <div>
    <client-only placeholder="Client Only">
      <swiper :options="swiperOption">
        <swiper-slide v-for="i of 2" :key="i">
          <div
            class="text-center text-xl sm:text-2xl border-b-3 font-bold tracking-widest mt-8 mx-auto pb-2 relative z-10 border-themeColor text-themeColor"
          >
            10/30（土） ピックアップ
          </div>
          <table class="w-full text-center mt-1">
            <tr v-for="n of 6" :key="n" class="border-b-2 border-gray-400">
              <td
                class="text-center text-gray-800 text-sm sm:text-base font-medium tracking-widest pr-1 sm:pr-5 py-2.5"
                :class="{'text-accentColor': n === 2}"
              >
                13:00〜14:00
              </td>
              <td
                class="text-center text-gray-800 text-sm sm:text-base font-medium tracking-widest pl-1 sm:pl-5 py-2.5"
                :class="{'text-accentColor': n === 2}"
              >
                写真部 学祭展覧会
              </td>
            </tr>
          </table>
        </swiper-slide>
      </swiper>
    </client-only>
    <div slot="pagination" class="swiper-pagination flex justify-center" />
  </div>
</template>

<script>
export default {
  name: 'StampRallyTimeTable',
  data () {
    return {
      swiperOption: {
        breakpoints: {
          768: {
            allowTouchMove: false,
            pagination: false,
            slidesPerView: 2,
            spaceBetween: 60
          }
        },
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>
