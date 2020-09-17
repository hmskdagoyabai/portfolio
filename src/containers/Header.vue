<template>
  <div class="header">
    <div>
      <b-navbar toggleable="lg" type="light">
        <div href="#" @click="clickSmoothScroll('#app')">
          <span id="brand_title">
            <!-- <font-awesome-icon icon="wifi" id="icon" /> -->
            はま浜辺
          </span>
          <span id="brand_subtitle">Hama's Seaside Works.</span>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item id="head-button" href="#" @click="clickSmoothScroll('#app')">Top</b-nav-item>
            <b-nav-item id="head-button" href="#" @click="clickSmoothScroll('#about')">About</b-nav-item>
            <b-nav-item id="head-button" href="#" @click="clickSmoothScroll('#skill')">Skill</b-nav-item>

            <b-nav-item-dropdown class="head-button-dropdown" text="Outputs">
              <b-dropdown-item id="head-button" href="#" @click="clickSmoothScroll('#outputs')">All</b-dropdown-item>
              <b-dropdown-item
                id="head-button"
                href="#"
                @click="clickSmoothScroll('#applications')"
              >Applications</b-dropdown-item>
              <b-dropdown-item
                id="head-button"
                href="#"
                @click="clickSmoothScroll('#crafts')"
              >Crafts</b-dropdown-item>
              <b-dropdown-item
                id="head-button"
                href="#"
                @click="clickSmoothScroll('#bass')"
              >Bass Plays</b-dropdown-item>
              <b-dropdown-item id="head-button" href="#" @click="clickSmoothScroll('#notes')">Diary</b-dropdown-item>
              <b-dropdown-item
                id="head-button"
                href="#"
                @click="clickSmoothScroll('#others')"
              >Others</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item id="head-button" href="#" @click="clickSmoothScroll('#contact')">Contact</b-nav-item>
            <b-nav-item id="head-button" href="#" @click="clickSmoothScroll('#links')">Links</b-nav-item>
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
  /* font-family: "M PLUS 1p", sans-serif; */
  /* background-color:#ebbbbb; */
  background: linear-gradient(90deg, #ffffff, #ebf7fa 80%, #88d4e6);
  /* background: linear-gradient(0deg, #f7f0ef, #f7f0ef); */
  /* background: transparent; */
  /* background-color: #f7f0ef; */

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

#brand_title {
  font-size: 1.2em;
  color: rgb(73, 68, 60);
  margin-right: 5px;
}
#brand_subtitle {
  font-size: 0.9em;
  color: rgb(85, 85, 85);
  margin-right: 30px;
}
@media screen and (max-width: 400px) {
  #brand_subtitle {
    display: none;
  }
}

#nav-collapse {
  margin-left: auto;
  margin-right: auto;
}

.nav-link {
  font-size: 1.1em;
  color: antiquewhite;
}

#icon {
  margin-right: 10px;
}

.head-button-dropdown {
  outline: none;
}
</style>
