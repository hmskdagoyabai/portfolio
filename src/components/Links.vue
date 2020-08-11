<template>
  <div class="links">
    <pageTitle title="Links" fa_icon="link" caption="各種リンクです" />

    <div class="link">
      <ul>
        <li>
          <a href="https://twitter.com/ybybybmh" class="link-icon">Twitter</a>
          <font-awesome-icon id="fa-icon" :icon="['fab', 'twitter']" />
        </li>
        <li>
          <a href="http://github.com/hmskdagoyabai" class="link-icon">github</a>
          <font-awesome-icon :icon="['fab', 'github']" id="fa-icon" />
        </li>
        <li />
        <li>
          <a href="https://note.com/hmskdagoyabai" class="link-icon">note</a>
          <font-awesome-icon icon="file" id="fa-icon" />
        </li>
        <li />
        <li>
          <a href="https://www.youtube.com/channel/UC3ZUoqmcSSYIuvhLg8U6eoQ" class="link-icon">YouTube</a>
          <font-awesome-icon :icon="['fab', 'youtube']" id="fa-icon" />
        </li>
        <li />
        <li>
          <a href="https://qiita.com/hamahamabe" class="link-icon">Qiita</a>
          <font-awesome-icon icon="search" id="fa-icon" />
        </li>
      </ul>
    </div>
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
.link{
  text-align: center;
}
</style>
