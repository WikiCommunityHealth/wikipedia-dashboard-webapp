<template>
  <LineChart :data="data" />
  <div v-if="query.loading">Loading...</div>
  <div v-else-if="data">
    <LineChart :data="data" />
  </div>
</template>

<script lang="ts">
import { defineComponent, queuePostFlushCb } from "vue";
import { gql } from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import * as Plotly from "plotly.js";
import LineChart from "../components/LineChart.vue";

export default defineComponent({
  name: "Home",
  components: {
    LineChart,
  },
  data: function () {
    return {
      data: null as Plotly.Data[] | null,
    };
  },
  mounted() {
    let xs = [] as number[];
    let ys = [] as number[];
    this.query.onResult((res) => {
      xs = res.data.allTestdata.map((d: any) => +d.id) as number[];
      ys = res.data.allTestdata.map((d: any) => +d.value) as number[];
      this.data = [
        {
          name: "pippo",
          x: xs,
          y: ys,
        },
      ];
    });

    setInterval(() => {
      this.data = [
        {
          name: "pippo",
          x: xs,
          y: ys.sort(() => Math.random() - 0.5),
        },
      ];
    }, 3000);
  },
  setup() {
    const query = useQuery(gql`
      query abc {
        allTestdata {
          id
          value
        }
      }
    `);

    return {
      query: query,
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