<template>
  <div class="skill">
    <pageTitle title="Skill" fa_icon="brain" caption="できること" />
    <p>
      <span id="underline-r">「完全に理解した」</span>ものから
      <span id="underline-g">「何もわからない」</span>ものまで。
    </p>
    <SubTitle title="Development " fa_icon="code" />

    <NomalContent :items="Developments" />

    <!-- <div class="subtitle">
      <h4 id="subtitle_str">
        <font-awesome-icon :icon="['fab', 'adobe']" />&nbsp;Adobe
      </h4>
    </div>
    <NomalContent :items="Adobes" />-->

    <SubTitle title="Other" fa_icon="tags" />
    <NomalContent :items="Others" />
  </div>
</template>

<script>
import PageTitle from "../components//PageTitle.vue";
import NomalContent from "../components//NomalContents.vue";
import SubTitle from "../components//SubTitle.vue";

export default {
  components: {
    PageTitle,
    NomalContent,
    SubTitle,
  },
  data() {
    return {
      Developments: [
        {
          key: "言語",
          value: "Python, C, html, javascript, java, Googe Apps Script ",
          url: "",
        },
        {
          key: "ツール・フレームワーク",
          value:
            "AWS,  Git, MySQL, docker, flask, Vue.js, Arduino, Raspberry Pi, Fusion360",
          url: "",
        },
        { key: "OS", value: "Windows, Ubuntu, CentOS", url: "" },
      ],

      Others: [
        { key: "Music", value: "Bass, Ukulele", url: "" },
        {
          key: "Adobe",
          value: "Premiere, After Effects, Photoshop, Illustrator",
          url: "",
        },
      ],
    };
  },
};
</script>


<style>
</style>
