<template>
  <div id="app">
    <div>
      <h1 class="shodoutitle font-hina text-5xl lg:text-7xl pt-5 pb-8 pl-5 text-left">
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
              「夜天」
            </p>
            <p
              class="text-white font-hina text-base md:text-lg lg:text-xl text-center pt-3 lg:pt-5"
            >
              夜天/ 女王蜂 より
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
        <h2 class="heading05 font-hina tracking-widest text-3xl lg:text-4xl mx-auto text-center text-shodou4 py-12">
          4回生
        </h2>
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
