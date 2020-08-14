<template>
  <div class="top">
    <div class="banner">
      <img id="hamabe_img" src="../static/hamabe.png" />
    </div>
    <p id="welcome">
      <span id="underline-o">はま浜辺</span>へようこそ！
      <!-- <br />Welcome to
      <span id="underline-b">Seaside Works.</span>-->
    </p>

    <!-- <vue-typer
      :text="['Welcome to Hama\'s Seaside Works.']"
      class="seaside"
      :repeat="0"
    ></vue-typer>-->
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
    margin: 100px 0px 10px 0px;
    width: 100%;
  }
}

#welcome {
  font-size: 1.2em;
}
</style>
