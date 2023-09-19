<script setup lang="ts">
import { RouterView } from 'vue-router'
import { initToasts } from '@/composables/toast'
import { useUserStore } from '@/stores/user'
import Toast from 'primevue/toast'

initToasts()
</script>

<template>
  <Toast />
  <RouterView />
</template>

<style scoped></style>
