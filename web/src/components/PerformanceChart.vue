<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
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
    this.getReport(this.generateChart);
  },
  beforeUnmount() {
    this.chart.destroy();
  },
  methods: {
    generateChart(report) {
      this.report = report;
      this.chart = new Chart(document.getElementById("radar-chart"), {
        type: "radar",
        data: {
          labels: ["Coding", "Code Review", "Versatility", "Delivery", "Charisma", "Communication"],
          datasets: this.report
        }
      });
    },
    async getReport(callback) {
      try {
        const response = await fetch("/report.json");
        const jsonData = await response.json();
        callback(jsonData);
      } catch (error) {
        console.error(error);
      }
    }
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
