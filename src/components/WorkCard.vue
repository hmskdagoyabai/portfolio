<template>
  <div class="workcard">
    <!-- videoIDがあるならYouTube埋め込み -->
    <div class="youtube" v-if="item.videoID">
      <iframe
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        v-bind:src="'https://www.youtube.com/embed/' + item.videoID"
      ></iframe>
    </div>

    <!-- 画像がある場合画像埋め込み -->
    <div v-else-if="item.img">
      <a v-bind:href="item.links[0].link"  target="”_blank”">
        <img class="card-img" v-bind:src="item.img" />
      </a>
    </div>


    <div class="card-content">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="card-title jp">{{item.title}}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="card-text">{{item.caption}}</p>
          </div>
        </div>

        <div class="row">
          <div class="col" v-for="link in item.links" :key="link" :link="link">
            <div class="card-link">
              <a v-bind:href="link.link" target="”_blank”">{{link.type}}</a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <span class="card-keywords">
              <span
                v-for="(keyword, index) in item.keywords"
                :key="keyword"
                :keyword="keyword"
              >
                <a v-if="index!=0">,</a>
                <a>{{keyword}}</a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style  scoped>
.workcard {
  display: inline-block;
  margin: 30px 30px;
  width: 320px;
  /* height: auto; */
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  margin: 2.5%;
  border-radius: 5px 5px 0 0;
  width: 95%;
  height: 200px;
  object-fit: cover;

  display: block;
  max-width: 100%;

  overflow: hidden;
}

.youtube {
  margin: 2.5%;
  border-radius: 5px 5px 0 0;
  width: 95%;
  height: 200px;
  object-fit: cover;
  display: block;
  max-width: 100%;
  overflow: hidden;
}

.card-content {
  padding: 15px 15px 8px 15px;

}
.card-title {
  font-size: 20px;
  color: #333;
}

.card-keywords {
  color: #777;
  font-size: 12px;
  text-align: right;
}

.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}

.card-link {
  margin: 5px 5px 15px 5px;
  padding: 5px 5px;
  /* border-radius: 5px; */
}

.card__header {
  position: relative;
}

.card__title {
  padding: 1rem 1rem 0;
  font-size: 1.25rem;
}

.card__thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
}

.card__image {
  width: 50%;
  height: 50%;
}

.card__body {
  padding: 1rem;
}

.card__text {
  font-size: 0.75rem;
}

.card__text + .card__text {
  margin-top: 0.5rem;
}

.card__text.-number {
  text-align: right;
}

.card__footer {
  padding: 1rem;
  border-top: 1px solid #ddd;
}

iframe {
  width: 100%;
  height: 200px;
}


/* .workcard {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .3s;
    transition: all .3s;
}

.workcard:hover {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
} */
</style>
