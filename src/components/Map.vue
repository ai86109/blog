<template>
  <div class="map">
    <!-- <div>
      <button>旅遊</button>
      <button>棒球</button>
    </div> -->
  </div>
</template>

<script>
import { countries } from "@/data/data-travel.js";
import VueScrollTo from "vue-scrollto";

export default {
  data() {
    return {
      countries,
    };
  },
  methods: {
    handleScroll(country) {
      let element = document.getElementById(country);
      VueScrollTo.scrollTo(element, 500, { offset: -45 });
    },
  },
  mounted() {
    const width = window.innerWidth > 900 ? 900 : window.innerWidth;
    const height = (window.innerWidth * 2) / 3 > 600 ? 600 : window.innerWidth;

    const svg = d3
      .select(".map")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const projection = d3.geoMercator().translate([width / 2, height / 1.4]);
    const path = d3.geoPath().projection(projection);

    const g = svg.append("g");

    d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((data) => {
      const countries = topojson.feature(data, data.objects.countries);

      g.selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", (d) =>
          this.countries.includes(d.properties.name) ? "visited" : null
        )
        .on("click", (d) => this.handleScroll(d.properties.name))
        .append("title")
        .text((d) => d.properties.name);
    });
  },
};
</script>

<style lang="scss">
.map {
  display: flex;
  align-items: center;
  flex-direction: column;
}

path {
  fill: #ccc;
  stroke: #999;
  &:hover {
    fill: darkcyan;
    cursor: pointer;
  }
}
.visited {
  fill: darkcyan;
}
</style>
