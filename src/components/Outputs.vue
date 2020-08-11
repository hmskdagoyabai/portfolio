<template>
  <div class="outputs">
    <pageTitle title="Outputs" fa_icon="th-list" caption="やったこと" />
    <div class="container">
      <div class="row">
        <div class="col">いろいろあるので以下の4種類に分けています。<span id="underline">興味のあるもの</span>をみてみてね。</div>
      </div>

      <div class="row">
        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#crafts')">
          <span id="outputs-sub-title">Crafts</span>
          <br />つくったもの
        </div>
        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#bass')">
          <span id="outputs-sub-title">Bass Plays</span>
          <br />弾いたもの
        </div>
        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#notes')">
          <span id="outputs-sub-title">Diary</span>
          <br />日々の記録
        </div>
        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#others')">
          <span id="outputs-sub-title">Others</span>
          <br />その他のいろいろ
        </div>
      </div>
    </div>

    <div class="crafts" id="crafts">
      <SubTitle title="Crafts" caption="つくったもの" />
      <div class="box-wrapper">
        <WorkCard v-for="item in works" :key="item.img" :item="item"></WorkCard>
        <WorkCard :item="YouTube.rina" />
        <WorkCard :item="YouTube.tenga" />
        <Tweet class="tweet" id="1261539238958362624"></Tweet>
        <WorkCard v-for="item in works" :key="item.img" :item="item"></WorkCard>
      </div>
    </div>

    <div class="bass" id="bass">
      <SubTitle title="Bass Plays" caption="弾いたもの" />
      <div class="box-wrapper">
        <WorkCard :item="YouTube.bass1" />
        <WorkCard :item="YouTube.bass2" />
        <Tweet class="tweet" id="1288503454613139456"></Tweet>
        <Tweet class="tweet" id="1061495510320594944"></Tweet>
        <Tweet class="tweet" id="1116571467649433600"></Tweet>
      </div>
    </div>

    <div class="notes" id="notes">
      <SubTitle title="Diary" caption="日々の記録" />
      <div class="box-wrapper">
    <Note ></Note>

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
import Note from "./Note.vue";
import { Tweet } from "vue-tweet-embed";

export default {
  components: {
    PageTitle,
    WorkCard,
    SubTitle,
    Tweet,
    Note
  },
  data() {
    return {
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
          ],
          keywords: [
            "Arduino",
            "3Dプリンタ",
            "ラブライブ！",
            "虹ヶ咲学園スクールアイドル同好会",
          ],
        },
        tenga: {
          videoID: "FXsCt0xqqbk",
          caption:
            "7色に光る「ゲーミングTENGA」を作りました。TENGAも7色に光ったほうが良いので…。",
          title: "ゲーミングTENGAの作り方",
          links: [
            {
              type: "YouTube",
              link: "https://youtu.be/FXsCt0xqqbk",
            },
          ],
          keywords: ["TENGA", "Arduino", "NeoPixcel"],
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
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
};
</script>



<style scoped>
#outputs-sub {
  margin-top: 20px;
}

#outputs-sub-title {
  font-family: "Recursive", sans-serif;
  font-size: 1.5em;
}


</style>
