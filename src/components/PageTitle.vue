<template>
  <div class="title">
    <h3 id="title_str">
      <font-awesome-icon id="fa-icon" v-bind:icon="fa_icon" />
      {{ title }}
    </h3>
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
    fa_icon: {
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
.title {
  font-family: "Recursive", sans-serif;
  padding: 70px 0 20px 0;
  margin: 50px 15% 30px 15%;
  position: relative;
  color: #333;
  border-bottom: #eb9898 4px double;
  text-align: center;
}

@media screen and (max-width: 500px) {
  .title {
    margin: 50px 10% 30px 10%;
  }
}

#title_str {
  white-space: nowrap;
  text-align: center;
}

#caption {
  font-family: "Kosugi Maru", sans-serif;
}
</style>
