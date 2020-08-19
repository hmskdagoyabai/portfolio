<template>
  <div class="about">
    <pageTitle title="About" fa_icon="coffee" caption="誰？なに？" />
    <!-- <img src="@/static/apple-touch-icon.png" /> -->

    <div class="container" id="card-footer">
      <div class="row">
        <!-- <div class="col">
        </div>-->
        <div class="col">
          <NomalContent :items="items" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SubTitle from "../components/SubTitle.vue";
import NomalContent from "../components/NomalContents.vue";
import PageTitle from "../components/PageTitle.vue";

export default {
  components: {
    PageTitle,
    // SubTitle,
    NomalContent,
  },
  data() {
    return {
      items: [
        {
          key: "はま",
          value:
            "私です。こんにちは。プログラムを書いたりベースを弾いたり電子工作をしたりアニメを観たり旅をしたりすることが好きです。",
        },

        {
          key: "はま浜辺",
          value:
            "はまの活動全般を包括する概念（？）でありYouTubeのチャンネル名でもあります。",
        },
        {
          key: "Seaside Works.",
          value:
            "はま浜辺と同義です。それっぽい英語の別名が欲しいと思って適当に付けました。英語表記の方がイケてる気がした時に使います。",
        },

        // {
        //   key: "楽しさ重視",
        //   value:
        //     "全ての活動は 「大変さ < 楽しさ」 であるべき、という基本方針に基づいています。ほぼ趣味なので当然だけど！",
        // },
        {
          key: "アンストッパブル濱本",
          value:
            "稀に登場するはまの別名義です。濱本が止まらない時などに使います。しかしここだけの話、僕の名前は濱本じゃないかもしれません。誰？",
        },
      ],
    };
  },
};
</script>


<style scoped>
.about img {
  width: 200px;
}

.about-body {
  /* margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 5%; */
}
</style>
