<template>
  <div class="skill">
    <pageTitle title="Skill" fa_icon="brain" caption="できること" />

    <NomalContent v-for="item in items" :key="item.msg" :item="item" />

  </div>
</template>

<script>
import PageTitle from "./PageTitle.vue";

import NomalContent from "./NomalContents.vue";
export default {
  components: {
    PageTitle,
    NomalContent,

  },
  data() {
    return {
      items: [
        {
          title: "ああaaaあ",
          caption: "123",
        },
        {
          title: "いいい",
          caption: "123456",
        },
        {
          title: "うsdうう",
          caption: "璃奈ちゃんボードを制作したのでその様子をYouTubeに公開しました。みんな観てくれよな！！！サプライズ(？)もあるよ。",
        },
        {
          title: "eee",
          caption: "12789",
        },
      ],
    };
  },
};
</script>


<style>
</style>
