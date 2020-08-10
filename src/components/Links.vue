<template>
  <div class="links">
    <pageTitle title="Links" fa_icon="link" caption="各種リンクです" />

    <div class="link">
      <a href="http://twitter.com/shoma_h30" class="link-icon">Twitter</a>
      <font-awesome-icon id="fa-icon" :icon="['fab', 'twitter']" />
      <br />
      <a href="mailto:sho1228.k@gmail.com" class="link-icon">e-mail</a>
      <font-awesome-icon icon="envelope" id="fa-icon" />

      <br />
      <a href="http://github.com/shoma3571" class="link-icon">github</a>
      <font-awesome-icon :icon="['fab', 'github']" id="fa-icon" />

      <br />
      <a href="https://shoma3571.hatenablog.com/" class="link-icon">note</a>
      <font-awesome-icon icon="file" id="fa-icon" />

      <br />
            <a href="https://shoma3571.hatenablog.com/" class="link-icon">YouTube</a>
      <font-awesome-icon :icon="['fab', 'youtube']" id="fa-icon"/>
    </div>
          <a href="https://shoma3571.hatenablog.com/" class="link-icon">Qiita</a>
      <font-awesome-icon icon="search" id="fa-icon" />

      <br />
  </div>
</template>

<script>
import PageTitle from "./PageTitle.vue";

export default {
  components: {
    PageTitle,
  },
};
</script>


<style>
</style>
