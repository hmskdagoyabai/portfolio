<template>
  <div class="workcard">
    <a v-bind:href="item.links[0].link">
      <img class="card-img" v-bind:src="item.img" />
    </a>
    <div class="card-content">
      <h1 class="card-title jp">{{item.title}}</h1>
      <p class="card-text">{{item.caption}}</p>link:
      <a
        v-for="link in item.links"
        :key="link"
        :link="link"
        v-bind:href="link.link"
        target="”_blank”"
      >{{link.type}} </a>
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
.card-lang {
  font-weight: 500;
}

.workcard {
  display: inline-block;
  margin: 30px 30px;
  width: 350px;
  /* height: 400px; */
  background: #fff;
  border-radius: 5px;
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

.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}

.card-link {
  border: 1px solid #00aaff;
  text-decoration: none;
  color: #00aaff;
  margin: 0 10px;
  padding: 5px 10px;
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
</style>
