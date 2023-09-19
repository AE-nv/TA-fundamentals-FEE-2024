<script setup lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue'
</script>

<template>
  <NavigationHeader>
    <template #title>
      <div class="header-title"></div>
    </template>
    <template #subtitle>
      <div class="header-subtitle inline-block"></div>
    </template>
    <template #actions>
      <div class="header-actions flex gap-3"></div>
    </template>
  </NavigationHeader>
  <main>
    <RouterView />
  </main>
</template>
<style scoped></style>
