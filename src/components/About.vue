<template>
  <div class="about">
    <pageTitle title="About" fa_icon="coffee" caption="なに？誰？"/>





  </div>
</template>

<script>
import PageTitle from "./PageTitle.vue";
// import HelloWorld from "./HelloWorld.vue";
export default {
  components: {
    PageTitle,
    // HelloWorld,
  },
    data() {
    return {
      items: [
        {
          msg : "ああaaaあ",
          num : "123"
        },{
          msg : "いいい",
          num : "123456"
        },{
          msg : "うsdうう",
          num : "123789"
        },{
          msg : "eee",
          num : "12789"
        },

      ]

    }
  },
};
</script>


<style>

.box-wrapper{
  display: flex;
  margin: 0;
  flex-wrap: wrap;

  width: 100%;
  justify-content:center;
}

</style>
