<template>
  <div class="outputs">
    <pageTitle title="Outputs" fa_icon="th-list" caption="やったこと" />

    <div class="crafts" id="crafts">
      <SubTitle title="Crafts" caption="つくったもの" />
      <div class="box-wrapper">
        <WorkCard v-for="item in works" :key="item.img" :item="item"></WorkCard>
        <YouTubeCard :item="YouTube.rina" />
        <Tweet class="tweet" id="1261539238958362624"></Tweet>
        <WorkCard v-for="item in works" :key="item.img" :item="item"></WorkCard>
      </div>
    </div>

    <div class="bass" id="bass">
      <SubTitle title="Bass Plays" caption="弾いたもの" />
      <div class="box-wrapper">
        <YouTubeCard :item="YouTube.bass1" />
        <YouTubeCard :item="YouTube.bass2" />
        <Tweet class="tweet" id="1288503454613139456"></Tweet>
      </div>
    </div>

    <div class="apps" id="apps">
      <SubTitle title="Applications" caption="つくったアプリ" />
      <div class="box-wrapper">
        <WorkCard v-for="item in works" :key="item.img" :item="item"></WorkCard>
      </div>
    </div>

    <div class="notes" id="notes">
      <SubTitle title="Diary" caption="日々の記録" />
      <div class="box-wrapper">
        <WorkCard v-for="item in works" :key="item.img" :item="item"></WorkCard>
      </div>
    </div>

    <div class="others" id="others">
      <SubTitle title="Others" caption="その他のあれこれ" />
      <div class="box-wrapper">
        <WorkCard v-for="work in works" :key="work.img" :item="work"></WorkCard>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "./PageTitle.vue";
import SubTitle from "./SubTitle.vue";
import WorkCard from "./WorkCard.vue";
import YouTubeCard from "./YouTubeCard.vue";
import { Tweet } from "vue-tweet-embed";

export default {
  components: {
    PageTitle,
    WorkCard,
    SubTitle,
    YouTubeCard,
    Tweet,
  },
  data() {
    return {
      YouTube: {
        rina: {
          img: require("@/static/board.jpg"),
          videoID: "0yT_qYHqlOU",
          caption:
            "ラブライブ！虹ヶ咲学園スクールアイドル同好会に登場する天王寺璃奈ちゃんが愛用している「オートエモーションコンバート璃奈ちゃんボード」を作成しました。Arduino,3Dプリンタなど",
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
          ],
        },
        bass1: {
          videoID: "ma5EGlU37A4",
          caption:
            "スラップメドレーです。これが一番再生されましたのですが、なぜか↑の埋め込みからだと再生できない？みたいなので↓のリンクからご覧ください(汗)",
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
            "Red Hot Chili Peppers より Stone Cold Bush のスラップソロの解説をしています。",
          title:
            "【ベース】誰でもかっこいいスラップソロが弾けるようになる解説！【Stone Cold Bush/Red Hot Chili Peppers】",
          links: [
            {
              type: "YouTube",
              link: "https://www.youtube.com/watch?v=cP8wMCgzKy0",
            },
          ],
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
          ],
        },
      },
    };
  },
};
</script>



<style>
.box-wrapper {
  display: flex;
  margin: 0;
  flex-wrap: wrap;

  width: 100%;
  justify-content: center;
}

.tweet {
  display: inline-block;
  margin: 30px 30px;
  width: 350px;
  height: auto;
  /* background: #fff; */
  /* border-radius: 5px; */
  /* box-shadow: 0 2px 5px #ccc; */
}
</style>
