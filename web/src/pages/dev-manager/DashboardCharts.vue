<template>
    <div class="row row-equal">
      <div class="flex xs12 lg6 xl6">
        <va-card v-if="radarChartData">
          <va-card-title>
            <h1>{{ t('dev_manager.dashboard.dev_performance') }}</h1>
          </va-card-title>
          <va-card-content>
            <va-chart class="chart" :data="radarChartData" type="radar" />
          </va-card-content>
        </va-card>
      </div>

    </div>
  </template>

  <script setup lang="ts">
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    import VaChart from '../../components/va-charts/VaChart.vue'

    const { t } = useI18n()

    const radarChartData = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running',
      ],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(220, 220, 220, 0.2)',
          borderColor: 'rgba(220, 220, 220, 1)',
          pointBackgroundColor: 'rgba(220, 220, 220, 1)',
          pointBorderColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220, 220, 220, 1)',
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(151, 187, 205, 0.2)',
          borderColor: 'rgba(151, 187, 205, 1)',
          pointBackgroundColor: 'rgba(151, 187, 205, 1)',
          pointBorderColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151, 187, 205, 1)',
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };
  </script>

  <style scoped>
    .chart {
      height: 400px;
    }
  </style>
