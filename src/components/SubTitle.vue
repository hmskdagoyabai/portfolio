<template>
  <div class="subtitle">
    <h4 id="subtitle_str">{{ title }}</h4>
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
  },
};
</script>

<style  scoped>
.subtitle {
  font-family: "Recursive", sans-serif;
  padding: 60px 0 20px 0;
  margin: 40px 25% 40px 25%;
  position: relative;
  /* font-size: 2em; */
  color: #333;
  border-bottom: #eb9898 2px solid;
  /* text-align: center; */
  /* white-space: nowrap; */
}

#subtitle_str {
  /* font-family: 'Recursive', sans-serif; */
  /* min-width: 150px; */
  text-align: center;
  white-space: nowrap;
}

#caption {
  font-family: "Kosugi Maru", sans-serif;
  white-space: nowrap;
    text-align: center;
}
</style>
