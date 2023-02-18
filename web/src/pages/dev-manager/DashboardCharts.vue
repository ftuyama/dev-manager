<template>
  <div class="row row-equal">
    <div class="flex xs12 lg6 xl6">
      <va-card-content>
        <va-inner-loading :loading="loading" style="width: 100%">
          <va-card v-if="radarChartData">
            <va-card-title>
              <h1>{{ t('dev_manager.dashboard.dev_performance') }}</h1>
            </va-card-title>
            <va-card-content>
              <va-chart class="chart" :data="radarChartData" type="radar" />
            </va-card-content>
          </va-card>
        </va-inner-loading>
      </va-card-content>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import VaChart from '../../components/va-charts/VaChart.vue'
  import axios from 'axios'

  const { t } = useI18n()
  const loading = ref(false)
  let radarChartData = {
    labels: ["Coding", "Code Review", "Versatility", "Delivery", "Charisma", "Communication"],
    datasets: [],
  };

  onMounted(() => {
    loadRadarChartData()
  })

  async function loadRadarChartData() {
    loading.value = true
    const { data } = await axios.get('/report.json')
    loading.value = false
    radarChartData['datasets'] = data;
  }
</script>

<style scoped>
  .chart {
    height: 400px;
  }

  .inner-loading {
    height: 100%;
  }
</style>
