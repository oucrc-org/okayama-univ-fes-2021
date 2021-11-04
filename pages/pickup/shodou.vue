<template>
  <!-- TODO:2回，3回のパーティクルの設定，ヒーローエリアの写真追加，できたらアニメーション追加-->
  <div id="app">
    <div class="bg-shodoutitle">
      <div class="h-140 md:h-200 lg:h-160 grid grid-cols-12">
        <h1 class="text-white font-hina text-7xl lg:text-8xl col-start-5 col-end-12 pt-48 text-right">
          書道部
        </h1>
      </div>
    </div>
    <div class="bg-shodou1bg">
      <section class="relative">
        <h2 class="tracking-widest font-mono text-3xl lg:text-4xl text-white mx-auto text-center py-12">
          1回生
        </h2>
        <div id="momiji" class="absolute w-full h-full bottom-0" />
        <div id="work1" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-1 col-end-8 cursor-pointer">
            <a href="#modal1">
              <img src="/shodou/mono2.jpg" alt="works">
            </a>
          </div>
          <p
            class="text-white font-hina text-base md:text-lg lg:text-xl col-start-8 col-end-13 text-center pt-20 lg:pt-56"
          >
            小笠原 佑馬
          </p>
          <div id="modal1" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/mono2.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work1" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work2" class="grid grid-cols-12 py-10 md:py-20">
          <p
            class="text-white font-hina text-base md:text-lg lg:text-xl col-start-1 col-end-5 text-center pt-20 lg:pt-56"
          >
            小笠原 佑馬
          </p>
          <div class="z-10 col-start-5 col-end-13 cursor-pointer">
            <a href="#modal2">
              <img src="/shodou/10082.PNG" alt="works">
            </a>
          </div>
          <div id="modal2" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/10082.PNG" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work2" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="bg-shodou2bg">
      <section class="relative">
        <div id="snow" class="absolute w-full h-full" />
        <h2 class="tracking-widest font-mono font-medium text-3xl lg:text-4xl mx-auto text-center py-12 text-shodou2">
          2、3回生
        </h2>
        <div id="work4" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-1 col-end-8 cursor-pointer">
            <a href="#modal4">
              <img src="/shodou/mono2.jpg" alt="works">
            </a>
          </div>
          <p
            class="text-shodou2 font-hina text-base md:text-lg lg:text-xl col-start-8 col-end-13 text-center pt-20 lg:pt-56"
          >
            小笠原 佑馬
          </p>
          <div id="modal4" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/mono2.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work3" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <section class="relative">
        <div id="sakura" class="absolute w-full h-full" />
        <h2 class="tracking-widest font-mono font-medium text-3xl lg:text-4xl mx-auto text-center text-shodou4 py-12">
          4回生
        </h2>
        <div id="work3" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-1 col-end-8 cursor-pointer">
            <a href="#modal1">
              <img src="/shodou/mono2.jpg" alt="works">
            </a>
          </div>
          <p
            class="text-shodou4 font-hina text-base md:text-lg lg:text-xl col-start-8 col-end-13 text-center pt-20 lg:pt-56"
          >
            小笠原 佑馬
          </p>
          <div id="modal3" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/mono2.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work3" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import momiji from '~/assets/js/config/momiji.particles.config'
import sakura from '~/assets/js/config/sakura.particles.config'
import snow from '~/assets/js/config/snow.particles.config'

export default Vue.extend({
  name: 'Shodou',
  mounted () {
    require('particles.js')
    particlesJS('momiji', momiji.data)
    particlesJS('sakura', sakura.data)
    particlesJS('snow', snow.data)
  }
})
</script>

<style scoped>
.btnline{
  position:relative;
  color:#333;
  padding:10px 30px;
  display:inline-block;
  text-decoration:none;
  outline:none;
}

.btnline::before,
.btnline::after{
  content:'';
  position:absolute;
  border:solid #333;
  width:10px;
  height:10px;
  transition:all 0.3s ease-in-out;
}

.btnline::before{
  top:0;
  left:0;
  border-width:2px 0 0 2px;
}

.btnline::after{
  bottom:0;
  right:0;
  border-width:0 2px 2px 0;
}

.btnline:hover::before,
.btnline:hover::after{
  width:calc(100% - 2px);
  height:calc(100% - 2px);
  border-color:#666
}
</style>
