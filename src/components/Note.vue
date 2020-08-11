<template>
  <div id="note">
    noteの最新記事を自動で取得しています。
    <div class="box-wrapper">
      <WorkCard v-for="note in notes" :key="note.title" :item="note" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WorkCard from "./WorkCard.vue";

export default {
  components: {
    WorkCard,
  },
  name: "Note",
  data() {
    return {
      notes: [],
    };
  },

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
        console.log("status:", response.status); // 200
        console.log("body:", response.data); // response body.

        // レスポンスからnotesオブジェクトを整える
        var article_num = 6;
        for (let i = 0; i < article_num; i++) {
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

          this.notes.push(note);
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
  },
};
</script>