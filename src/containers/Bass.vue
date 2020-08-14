<template>
  <div class="bass">
    <SubTitle title="Bass Plays" caption="弾いたもの" fa_icon="guitar" />
    <!-- ベースを弾きます。<spam id="underline-r">ラブライブ！</spam>の曲が多いです。 -->
    <div class="box-wrapper">
      <WorkCard :item="YouTube.bass1" />
      <WorkCard :item="YouTube.bass2" />
      <Tweet class="tweet" id="1288503454613139456"></Tweet>
      <Tweet class="tweet" id="1061495510320594944"></Tweet>
      <WorkCard :item="YouTube.bass3" />

      <Tweet class="tweet" id="1116571467649433600"></Tweet>
    </div>
  </div>
</template>

<script>
import SubTitle from "../components//SubTitle.vue";
import WorkCard from "../components//WorkCard.vue";
import { Tweet } from "vue-tweet-embed";

export default {
  components: {
    WorkCard,
    SubTitle,
    Tweet,
  },
  data() {
    return {
      YouTube: {
        bass1: {
          videoID: "ma5EGlU37A4",
          caption:
            "スラップメドレーです。これが一番再生されたのですが、なぜかPCからだと↑の埋め込みで再生できないようなので、お手数ですが↓のリンクからご覧ください(汗)",
          title: "【ベース】スラップがかっこいい曲メドレー【弾いてみた】",
          links: [
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=ma5EGlU37A4",
            },
          ],
          keywords: ["スラップメドレー", "Bass"],
        },
        bass2: {
          videoID: "cP8wMCgzKy0",
          caption:
            "Red Hot Chili Peppers より Stone Cold Bush のスラップソロの解説をしています。（練習すれば）誰でも弾けます！",
          title:
            "スラップソロが弾けるようになる解説！【Stone Cold Bush/Red Hot Chili Peppers】",
          links: [
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=cP8wMCgzKy0",
            },
          ],
          keywords: ["レッチリ", "Bass", "解説"],
        },
        bass3: {
          videoID: "sNavGVog6YI",
          caption: "Welcome to A・ZU・NAランド",
          title:
            "Dream Land！Dream World！(A・ZU・NA from ラブライブ！虹ヶ咲学園スクールアイドル同好会)",
          links: [
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=sNavGVog6YI",
            },
          ],
          keywords: ["ラブライブ！", "虹ヶ咲", "A・ZU・NA"],
        },
      },

      works: {
        work1: {
          img: require("@/static/bg_awashima.jpg"),
          caption:
            "Arduinoを使ってラブライブ！虹ヶ咲学園スクールアイドル同好会に登場する璃奈ちゃんボードを作成しました。",
          title: "璃奈ちゃんボードの作り方",
          links: [
            {
              type: "YouTube",
              link: "https://twitter.com/home",
            },
            {
              type: "Qiita",
              link: "https://twitter.com/home",
            },
          ],
          keywords: ["aaa", "bbb", "ccc", "ddd"],
        },
      },
    };
  },
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
};
</script>



<style scoped>
</style>
