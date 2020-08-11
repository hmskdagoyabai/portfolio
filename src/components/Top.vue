<template>
  <div class="top">
    <div class="banner">
      <img id="hamabe_img" src="../static/hamabe.png" />
    </div>
    <p id="intro">
      Welcome to
      <span id="underline">Hama's Seaside Works.</span>
    </p>

    <!-- <vue-typer
      :text="['Welcome to Hama\'s Seaside Works.']"
      class="seaside"
      :repeat="0"
    ></vue-typer> -->
  </div>
</template>


<script>
</script>


<style>
@media screen and (min-width: 479px) {
  #hamabe_img {
    margin: 80px 10px 10px 10px;
    width: 60%;
  }
}
@media screen and (max-width: 479px) {
  #hamabe_img {
    margin: 80px 10px 10px 10px;
    width: 90%;
  }
}

#intro {
  font-family: "Recursive", sans-serif;
  /* padding: 60px 0 20px 0; */
  position: relative;
  /* font-size: 2em; */
  color: #333;
  /* border-bottom: #eb9898 2px solid; */
  /* text-align: center; */
  /* white-space: nowrap; */
}

#underline {
  background-image: linear-gradient(
    transparent 70%,
    rgba(255, 205, 205, 0.7) 30%
  );
}
</style>
