<script setup lang="ts">
import { useSandwichesStore } from '@/stores/sandwiches'
import Card from 'primevue/card'
import { useI18n } from 'vue-i18n'

const { sandwiches } = useSandwichesStore()
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-wrap col-offset-3 col-6">
    <div class="col-4 p-2" :key="sandwich.id" v-for="sandwich in sandwiches">
      <Card>
        <template #title>{{ sandwich.name }}</template>
        <template #content>
          {{ t('sandwiches.price', { price: sandwich.price }) }}
        </template>
        <template #footer>
          <img :alt="sandwich.name" :src="sandwich.img" class="w-full" />
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>