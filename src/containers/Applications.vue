<template>
  <div class="applications">
    <SubTitle
      title="Applications"
      caption="ソフト系のつくったものたちです。"
      fa_icon="file-invoice"
    />
    <div class="box-wrapper">
      <WorkCard v-for="work in works" :key="work" :item="work" />
      <Tweet
        class="tweet"
        v-for="tweet in tweets"
        :key="tweet"
        :id="tweet"
      ></Tweet>
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
        hannne: {
          img: require("@/static/hanne.png"),
          caption:
            "カタカナ語+名字のイカしたハンドルネームを生成してくれるサイトです。S3に公開したSPAとAPIGateway+Lambda+DynamoDBで作ったREST APIでできています。スクレイピングもしました。",
          title: "†ちょっと尖ったハンネメーカー†",
          links: [
            {
              type: "†ちょっと尖ったハンネメーカー†",
              link: "https://togattahanne.hamabe.info",
            },
            {
              type: "Qiita",
              link: "https://qiita.com/hamahamabe/items/06525aad177a3ead88b9",
            },
          ],
          keywords: [
            "Vue.js",
            "AWS",
            "S3",
            "CloudFront",
            "API Gateway",
            "Lambda",
            "DynamoDB",
          ],
        },
        portfolio: {
          img: require("@/static/hamabe.png"),
          caption:
            "このページです。フロントエンドは完全未経験だったので、Vue.jsの勉強を兼ねて1週間ほどで作成しました。AWS S3にデプロイし、Route53で独自ドメイン割当て、およびACM・CloudFrontによるSSL対応も行っています。",
          title: "ポートフォリオ はま浜辺",
          links: [
            {
              type: "Qiita",
              link: "https://qiita.com/hamahamabe/items/465a8ac1a5f929e10fed",
            },
            {
              type: "はま浜辺",
              link: "https://hamabe.info",
            },
          ],
          keywords: ["Vue.js", "ポートフォリオ", "フロントエンド", "AWS"],
        },
        others: {
          img:
            "https://pbs.twimg.com/profile_images/1257185648261267458/-VEM77wE_400x400.jpg",
          caption:
            "ほかにもいろいろ作ってますがTwitterでチラ見せしたりしなかったり程度のことが多いので、もし興味があればぜひフォローをお願いします！(普段はアニメとかの話ばっかりですが・・・)",
          title: "その他いろいろ",
          links: [
            {
              type: "Twitter",
              link: "https://twitter.com/ybybybmh",
            },
          ],
          keywords: ["Twitter", "オタク"],
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
