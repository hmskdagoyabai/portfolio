<template>
  <div class="top">
    <div class="banner">
      <img id="hamabe_img" src="../static/hamabe.png" />
    </div>
    <div class="news">
      <h5 id="subtitle">
        <font-awesome-icon id="fa-icon" icon="wifi" />&nbsp;
        更新情報
      </h5>
    </div>
    <!-- <lu id="caption">
      <li>
        <a href="#" @click="clickSmoothScroll('#outputs')">hoge</a>にhugaを追加しました
      </li>
      <li>
        <a href="#" @click="clickSmoothScroll('#crafts')">hoge</a>
        にhugaを追加しました2
      </li>
    </lu>-->
    <News :items="News"></News>
  </div>
</template>


<script>
import News from "../components/News.vue";

export default {
  components: {
    News,
  },
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
  data() {
    return {
      News: [
        { key: "OS", value: "Windows, Ubuntu, CentOS, RHEL", url: "" },

        {
          key: "言語",
          value: "Python, C, html, javascript, java, Googe Apps Script ",
          url: "",
        },
      ],
    };
  },
};
</script>


<style>
@media screen and (min-width: 479px) {
  #hamabe_img {
    margin: 80px 10px 10px 10px;
    width: 60%;
  }
}
@media screen and (max-width: 479px) {
  #hamabe_img {
    margin: 100px 0px 10px 0px;
    width: 100%;
  }
}

#welcome {
  font-size: 1.2em;
}

#subtitle {
  margin: 20px 35% 20px 35%;
  position: relative;
  color: #333;

  border-bottom: rgba(234, 169, 96, 1) 3px double;
}

@media screen and (max-width: 500px) {
  #subtitle {
    margin: 20px 15% 20px 15%;
  }
}
</style>
