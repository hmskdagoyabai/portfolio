<template>
  <div class="crafts">
    <SubTitle title="Crafts" caption="つくったものたちです。" fa_icon="ruler-combined" />
    <div class="box-wrapper">
      <WorkCard :item="portfolio" />
      <WorkCard :item="YouTube.rina" />
      <WorkCard :item="YouTube.tenga" />
      <Tweet class="tweet" v-for="tweet in tweets" :key="tweet" :id="tweet"></Tweet>
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
      tweets: [
        "1259419595019976704",
        "1013414593773748224",
        "1261539238958362624",
        "1068140620084994050",
      ],
      YouTube: {
        rina: {
          videoID: "0yT_qYHqlOU",
          caption:
            "ラブライブ！虹ヶ咲学園スクールアイドル同好会に登場する天王寺璃奈ちゃんが愛用している「オートエモーションコンバート璃奈ちゃんボード」を作成しました。Qiitaの解説も併せてどうぞ！",
          title: "璃奈ちゃんボードを作ろう",
          links: [
            {
              type: "YouTube",
              link: "https://youtu.be/0yT_qYHqlOU",
            },
            {
              type: "Qiita",
              link: "https://qiita.com/hamahamabe/items/9216df345bb908eb5199",
            },
            {
              type: "Twitter",
              link: "https://twitter.com/ybybybmh/status/1225060324400746496",
            },
          ],
          keywords: ["Arduino", "3Dプリンタ", "ラブライブ！", "虹ヶ咲"],
        },
        tenga: {
          videoID: "FXsCt0xqqbk",
          caption:
            "7色に光る「ゲーミングTENGA」を作りました。TENGAが7色に光ったほうが楽しいと思ったので…。",
          title: "ゲーミングTENGAの作り方",
          links: [
            {
              type: "YouTube",
              link: "https://youtu.be/FXsCt0xqqbk",
            },

            {
              type: "Twitter",
              link: "https://twitter.com/ybybybmh/status/1254358289015398400",
            },
          ],
          keywords: ["Arduino", "NeoPixcel", "TENGA"],
        },
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
        },
      },
      portfolio: {
        img: require("@/static/hamabe.png"),
        caption:
          "このページです。フロントエンドは完全未経験だったので、Vue.jsの勉強を兼ねて1週間ほどで作成しました。AWS S3にデプロイし、Route53で独自ドメイン割当て、およびACM・CloudFrontによるSSL対応も行っています。",
        title: "ポートフォリオ はま浜辺",
        links: [
          {
            type: "",
            link: "https://hmsk.work/",
          },
          {
            type: "Qiita",
            link: "https://qiita.com/hamahamabe/items/9216df345bb908eb5199",
          },
        ],
        keywords: ["Vue.js", "ポートフォリオ", "フロントエンド", "AWS"],
      },

      works: {
        work1: {
          img: require("@/static/bg_awashima.jpg"),
          caption:
            "Arduinoを使ってラブライブ！虹ヶ咲学園スクールアイドル同好会に登場する璃奈ちゃんボードを作成しました。",
          title: "test",
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
        work2: {
          img: require("@/static/rina.jpg"),
          caption:
            "Arduinoを使ってラブライブ！虹ヶ咲学園スクールアイドル同好会に登場する璃奈ちゃんボードを作成しました。",
          title: "あいう",
          links: [
            {
              type: "YouTube",
              link: "https://twitter.com/home",
            },
            {
              type: "YouTube",
              link: "https://twitter.com/home",
            },
          ],
        },
        woork3: {
          img: require("@/static/view-o.jpg"),
          caption: "あああああああああああああああああああああああ",
          title: "dadadad",
          links: [
            {
              type: "Twitter",
              link: "https://twitter.com/home",
            },
          ],
        },
        work4: {
          img: require("@/static/board.jpg"),
          caption:
            "ラブライブ！虹ヶ咲学園スクールアイドル同好会に登場する天王寺璃奈ちゃんが愛用している「オートエモーションコンバート璃奈ちゃんボード」を作成しました。Arduino,3Dプリンタなど",
          title: "test",
          links: [
            {
              type: "YouTube",
              link: "https://youtu.be/0yT_qYHqlOU",
            },
            {
              type: "Qiita",
              link: "https://qiita.com/hamahamabe/items/9216df345bb908eb5199",
            },
          ],
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
