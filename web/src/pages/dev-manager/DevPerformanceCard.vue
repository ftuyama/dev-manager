<template>
  <va-card-content>
    <va-inner-loading :loading="loading" style="width: 100%">
      <va-card>
        <va-card-title>
          <h1>{{ title }}</h1>
        </va-card-title>
        <va-card-content>
          <va-chart class="chart"
            :class="{ 'small': small }"
            :data="{ labels: performanceMetrics, datasets: props.data }"
            type="radar"
           />
        </va-card-content>
      </va-card>
    </va-inner-loading>
  </va-card-content>
</template>

<script setup lang="ts">
  import { performanceMetrics } from '../../data/performance'
  import VaChart from '../../components/va-charts/VaChart.vue'

  const props = defineProps<{
    data: any[]
    title: string
    small?: boolean
    loading: boolean
  }>()
</script>

<style scoped>
  .chart {
    height: 500px;
  }

  .small {
    height: 300px;
    width: 300px;
  }

  .inner-loading {
    height: 100%;
  }
</style>
