<template>
  <div id="app">
    <Header></Header>
    <Top id="top"></Top>
    <About id="about"></About>
    <Skill id="skill"></Skill>
    <Outputs id="outputs"></Outputs>
    <Links id="links"></Links>
    <Contact id="contact"></Contact>
    <Footer id="footer"></Footer>
  </div>
</template>



<script>
import Header from "./components/Header.vue";
import Top from "./components/Top.vue";
import Footer from "./components/Footer.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Outputs from "./components/Outputs.vue";
import Contact from "./components/Contact.vue";
import Links from "./components/Links.vue";

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
    Contact,
    Links,
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
/* GoogleFont */
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Sawarabi+Gothic&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&family=Sawarabi+Mincho&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Sawarabi+Gothic&family=Sawarabi+Mincho&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Recursive&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Recursive&display=swap");


#app {
  font-family: "Kosugi Maru", sans-serif;
  /* font-family: 'Recursive', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #f7f1f0; */
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
      rgba(247, 241, 240, 0.7),
      rgba(247, 241, 240, 0.4)
    ),
    url("static/bg_awashima.jpg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
