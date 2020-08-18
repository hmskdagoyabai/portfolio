<template>
  <div class="outputs">
    <pageTitle title="Outputs" fa_icon="th-list" caption="やったこと" />
    <div class="container">
      <div class="row">
        <div class="col">
          いろいろあるので以下の5種類に分けています。
          <span id="underline-o">興味のあるもの</span>を覗いてみてください。
        </div>
      </div>

      <div class="row">
        <!-- Outputs サブリンク -->
        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#applicatioins')">
          <span id="outputs-sub-title">Applications</span>
          <br />つくったもの（ソフト系）
        </div>

        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#crafts')">
          <span id="outputs-sub-title">Crafts</span>
          <br />つくったもの（ハード系）
        </div>

        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#bass')">
          <span id="outputs-sub-title">Bass Plays</span>
          <br />弾いたもの
        </div>
      </div>
      <div class="row">
        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#notes')">
          <span id="outputs-sub-title">Diary</span>
          <br />日々の記録
        </div>

        <div class="col-md" id="outputs-sub" href="#" @click="clickSmoothScroll('#others')">
          <span id="outputs-sub-title">Others</span>
          <br />その他のあれこれ
        </div>
      </div>
    </div>

    <div class="applicationss" id="applications">
      <Applications></Applications>
    </div>
    <div class="crafts" id="crafts">
      <Crafts></Crafts>
    </div>

    <div class="bass" id="bass">
      <Bass></Bass>
    </div>

    <div class="notes" id="notes">
      <Note></Note>
    </div>

    <div class="others" id="others">
      <Others></Others>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import Note from "./Note.vue";
import Crafts from "./Crafts.vue";
import Applications from "./Applications.vue";
import Bass from "./Bass.vue";
import Others from "./Others.vue";
// import SubTitle from "../components//SubTitle.vue";
// import WorkCard from "./WorkCard.vue";
// import { Tweet } from "vue-tweet-embed";

export default {
  components: {
    PageTitle,
    // WorkCard,
    // SubTitle,
    // Tweet,
    Note,
    Crafts,
    Bass,
    Others,
    Applications,
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
