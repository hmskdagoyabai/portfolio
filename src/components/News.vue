<template>
  <div class="news">
    <div class="container">
      <div class="row" v-for="item in News" :key="item">
        <div class="col-sm-2"></div>

        <div class="col-sm-3" id="key">
          <span id>{{ item.date }}</span>
        </div>
        <div class="col-sm-2" id="type">
          <a v-if="item.dist" href="#" @click="clickSmoothScroll(item.dist)">{{
            item.type
          }}</a>
          <a v-else>{{ item.type }}</a>
        </div>

        <div class="col-sm-3" id="body">{{ item.body }}</div>
        <div class="col-sm-2"></div>
      </div>

      <div v-if="News_old && showAll === false">
        <div class="row">
          <div class="col-sm" id="view">
            <a v-on:click="toggleNewsView()">全ての更新履歴を表示</a>
          </div>
        </div>
      </div>
      <div v-else-if="showAll">
        <div class="row" v-for="item in News_old" :key="item">
          <div class="col-sm-2"></div>

          <div class="col-sm-3" id="key">
            <span id>{{ item.date }}</span>
          </div>
          <div class="col-sm-2" id="type">
            <a
              v-if="item.dist"
              href="#"
              @click="clickSmoothScroll(item.dist)"
              >{{ item.type }}</a
            >
            <a v-else>{{ item.type }}</a>
          </div>

          <div class="col-sm-3" id="body">{{ item.body }}</div>
          <div class="col-sm-2"></div>
        </div>

        <div class="row">
          <div class="col-sm" id="view">
            <a v-on:click="toggleNewsView()">一部を表示</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    items: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showAll: false,
      News: [
        {
          date: "2021/5/21",
          type: "About",
          dist: "#about",
          body: "浜岡カルパッチョ が登場しました。",
        },
        {
          date: "2020/12/23",
          type: "Others",
          dist: "#others",
          body: "#1「やったねオブザイヤー」を追加しました。",
        },
        {
          date: "2020/9/3",
          type: "Applications",
          dist: "#applications",
          body: "†ちょっと尖ったハンネメーカー†を追加しました。",
        },
      ],
      News_old: [
        {
          date: "2020/8/22",
          type: "Others",
          dist: "#others",
          body: "Twitterモーメントを追加しました。",
        },
        {
          date: "2020/8/20",
          type: "Outputs",
          dist: "#outputs",
          body: "項目分けを修正しました。",
        },
        {
          date: "2020/8/20",
          type: "全体",
          body: "本ページを公開しました。",
        },
      ],
    };
  },
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
    toggleNewsView() {
      this.showAll = !this.showAll;
    },
  },
};
</script>

<style scoped>
.container {
  text-align: left;
}

.row {
  /* padding-top: 10px; */
}

#key {
  /* font-weight: normal; */
  /* font-size: 1.1em; */
  text-align: right;
}

#type {
  /* font-weight: normal; */
  font-size: 1.2em;
  text-align: center;
}

#body {
  font-size: 0.9em;
  color: rgb(65, 65, 65);
  padding: 5px 8px 5px 0;
  word-wrap: break-word;
  text-align: left;
}

@media screen and (max-width: 479px) {
  #body,
  #key {
    text-align: center;
  }
}

.news {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

a,
a:visited,
a:hover,
a:active {
  /* color: inherit; */
  text-decoration: none;
}

a {
  position: relative;
  /* display: inline-block; */
  text-decoration: none;
}
a::after {
  position: absolute;
  bottom: 2px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: rgba(234, 169, 96, 0.7) 30%;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}
a:hover::after {
  bottom: 0px;
  opacity: 1;
  visibility: visible;
}

#view {
  text-align: center;
  /* color: blue; */
  margin-top: 15px;
}
</style>