<template>
  <div class="title">
    <h3 id="title_str">
      <font-awesome-icon id="fa-icon" v-bind:icon="fa_icon" /> {{ title }}


    </h3>
    <div id="caption">{{caption}}</div>


  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    fa_icon: {
      type: String,
      default: "",
    },
    caption: {
      type: String,
      default: "",
    },
  },
};
</script>

<style  scoped>
.title {
  font-family: 'Recursive', sans-serif;
  padding: 70px 0 20px 0;
  margin: 50px 15% 50px 15%;
  position: relative;
  /* font-size: 2em; */
  color: #333;
  border-bottom: #eb9898 4px double;
  text-align: center;
  
}

/*ウィンドウ幅が最大479pxまでの場合->スマホ用*/
/* @media screen and (max-width: 479px) { 
#fa-icon{
     display:none;
}
} */



#title_str {
  /* font-family: 'Recursive', sans-serif; */
  /* min-width: 150px; */
  white-space: nowrap;
  text-align: center;
}

#caption{
font-family: 'Kosugi Maru', sans-serif;
white-space: nowrap;
}
</style>
