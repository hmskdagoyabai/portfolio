<template>
  <div class="applications">
    <SubTitle title="Applications" caption="ソフト系のつくったものたちです。" fa_icon="file-invoice" />
    <div class="box-wrapper">
      <WorkCard v-for="work in works" :key="work" :item="work" />
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
      tweets: [],

      works: {
        portfolio: {
          img: require("@/static/hamabe.png"),
          caption:
            "このページです。フロントエンドは完全未経験だったので、Vue.jsの勉強を兼ねて1週間ほどで作成しました。AWS S3にデプロイし、Route53で独自ドメイン割当て、およびACM・CloudFrontによるSSL対応も行っています。",
          title: "ポートフォリオ はま浜辺",
          links: [
            {
              type: "Qiita",
              link: "https://qiita.com/hamahamabe/items/9216df345bb908eb5199",
            },
          ],
          keywords: ["Vue.js", "ポートフォリオ", "フロントエンド", "AWS"],
        },

        // woork3: {
        //   img: require("@/static/view-o.jpg"),
        //   caption: "あああああああああああああああああああああああ",
        //   title: "dadadad",
        //   links: [
        //     {
        //       type: "Twitter",
        //       link: "https://twitter.com/home",
        //     },
        //   ],
        // },
        // work4: {
        //   img: require("@/static/board.jpg"),
        //   caption: "hohhogegege",
        //   title: "test",
        //   links: [
        //     {
        //       type: "YouTube",
        //       link: "https://youtu.be/0yT_qYHqlOU",
        //     },
        //     {
        //       type: "Qiita",
        //       link: "https://qiita.com/hamahamabe/items/9216df345bb908eb5199",
        //     },
        //   ],
        // },
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
