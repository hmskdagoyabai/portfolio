<template>
  <div class="header">

    <div>
      <b-navbar toggleable="lg" type="light">
        <div id="brand_title" href="#" @click="clickSmoothScroll('#app')">
          <font-awesome-icon icon="wifi" /> Hama's Seaside Works.
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" @click="clickSmoothScroll('#app')">Top</b-nav-item>
            <b-nav-item href="#" @click="clickSmoothScroll('#about')">About</b-nav-item>
            <b-nav-item href="#" @click="clickSmoothScroll('#skill')">Skill</b-nav-item>

            <b-nav-item-dropdown text="Outputs">
              <b-dropdown-item href="#" @click="clickSmoothScroll('#crafts')">Crafts</b-dropdown-item>
              <b-dropdown-item href="#" @click="clickSmoothScroll('#bass')">Bass Plays</b-dropdown-item>
              <b-dropdown-item href="#" @click="clickSmoothScroll('#apps')">Applications</b-dropdown-item>
              <b-dropdown-item href="#" @click="clickSmoothScroll('#notes')">Diary</b-dropdown-item>
              <b-dropdown-item href="#" @click="clickSmoothScroll('#others')">Others</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="#" @click="clickSmoothScroll('#links')">Links</b-nav-item>
            <b-nav-item href="#" @click="clickSmoothScroll('#contact')">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    },
  },
};
</script>


<style>
.header {
  font-family: "M PLUS 1p", sans-serif;
  /* background-color:#ebbbbb; */
  background: linear-gradient(135deg, #fffafa, #bbe2eb);

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

#brand_title {
  font-family: "Recursive", sans-serif;
  font-size: 22px;
  color: rgb(43, 32, 18);
  margin-right: 30px;
  /* background-image: linear-gradient(transparent 70%, rgba(255, 205, 205, 0.7) 30%); */

  /* background-image: linear-gradient(transparent 70%, #ffcdcd 30%); */
}

#nav-collapse {
  margin-left: auto;
  margin-right: auto;
}

.dropdown-menu {
  background-color: #b2dde2;
}

.nav-link {
  font-size: 18px;
  color: antiquewhite;
}

#icon {
  margin: 5px;
}
</style>
