<template>
  <div :id="id"></div>
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
    id: { type: String, required: true }
  },
  watch: {
    data(newData) {
      if (newData) {
        Plotly.newPlot(this.id, newData as Plotly.Data[]).then((g) => {
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
