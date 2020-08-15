<template>
  <div class="others">
    <SubTitle title="Others" caption="以上の項目のどれにもあてはまらないようなあれこれです。" fa_icon="wifi" />
    <div class="box-wrapper">
      <Tweet class="tweet" id="1278644790943350785"></Tweet>
      <WorkCard :item="tekuota" />
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
      tekuota: {
        videoID: "Wkzxlhyrhq0",
        caption: "旅",
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
