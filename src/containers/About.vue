<template>
  <div class="about">
    <pageTitle title="About" fa_icon="coffee" caption="誰？なに？" />

    <!-- <div class="about-body">
      <span id="underline-b">
        はま浜辺
      </span> とは僕が良かれと思ってやったことたちの記録の場所です。
      <br />基本方針は
      <span id="underline-o">楽しさ重視</span>です。
    </div>-->
    <!-- <SubTitle title="Keywords" /> -->
    <NomalContent :items="items" />
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
            "このページの管理人です。プログラムを書いたりベースを弾いたり電子工作をしたりアニメを観たり旅をしたりしています。熊本出身です。こんにちは。",
        },

        {
          key: "はま浜辺",
          value:
            "2018年1月某日、「はま」が「ベースを弾く」という意味で「はまベ」（ベはカタカナ）という名前のYouTubeチャンネルを作ったのが始まりです。途中でなんとなく「はま浜辺」に改名し、今でははまの活動全般を包括する概念（？）となっています。",
        },
        {
          key: "Seaside Works.",
          value:
            "それっぽい英語の別名が欲しいと思って適当に付けました。はま浜辺と同義です。英語表記の方がイケてる気がした時に使います。",
        },

        {
          key: "楽しさ重視",
          value:
            "全ての活動は 「大変さ < 楽しさ」 であるべき、という基本方針に基づいています。ほぼ趣味なので当然だけど！",
        },
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
.about-body {
  /* margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 5%; */
}
</style>
