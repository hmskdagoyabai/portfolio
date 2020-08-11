<template>
  <div class="about">
    <pageTitle title="About" fa_icon="coffee" caption="なに？誰？" />

    <div class="container">
      <div class="row">
        <div class="col-4">aa</div>
        <div class="col-4">ii</div>
        <div class="col-4">uu</div>
      </div>
      <div class="row">
        <div class="col-6">ee</div>
        <div class="col-6">oo</div>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-3">ii</div>
        <div class="col-3">uu</div>
        <div class="col-3"></div>
      </div>
      <div class="row">
        <div class="col-12">kk</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "./PageTitle.vue";

export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      items: [
        {
          msg: "ああaaaあ",
          num: "123",
        },
        {
          msg: "いいい",
          num: "123456",
        },
      ],
    };
  },
};
</script>


<style>

</style>
