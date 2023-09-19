<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RouteParameter } from '@/router/routes'
import { computed } from 'vue'
import { useSandwichesStore } from '@/stores/sandwiches'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { sandwiches } = useSandwichesStore()
const { t } = useI18n()

const sandwichId = route.params[RouteParameter.SandwichId] as string

const sandwich = computed(() => sandwiches.find((s) => `${s.id}` === sandwichId))
</script>

<template>
  <div>
    <h1>{{ sandwich?.name }}</h1>
    <div>
      <div class="flex">
        <div class="mr-5 text-center">
          <img :alt="sandwich?.name" :src="sandwich?.img" />
          <div class="mt-3">{{ sandwich?.description }}</div>
        </div>
        <div>{{ t('sandwiches.price', { price: sandwich?.price }) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>