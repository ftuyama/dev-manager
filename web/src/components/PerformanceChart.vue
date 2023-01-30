<template>
  <div>
    <canvas id="radar-chart" width="400" height="400"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'

export default {
  name: "RadarChart",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.chart = new Chart(document.getElementById("radar-chart"), {
      type: "radar",
      data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling"],
        datasets: [
          {
            label: "My First dev",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55]
          },
          {
            label: "My Second dev",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27]
          }
        ]
      }
    });
  },
  beforeUnmount() {
    this.chart.destroy();
  }
};
</script>

<style scoped>
canvas {
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
  height: 400px !important;
  width: 400px !important;
}
</style>
