<template>
  <div class="hello">
    <article class="card">
      <div class="card__header">
        <h3 class="card__title">{{item.msg}}</h3>
      </div>
      <div class="card__body">
        <p class="card__text">{{item}}</p>
        <p class="card__text -number">&yen; {{item.num}}</p>
      </div>
      <div class="card__footer">
        <p class="card__text">
          <a href="#" class="button -compact">正義Tシャツの詳細を見る</a>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    num: String,
    item: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.card {
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;
  padding: 5%;
  margin: 5%;

  
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
