<template>
  <div class="row row-equal">
    <div class="flex xs12 lg6 xl6">
      <dev-performance-card
        :data="performanceData"
        :title="t('dev_manager.dashboard.dev_performance')"
        :loading="loading">
      </dev-performance-card>
    </div>
    <div v-for="devPerformance in performanceData">
      <div class="flex xs6 lg6 xl6">
        <dev-performance-card
          :data="[devPerformance]"
          :title="t('dev_manager.dashboard.dev_performance')"
          :small="true"
          :loading="loading">
        </dev-performance-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import axios from 'axios'
  import DevPerformanceCard from './DevPerformanceCard.vue'

  const { t } = useI18n()
  const loading = ref(true)
  let performanceData: any[] = [];

  onMounted(() => {
    loadPerformanceData()
  })

  async function loadPerformanceData() {
    loading.value = true
    const { data } = await axios.get('/report.json')
    performanceData = data;
    loading.value = false
  }
</script>
