<template>
  <LineChart :data="dataset" :id="'linechart1'" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as Queries from "@/utils/apollo/queries";
import { Data } from "plotly.js";
import LineChart from "../components/LineChart.vue";

export default defineComponent({
  name: "Home",
  components: {
    LineChart,
  },
  data: function () {
    return {
      dataset: null as Data[] | null,
    };
  },
  mounted() {
    let xs = [] as number[];
    let ys = [] as number[];

    this.query.onResult((res) => {
      xs = res.data.allTestdata.map(d => d.id ? +d.id : 0) as number[];
      ys = res.data.allTestdata.map(d => d.value ? +d.value : 0) as number[];
      this.dataset = [
        {
          name: "pippo",
          x: xs,
          y: ys,
        },
      ];
    });

    setInterval(() => {
      this.dataset = [
        {
          name: "pippo",
          x: xs,
          y: ys.sort(() => Math.random() - 0.5),
        },
      ];
    }, 3000);
  },
  setup() {
    return {
      query: Queries.getAllTestData()
    };
  },
});
</script>

<style lang="scss" scoped>
#test-char {
  height: 600px;
  width: 90vw;
  margin: 5vw;
}
</style>