<template>
  <div class="skill">
    <pageTitle title="Skill" fa_icon="brain" caption="できること" />
    <!-- <p>
      <span id="underline-r">「完全に理解した」</span>ものから
      <span id="underline-g">「何もわからない」</span>ものまで。
    </p>-->

    <SubTitle title="Development " fa_icon="code" id="skill-development" />

    <NomalContent :items="Developments" />

    <!-- <div class="subtitle">
      <h4 id="subtitle_str">
        <font-awesome-icon :icon="['fab', 'adobe']" />&nbsp;Adobe
      </h4>
    </div>
    <NomalContent :items="Adobes" />-->

    <SubTitle title="Other" fa_icon="tags" id="skill-other" />
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
        { key: "OS", value: "Windows, Ubuntu, CentOS, RHEL", url: "" },

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
        {
          key: "Adobe Softwares",
          value: "Premiere, After Effects, Photoshop, Illustrator",
          url: "",
        },
      ],

      Others: [
        { key: "楽器", value: "Bass, Ukulele, Guitar", url: "" },

        { key: "料理", value: "オムライス", url: "" },
      ],
    };
  },
};
</script>


<style scoped>
#skill-development {
  padding: 10px 0 10px 0;
  margin: 40px 25% 20px 25%;
}
</style>
