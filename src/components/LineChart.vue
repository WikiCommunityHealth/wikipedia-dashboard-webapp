<template>
  <p>Ciao da linechart</p>
  <div id="linechart"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as Plotly from "plotly.js";

export default defineComponent({
  name: "LineChart",
  data: function () {
    return {
      graph: undefined as Plotly.PlotlyHTMLElement | undefined,
    };
  },
  props: {
    data: Array,
  },
  watch: {
    data(newData) {
      if (newData) {
        console.log(newData);
        Plotly.newPlot("linechart", this.data as Plotly.Data[]).then((g) => {
          this.graph = g;
        });
      }
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
