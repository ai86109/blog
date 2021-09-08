<template>
  <div class="article-container">
    <p>依照時間順序</p>
    <div v-for="(article, index) in articles" :key="index" class="article">
      <div class="articleDate">{{ article.date }}</div>
      <a :href="article.url">{{ article.title }}</a>
    </div>
    <ArticleCountry />
  </div>
</template>

<script>
import { articles } from "@/data/data-travel.js";
import ArticleCountry from "@/components/ArticleCountry.vue";

export default {
  data() {
    return {
      articles,
    };
  },
  components: {
    ArticleCountry,
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  flex-direction: column;
}
.article,
p {
  display: flex;
  font-size: 18px;
  & > a {
    text-decoration: none;
    color: black;
  }
}
.articleDate {
  margin-right: 5px;
  background: lightcyan;
  width: 100px;
  text-align: center;
}
</style>
