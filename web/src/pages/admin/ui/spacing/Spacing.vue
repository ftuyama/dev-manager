<template>
  <div class="spacing flex xs12 md12">
    <va-card>
      <va-card-title>{{ t('spacing.title') }}</va-card-title>
      <va-card-content>
        <spacing-playground :title="''" />
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">

  import SpacingPlayground from './SpacingPlayground.vue'

  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

</script>
