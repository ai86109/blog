<template>
  <div>
    <div v-for="(country, index) in countries" :key="index">
      <div :id="country" v-show="hasArticles.has(country)">
        <p>{{ country }}</p>
        <div v-for="(article, index) in articles" :key="index" class="article">
          <div class="article-block" v-if="article.country.includes(country)">
            <div class="article-date">{{ article.date }}</div>
            <a :href="article.url" target="_blank">{{ article.title }}</a>
            <p hidden>{{ hasArticles.add(country) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articles, countries } from "@/data/data-travel.js";

export default {
  data() {
    return {
      articles,
      countries,
      hasArticles: new Set([]),
    };
  },
};
</script>

<style lang="scss" scoped>
.article-block {
  display: flex;
  font-size: 18px;
  & > a {
    text-decoration: none;
    color: black;
  }
}
.article-date {
  margin-right: 5px;
  background: lightcyan;
}
</style>
