<template>
  <Radar :options="props.chartOptions" :data="props.chartData" />
</template>

<script setup lang="ts">
  import { Radar } from 'vue-chartjs'
  import type { TChartOptions } from 'vue-chartjs/dist/types'
  import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
    } from 'chart.js'
  import { TRadarChartData } from '../../../data/types'

  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

  const props = defineProps<{
    chartData: TRadarChartData
    chartOptions?: TChartOptions<'radar'>
  }>()
</script>
