<template>
  <div class="nomalcontent">
    <div class="container">
      <div class="row" v-for="item in items" :key="item">
        <div class="col-sm-2"></div>

        <div class="col-sm-3" id="key">
          <span id>{{ item.key }}</span>
        </div>
        <div class="col-sm-5" id="value" v-if="item.url">
          <a :href="item.url" target="_blank" rel="noopener noreferrer">
            <span v-if="item.value">{{ item.value }}</span>
            <span v-else>{{ item.url }}</span>
          </a>
        </div>
        <div v-else class="col-sm-5" id="value">{{ item.value }}</div>
        <div class="col-sm-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NomalContent",
  props: {
    items: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  text-align: left;
}

.row {
  padding-top: 20px;
}

#key {
  /* font-weight: normal; */
  font-size: 1.1em;
  text-align: right;
}

#value {
  font-size: 0.9em;
  color: rgb(65, 65, 65);
  padding: 5px 8px 5px 0;
  word-wrap: break-word;
  text-align: left;
}

@media screen and (max-width: 479px) {
  #value,
  #key {
    text-align: center;
  }
}

.nomalcontent {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
}
</style>