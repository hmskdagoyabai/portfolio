<template>
  <div class="links">
    <pageTitle title="Links" fa_icon="link" caption="各種リンクたち" />
    <NomalContent :items="items" />
  </div>
</template>

<script>
import PageTitle from "../components//PageTitle.vue";
import NomalContent from "../components//NomalContents.vue";

export default {
  components: {
    NomalContent,
    PageTitle,
  },
  data() {
    return {
      items: [
        { key: "Twitter", url: "https://twitter.com/ybybybmh" },
        {
          key: "YouTube",
          url: "https://www.youtube.com/channel/UC3ZUoqmcSSYIuvhLg8U6eoQ",
        },
        {
          key: "GitHub",
          url: "https://github.com/hmskdagoyabai",
        },

        {
          key: "Qiita",
          url: "https://qiita.com/hamahamabe",
        },
        {
          key: "note",
          url: "https://note.com/hmskdagoyabai",
        },
      ],
    };
  },
};
</script>


<style>
.links {
  /* padding-bottom: 25%; */
}
</style>
