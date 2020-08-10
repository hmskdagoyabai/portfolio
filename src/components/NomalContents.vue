<template>
  <div class="nomalcontent">
      
          <span id="title">{{item.title}}</span>
    <span id="caption">  {{item.caption}}</span>
  </div>
</template>

<script>
export default {
  name: "NomalContent",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
#title {
    font-size: 20px;
}

.caption {
    font-size: 15px;
}
</style>