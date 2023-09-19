<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div class="flex flex-column align-items-center">
    <h1 class="font-italic">{{ t('welcome.title') }}</h1>
    <div>{{ t('welcome.description') }}</div>
  </div>
</template>