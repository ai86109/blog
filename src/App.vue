<template>
  <div>
    <p>Derek's Blog List</p>
    <Map />
    <Article />
  </div>
</template>

<script>
import Map from "@/components/Map.vue";
import Article from "@/components/Article.vue";

export default {
  components: {
    Map,
    Article,
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}
</style>
