<template>
    <div class="dashboard">
        <dashboard-charts />
    </div>
  </template>

  <script setup lang="ts">
    import { ref } from 'vue'

    import DashboardCharts from './DashboardCharts.vue'
  </script>

  <style lang="scss">
    .row-equal .flex {
      .va-card {
        height: 100%;
      }
    }

    .dashboard {
      .va-card {
        margin-bottom: 0 !important;
        &__title {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  </style>
