<template>
  <div class="subtitle">
    <h4 id="subtitle_str">
      <font-awesome-icon id="fa-icon" v-bind:icon="fa_icon" />
      {{ title }}
    </h4>
    <div id="caption">{{caption}}</div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    caption: {
      type: String,
      default: "",
    },
    fa_icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.subtitle {
  padding: 65px 0 10px 0;
  margin: 40px 25% 20px 25%;
  position: relative;
  color: #333;
  border-bottom: #68b6c8 3px double;
}

@media screen and (max-width: 500px) {
  .subtitle {
    margin: 50px 10% 30px 10%;
  }
}

#subtitle_str {
  text-align: center;
  white-space: nowrap;
}

#caption {
  /* white-space: nowrap; */
  text-align: center;
}
</style>
