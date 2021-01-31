<template>
  <div id="note">
    <SubTitle
      title="Diary"
      :caption="
        'noteの最新記事を' + article_num + '件自動で取得し表示しています。'
      "
      fa_icon="book"
    />

    <div class="box-wrapper">
      <WorkCard v-for="note in notes" :key="note.title" :item="note" />
      <!-- <WorkCard :item="andmore" /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WorkCard from "../components//WorkCard.vue";
import SubTitle from "../components//SubTitle.vue";

export default {
  components: {
    WorkCard,
    SubTitle,
  },
  name: "Note",
  data() {
    return {
      notes: [],
      article_num: 4,
      andmore: {
        img: require("@/static/yabaki.png"),
        caption:
          "noteのマガジン「やば記」では日記を書いています。はてなブログ「やばグ」は初代のブログで、オタク話をよく書いていました。",
        title: "and more ...",
        links: [
          {
            type: "やば記",
            link: "https://note.com/hmskdagoyabai/m/m1bb8fc89e6cb",
          },
          {
            type: "やばグ",
            link: "http://hmskdagoyabai.hatenablog.com/",
          },
        ],
      },
    };
  },
  methods: {},
  mounted: function () {
    // 参考 https://alliance7.blogspot.com/2019/01/google-formaxioscros.html
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        CORS_PROXY +
          "https://note.com/api/v2/creators/hmskdagoyabai/contents?kind=note&page=1"
      )
      // thenで成功した場合の処理をかける
      .then((response) => {
        // レスポンスからnotesオブジェクトを整える

        for (let i = 0; i < this.article_num; i++) {
          var note = {};
          note.title = response.data.data.contents[i].name;
          note.img = response.data.data.contents[i].eyecatch;
          note.caption =
            response.data.data.contents[i].body.substr(0, 75) + " …";
          note.links = [];
          note.links.push({
            type: "note",
            link:
              "https://note.com/hmskdagoyabai/n/" +
              response.data.data.contents[i].key,
          });
          note.keywords = [];

          for (
            let hi = 0;
            hi < response.data.data.contents[i].hashtags.length;
            hi++
          ) {
            note.keywords.push(
              response.data.data.contents[i].hashtags[hi].hashtag.name.substr(1)
            );
          }
          note.keywords.push(
            response.data.data.contents[i].publishAt.substr(0, 10)
          );

          this.notes.push(note);
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
  },
};
</script>

<style scoped>
</style>