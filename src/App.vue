<template>
  <div id="app">
    <Header></Header>
    <div id="main-contents">
      <Top id="top"></Top>
      <About id="about"></About>
      <Skill id="skill"></Skill>
      <Outputs id="outputs"></Outputs>
      <Contact id="contact"></Contact>
      <Links id="links"></Links>
    </div>
    <Footer id="footer"></Footer>
  </div>
</template>



<script>
import Header from "./containers/Header.vue";
import Top from "./containers/Top.vue";
import Footer from "./containers/Footer.vue";
import About from "./containers/About.vue";
import Skill from "./containers/Skill.vue";
import Outputs from "./containers/Outputs.vue";
import Links from "./containers/Links.vue";
import Contact from "./containers/Contact.vue";

import "normalize.css";

export default {
  name: "App",
  components: {
    Top,
    Header,
    Footer,
    About,
    Skill,
    Outputs,
    Links,
    Contact,
  },
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
};
</script>


<style>
/* 
カラーコードメモ

・orange
#EAA960 
rgba(234, 169, 96, 1)
hsv(32,59,92)

・blue
#68B6C8
rgba(104, 182, 200, 1)
hsv(191,48,78)

・green
#B1D7D1
rgba(177, 215, 209, 1)
hsv(171,18,84)

・red
#EB9898
rgba(235, 152, 152, 1)
hsv(0,35,92)

・bg white
#F7F0EF
rgba(247, 240, 239, 1)
hsv(7,3,97)
 */

/* GoogleFont */
@import url("https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=M+PLUS+Rounded+1c&family=Recursive:wght@400&display=swap");

/* @import url("https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap"); */
/* @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"); */
/* @import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap"); */

#app {
  /* font-family: "Recursive", "M PLUS 1p", sans-serif; */
  font-family: "Recursive", "Kosugi Maru", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #f7f0ef; */
}

body:before {
  content: "";
  display: block;
  position: fixed;
  bottom: 0;
  z-index: -1;
  width: 100vw;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(247, 240, 239, 1),
      rgba(247, 240, 239, 0.3)
    ),
    url("static/bg_awashima.jpg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
}

.box-wrapper {
  display: flex;
  /* margin: 0; */
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  justify-content: center;
}

@media screen and (min-width: 850px) {
  .box-wrapper {
    padding: 0px 5% 0px 5%;
  }
}

.tweet,
.workcard {
  margin: 30px;
  width: 320px;
}

.tweet {
  display: inline-block;
  height: auto;

  /* background: #fff; */
  /* border-radius: 5px; */
  /* box-shadow: 0 2px 5px #ccc; */
}

#underline-o {
  font-size: 1.1em;
  background-image: linear-gradient(
    transparent 80%,
    rgba(234, 169, 96, 0.7) 30%
  );
}

#underline-b {
  font-size: 1.1em;
  background-image: linear-gradient(
    transparent 80%,
    rgba(104, 182, 200, 0.7) 30%
  );
}

#underline-g {
  font-size: 1.1em;
  background-image: linear-gradient(
    transparent 80%,
    rgba(177, 215, 209, 0.7) 30%
  );
}

#underline-r {
  font-size: 1.1em;
  background-image: linear-gradient(
    transparent 80%,
    rgba(235, 152, 152, 0.7) 30%
  );
}

/* 浮かせたいもの */
.tweet,
.workcard,
#outputs-sub,
#head-button,
.head-button-dropdown {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.tweet:hover,
.workcard:hover,
#outputs-sub:hover,
#head-button:hover,
.head-button-dropdown:hover {
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px);
}

@media screen and (max-width: 600px) {
  #main-contents {
    margin: 0px 5% 0px 5%;
  }
}

/* a:hover {
  background-image: linear-gradient(
    transparent 80%,
    rgba(104, 182, 200, 0.7) 30%
  );
} */
</style>



