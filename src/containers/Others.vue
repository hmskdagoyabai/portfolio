<template>
  <div class="others">
    <SubTitle title="Others" caption="他にもあれこれやっています。" fa_icon="wifi" />
    <div class="box-wrapper">
      <WorkCard :item="tekuota" />
      <WorkCard :item="rina" />
      <WorkCard :item="moment" />
      <!-- <Tweet class="tweet" id="1278644790943350785"></Tweet> -->
    </div>
  </div>
</template>

<script>
import SubTitle from "../components//SubTitle.vue";
import WorkCard from "../components//WorkCard.vue";
// import { Tweet } from "vue-tweet-embed";

export default {
  components: {
    WorkCard,
    SubTitle,
    // Tweet,
  },
  data() {
    return {
      rina: {
        img: require("@/static/rina.jpg"),
        caption:
          "極稀に絵を描きます。めったに描きませんが、描いたらツイートします。",
        title: "絵",
        links: [
          {
            type: "Twitter",
            link: "https://twitter.com/ybybybmh/status/1278644790943350785",
          },
        ],
      },
      tekuota: {
        videoID: "Wkzxlhyrhq0",
        caption:
          "熊本に住んでいたころに４泊５日で東京や沼津を駆け回った時の動画です。GoProは優秀。",
        title: "【聖地巡礼？】オタク沼津･東京4泊5日旅！前編",
        links: [
          {
            type: "前編",
            link: "https://www.youtube.com/watch?v=Wkzxlhyrhq0",
          },
          {
            type: "後編",
            link: "https://www.youtube.com/watch?v=zzLMSEMqVHo",
          },
        ],
      },
      moment: {
        img:
          "https://pbs.twimg.com/media/DhF8MsXVQAAWy6U?format=jpg&name=small",
        caption:
          "Twitterでのあれこれをまとめたモーメントです。僕が弾いたり作ったり書いたり描いたりしている様子が雑に詰まっています。おすすめ。",
        title: "前回までのはま！",
        links: [
          {
            type: "Twitter",
            link: "https://twitter.com/i/events/1013725089253056512",
          },
        ],
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
