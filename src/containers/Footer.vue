<template>
  <div class="footer">
    <img src="@/static/apple-touch-icon.png" />
    <p>Copyright © 2020 Seaside Works. All Rights Reserved.</p>
  </div>
</template>

<script>
</script>


<style>
.footer {
  background-color: transparent;
  /* background: linear-gradient(90deg, #ffffff, #ebf7fa); */
  /* background: linear-gradient(135deg, #ffffff, rgba(247, 240, 239, 1)); */
  /* background-color: #f7f0ef; */

  position: relative;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  color: rgb(49, 49, 49);
  padding-bottom: 10px;
}

.footer img {
  height: 100%;
  padding: 15px;
  opacity: 0.5;
}
</style>
