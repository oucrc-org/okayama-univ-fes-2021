<template>
  <div id="app">
    <div>
      <h1 class="tracking-widest shodoutitle font-hina text-5xl lg:text-7xl pt-5 pb-5 pl-5 text-left">
        書道部
      </h1>
    </div>
    <div class="bg-shodou1bg">
      <section class="relative">
        <h2 class="heading03 font-hina tracking-widest text-3xl lg:text-4xl text-white mx-auto text-center py-12">
          1回生
        </h2>
        <div id="momiji" class="absolute w-full h-full bottom-0" />
        <div id="work1" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer content-center">
            <a href="#modal1">
              <img src="/shodou/kawabara1.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              貝原 佐奈
            </p>
          </div>
          <div id="modal1" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/kawabara1.jpg" alt="works">
              </div>
              <div>
                <p
                  class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5"
                >
                  宣誓、私貝原佐奈はどんな困難にも挑み、戦っていくことを誓います。
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work1" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work2" class="grid grid-cols-12 py-10 md:py-20">
          <p
            class="text-white font-hina text-base md:text-lg lg:text-xl col-start-2 col-end-5 text-center pt-20 lg:pt-56"
          >
            笠原 奈央
          </p>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer content-center">
            <a href="#modal2">
              <img src="/shodou/kasahara1.jpg" alt="works">
            </a>
          </div>
          <div id="modal2" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/kasahara1.jpg" alt="works">
              </div>
              <div>
                <p
                  class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5"
                >
                  猪突猛進に生きたいという思いを込めて猪と書きました。
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work2" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work3" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer">
            <a href="#modal3">
              <img src="/shodou/kawasaki1.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              川崎 桃果
            </p>
          </div>
          <div id="modal3" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/kawasaki1.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  大学生になったので自分を律することができる人になりたいという思いを込めてこの1字にしました。また法学部ということで法律の律という意味もあります(笑)
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work3" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work4" class="grid grid-cols-12 py-10 md:py-20">
          <p
            class="text-white font-hina text-base md:text-lg lg:text-xl col-start-2 col-end-5 text-center pt-20 lg:pt-56"
          >
            末藤 真衣
          </p>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer">
            <a href="#modal4">
              <img src="/shodou/matudou1.jpg" alt="works">
            </a>
          </div>
          <div id="modal4" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/matudou1.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work4" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work5" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer">
            <a href="#modal5">
              <img src="/shodou/nomura1.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              野村 万有子
            </p>
          </div>
          <div id="modal5" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/nomura1.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work5" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work10" class="grid grid-cols-12 py-10 md:py-20">
          <p
            class="text-white font-hina text-base md:text-lg lg:text-xl col-start-2 col-end-5 text-center pt-20 lg:pt-56"
          >
            森元 理稀
          </p>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer">
            <a href="#modal10">
              <img src="/shodou/morimoto1.jpg" alt="works">
            </a>
          </div>
          <div id="modal10" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/morimoto1.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  少年よ大志を抱け
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work10" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work27" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer content-center">
            <a href="#modal27">
              <img src="/shodou/shiomi1.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              塩見 紬
            </p>
          </div>
          <div id="modal27" class="modal">
            <div class="modal-box">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-40 w-28 col-start-2 col-end-7">
                  <img src="/shodou/shiomi1.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    漫画『ハイキュー!!』に出てくる木兎光太郎の言葉です。彼の為人を表すいい言葉だと思って選びました。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work27" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work28" class="grid grid-cols-12 py-10 md:py-20">
          <div class="col-start-2 col-end-6">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              半田 瑞桜
            </p>
          </div>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer content-center">
            <a href="#modal28">
              <img src="/shodou/handa1.jpg" alt="works">
            </a>
          </div>
          <div id="modal28" class="modal">
            <div class="modal-box">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-40 w-28 col-start-2 col-end-7">
                  <img src="/shodou/handa1.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    『天工開物』の一節で、5つの金属のことです。どの金属も広く扱われていることにたとえて、人間にも貴賤なく価値があるということを表しています。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work28" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work30" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer content-center">
            <a href="#modal30">
              <img src="/shodou/yamada1.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              山田 安佳里
            </p>
          </div>
          <div id="modal30" class="modal">
            <div class="modal-box">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-40 w-28 col-start-2 col-end-7">
                  <img src="/shodou/yamada1.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    愛は何かを思いやる心を表す言葉です。とても暖かい気持ちになれるのでこの言葉を選びました。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work30" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work31" class="grid grid-cols-12 py-10 md:py-20">
          <div class="col-start-2 col-end-6">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              米森 美緒
            </p>
          </div>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer content-center">
            <a href="#modal31">
              <img src="/shodou/komemori1.jpg" alt="works">
            </a>
          </div>
          <div id="modal31" class="modal">
            <div class="modal-box">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-40 w-28 col-start-2 col-end-7">
                  <img src="/shodou/komemori1.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    『ハイキュー!!』という作品に出てくることばです。つらいとき、苦しいとき、逃げ出したくなったとき、“楽しい”を考えたい、。
                    そんな想いを込めて
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work31" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work26">
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-6 cursor-pointer">
              <a href="#modal26">
                <img src="/shodou/kabahara1.jpg" alt="works">
              </a>
            </div>
            <div class="z-10 col-start-8 col-end-12 cursor-pointer">
              <p
                class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
              >
                蒲原 雄斗
              </p>
            </div>
          </div>
          <div id="modal26" class="modal">
            <div class="modal-box content-center">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-64 w-20 col-start-3 col-end-7">
                  <img src="/shodou/kabahara1.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    精一杯書きましたので是非ご覧ください。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work26" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work32">
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-6 cursor-pointer">
              <a href="#modal32">
                <img src="/shodou/yoshida1.jpg" alt="works">
              </a>
            </div>
            <div class="z-10 col-start-8 col-end-12 cursor-pointer">
              <p
                class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
              >
                吉田 愛加里
              </p>
            </div>
          </div>
          <div id="modal32" class="modal">
            <div class="modal-box content-center">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-64 w-20 col-start-3 col-end-7">
                  <img src="/shodou/yoshida1.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    東大の政治家・初夏である顔真卿の『裴将軍詩』という所の一説を書きました。裴将軍詩は様々な書体が組み合わさっており難しかったですが、それが同時に面白かったです。特に「縈且廻」の流れがお気に入りなので、ぜひご覧下さい。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work32" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work6">
          <div>
            <p
              class="text-white font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              平井 海斗
            </p>
          </div>
          <div>
            <p
              class="text-white font-hina text-base md:text-lg lg:text-xl text-center pt-5 lg:pt-10"
            >
              「年中無休」
            </p>
            <p
              class="text-white font-hina text-base md:text-lg lg:text-xl text-center pt-3 lg:pt-5"
            >
              四季/クリープハイプ より
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-6 cursor-pointer">
              <a href="#modal6">
                <img src="/shodou/hirai2yaten11.jpg" alt="works">
              </a>
            </div>
            <div class="z-10 col-start-8 col-end-12 cursor-pointer">
              <a href="#modal7">
                <img src="/shodou/hirai2yaten12.jpg" alt="works">
              </a>
            </div>
          </div>
          <div class="grid grid-cols-12 pt-5 pb-20 md:pt-10 md:pb-40">
            <div class="z-10 col-start-2 col-end-6 cursor-pointer">
              <a href="#modal8">
                <img src="/shodou/hirai2yaten13.jpg" alt="works">
              </a>
            </div>
            <div class="z-10 col-start-8 col-end-12 cursor-pointer">
              <a href="#modal9">
                <img src="/shodou/hirai2yaten14.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal6" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/hirai2yaten11.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work6" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
          <div id="modal7" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/hirai2yaten12.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work6" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
          <div id="modal8" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/hirai2yaten13.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work6" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
          <div id="modal9" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/hirai2yaten14.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work6" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work29" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer content-center">
            <a href="#modal29">
              <img src="/shodou/hirai11.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              平井 海斗
            </p>
          </div>
          <div id="modal29" class="modal">
            <div class="modal-box">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-40 w-28 col-start-2 col-end-7">
                  <img src="/shodou/hirai11.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    夜天/ 女王蜂 より
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work29" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work25" class="grid grid-cols-12 pt-10 pb-20 md:pt-20 md:pb-40">
          <div class="col-start-2 col-end-6">
            <p
              class="px-5 text-white font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              江越 さくら
            </p>
          </div>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer content-center">
            <a href="#modal25">
              <img src="/shodou/egoshi1.jpg" alt="works">
            </a>
          </div>
          <div id="modal25" class="modal">
            <div class="modal-box">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-40 w-28 col-start-2 col-end-7">
                  <img src="/shodou/egoshi1.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    この半年はコロナの流行で思うように活動できませんでした。今後は勢いよく活動したいという願いを込めました。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work25" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="bg-shodou2bg">
      <section class="relative">
        <div id="snow" class="absolute w-full h-full" />
        <h2 class="heading04 font-hina tracking-widest text-3xl lg:text-4xl mx-auto text-center py-12 text-shodou2">
          2、3回生
        </h2>
        <div id="work11">
          <div>
            <p
              class="text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              西 結衣子
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-6 cursor-pointer">
              <a href="#modal11">
                <img src="/shodou/nishi21.jpg" alt="works">
              </a>
            </div>
            <div class="z-10 col-start-8 col-end-12 cursor-pointer">
              <a href="#modal12">
                <img src="/shodou/nishi22.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal11" class="modal">
            <div class="modal-box content-center">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-64 col-start-3 col-end-7">
                  <img src="/shodou/nishi21.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    これは私の座右の銘です。今はコロナで思うようにいかないこともありますが、何事もポジティブにとらえて楽しむことが一番だと思うので書きました。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work11" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
          <div id="modal12" class="modal">
            <div class="modal-box content-center">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-64 w-24 col-start-3 col-end-7">
                  <img src="/shodou/nishi22.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    私の好きな歌の歌詞です。一度きりの人生なので楽しみましょう！！
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work11" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work13">
          <div>
            <p
              class="text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              西川 みのり
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-12 content-center md:col-start-4 col-end-7 cursor-pointer">
              <a href="#modal13">
                <img src="/shodou/nishikawa2.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal13" class="modal">
            <div class="modal-box content-center">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-64 col-start-3 col-end-7">
                  <img src="/shodou/nishikawa2.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    コロナ下でもこのような生活を営むことができるよう書きました。 楽しく生きよう 。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work13" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work33">
          <div>
            <p
              class="text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              河原 航太
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-12 content-center md:col-start-4 col-end-7 cursor-pointer">
              <a href="#modal33">
                <img src="/shodou/kawahara1.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal33" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/kawahara1.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  僕の誕生日が2月5日だったので百人一首の25首目をかな文字で書いてみました。この種は恋しい人と一種に夜を過ごしたいというような意味で僕にはそんな人はまだいませんがいつかできたらいいなーという思いで書きました。
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work33" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work34">
          <div>
            <p
              class="text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              谷 朱里
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-12 content-center md:col-start-4 col-end-7 cursor-pointer">
              <a href="#modal34">
                <img src="/shodou/tani2.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal34" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/tani2.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  題名とかは特にないのですが、
                  自分の好きな歌だったので書きました
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work34" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work35" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer content-center">
            <a href="#modal35">
              <img src="/shodou/yamamoto2.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              山本 優美
            </p>
          </div>
          <div id="modal35" class="modal">
            <div class="modal-box">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-40 w-28 col-start-2 col-end-7">
                  <img src="/shodou/yamamoto2.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    題 恋の歌より 一首
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work35" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work36" class="grid grid-cols-12 pt-10 pb-20 md:pt-20 md:pb-40">
          <div class="col-start-2 col-end-6">
            <p
              class="px-5 text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              福田 悠斗
            </p>
          </div>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer content-center">
            <a href="#modal36">
              <img src="/shodou/hukuda21.jpg" alt="works">
            </a>
          </div>
          <div id="modal36" class="modal">
            <div class="modal-box">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-40 w-28 col-start-2 col-end-7">
                  <img src="/shodou/hukuda21.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    こいけゆりこ
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work36" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work37">
          <div>
            <p
              class="text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              福田 悠斗
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-12 content-center cursor-pointer">
              <a href="#modal37">
                <img src="/shodou/hukuda22.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal37" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/hukuda22.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  牛のように飲み、馬のように食べる
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work37" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work38">
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-6 cursor-pointer">
              <a href="#modal38">
                <img src="/shodou/hukuda23.jpg" alt="works">
              </a>
            </div>
            <div class="z-10 col-start-6 col-end-12 cursor-pointer">
              <p
                class="px-5 text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
              >
                福田 悠斗
              </p>
            </div>
          </div>
          <div id="modal38" class="modal">
            <div class="modal-box content-center">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-56 w-20 col-start-3 col-end-7">
                  <img src="/shodou/hukuda23.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    さ行変格活用 終止形
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work38" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work14">
          <div>
            <p
              class="text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              牧野 雄斗
            </p>
          </div>
          <div>
            <p
              class="text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-5 lg:pt-10"
            >
              「四季の花」
            </p>
            <p
              class="px-10 text-shodou2 font-hina text-base md:text-lg lg:text-xl text-center pt-3 lg:pt-5"
            >
              四色の色紙にその季節を象徴する花を漢字で書きました。
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-6 cursor-pointer">
              <a href="#modal14">
                <img src="/shodou/makino31.jpg" alt="works">
              </a>
            </div>
            <div class="z-10 col-start-8 col-end-12 cursor-pointer">
              <a href="#modal15">
                <img src="/shodou/makino32.jpg" alt="works">
              </a>
            </div>
          </div>
          <div class="grid grid-cols-12 pt-5 pb-20 md:pt-10 md:pb-40">
            <div class="z-10 col-start-2 col-end-6 cursor-pointer">
              <a href="#modal16">
                <img src="/shodou/makino33.jpg" alt="works">
              </a>
            </div>
            <div class="z-10 col-start-8 col-end-12 cursor-pointer">
              <a href="#modal17">
                <img src="/shodou/makino34.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal14" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/makino31.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work14" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
          <div id="modal15" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/makino32.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work14" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
          <div id="modal16" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/makino33.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work14" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
          <div id="modal17" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/makino34.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work14" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <section class="relative">
        <div id="sakura" class="absolute w-full h-full" />
        <h2 class="heading05 font-hina tracking-widest text-3xl lg:text-4xl mx-auto text-center text-shodou4 pt-12">
          4回生
        </h2>
        <h6 class="font-hina tracking-widest text-xs lg:text-sm mx-auto text-center text-shodou4 py-2">
          卒業制作
        </h6>
        <div id="work18" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer content-center">
            <a href="#modal18">
              <img src="/shodou/akamine4.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-shodou4 font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              赤嶺 晴香
            </p>
          </div>
          <div id="modal18" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/akamine4.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  高校生の時によく聞いてた曲の名前を書きました。今を大切に前を向いて生きていこうと思わせるような好きな言葉がたくさんあり、これからも頑張っていこうという気持ちを込めました。
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work18" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work21" class="grid grid-cols-12 py-10 md:py-20">
          <p
            class="text-shodou4 font-hina text-base md:text-lg lg:text-xl col-start-2 col-end-5 text-center pt-20 lg:pt-56"
          >
            片山 雅紀子
          </p>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer content-center">
            <a href="#modal21">
              <img src="/shodou/katayama4.jpg" alt="works">
            </a>
          </div>
          <div id="modal21" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/katayama4.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  大学生活ではたくさんの方にお世話になりました！節目の年に改めて感謝の気持ちを文字にしてみました。本当にありがとうございました！
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work21" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work22" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer content-center">
            <a href="#modal22">
              <img src="/shodou/kenshin4.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-shodou4 font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              兼信 みのり
            </p>
          </div>
          <div id="modal22" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/kenshin4.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  聴牌しても和了らなきゃ意味がないので和了りたいです
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work22" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work23" class="grid grid-cols-12 py-10 md:py-20">
          <p
            class="text-shodou4 font-hina text-base md:text-lg lg:text-xl col-start-2 col-end-5 text-center pt-20 lg:pt-56"
          >
            田原 菜々花
          </p>
          <div class="z-10 col-start-6 col-end-12 cursor-pointer content-center">
            <a href="#modal23">
              <img src="/shodou/tahara4.jpg" alt="works">
            </a>
          </div>
          <div id="modal23" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/tahara4.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  ｢塵｣の内容によって色々な意味に捉えられるのがこの言葉の好きなところです。これからも小さな喜びや一つ一つのご縁を積み重ねていきたいです！
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work23" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work24" class="grid grid-cols-12 py-10 md:py-20">
          <div class="z-10 col-start-2 col-end-8 cursor-pointer content-center">
            <a href="#modal24">
              <img src="/shodou/matui4.jpg" alt="works">
            </a>
          </div>
          <div class="col-start-8 col-end-12">
            <p
              class="px-5 text-shodou4 font-hina text-base md:text-lg lg:text-xl text-center pt-20 lg:pt-56"
            >
              松井 裕太
            </p>
          </div>
          <div id="modal24" class="modal">
            <div class="modal-box">
              <div>
                <img src="/shodou/matui4.jpg" alt="works">
              </div>
              <div class="text-center pt-10">
                <a href="#work24" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work19">
          <div>
            <p
              class="text-shodou4 font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              大田 有希
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-12 content-center md:col-start-4 col-end-7 cursor-pointer">
              <a href="#modal19">
                <img src="/shodou/oota4.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal19" class="modal">
            <div class="modal-box content-center">
              <div class="grid grid-cols-12 py-10 md:py-20">
                <div class="h-64 col-start-3 col-end-7">
                  <img src="/shodou/oota4.jpg" alt="works">
                </div>
                <div class="col-start-8 col-end-12">
                  <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                    この言葉は『ハイキュー!!』に登場する北信介の言葉です。日々の物事を“ちゃんと”やって、彼のように自信を持って生きて行けたらなと思ってます。
                  </p>
                </div>
              </div>
              <div class="text-center pt-10">
                <a href="#work19" class="btnline font-hina">閉じる</a>
              </div>
            </div>
          </div>
        </div>
        <div id="work20">
          <div>
            <p
              class="text-shodou4 font-hina text-base md:text-lg lg:text-xl text-center pt-10 lg:pt-20"
            >
              大熊 眞歩
            </p>
          </div>
          <div class="grid grid-cols-12 py-10 md:py-20">
            <div class="z-10 col-start-2 col-end-12 content-center md:col-start-4 col-end-7 cursor-pointer">
              <a href="#modal20">
                <img src="/shodou/ooguma4.jpg" alt="works">
              </a>
            </div>
          </div>
          <div id="modal20" class="modal">
            <div class="modal-box content-center">
              <div>
                <img src="/shodou/ooguma4.jpg" alt="works">
              </div>
              <div>
                <p class="font-hina text-sm md:text-lg lg:text-xl text-center pt-5">
                  この言葉は限界はない、という意味です。自分で限界を決めず、どこまでも歩き続けていきたいです
                </p>
              </div>
              <div class="text-center pt-10">
                <a href="#work20" class="btnline font-hina">閉じる</a>
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
  border-color:#1a1a1a;
}

.heading03,
.heading04,
.heading05{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
}

.heading03::before,
.heading03::after {
  content: '';
  width: 70px;
  height: 3px;
  background-color: white;
}

.heading03::before,
.heading04::before,
.heading05::before{
  margin-right: 20px;
}
.heading03::after,
.heading04::after,
.heading05::after{
  margin-left: 20px;
}

.heading04::before,
.heading04::after {
  content: '';
  width: 70px;
  height: 3px;
  background-color: #51C2D5;
}

.heading05::before,
.heading05::after {
  content: '';
  width: 70px;
  height: 3px;
  background-color: #E397C6;
}
</style>
