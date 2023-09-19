<script setup lang="ts">
import { useSandwichesStore } from '@/stores/sandwiches'
import Card from 'primevue/card'
import { useI18n } from 'vue-i18n'
import { RouteName, RouteParameter } from '@/router/routes'

const { sandwiches } = useSandwichesStore()
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-wrap col-offset-3 col-6">
    <div class="col-4 p-2" :key="sandwich.id" v-for="sandwich in sandwiches">
      <RouterLink
        class="no-underline"
        :to="{
          name: RouteName.SandwichDetail,
          params: { [RouteParameter.SandwichId]: sandwich.id },
        }"
      >
        <Card>
          <template #title>{{ sandwich.name }}</template>
          <template #content>
            {{ t('sandwiches.price', { price: sandwich.price }) }}
          </template>
          <template #footer>
            <img :alt="sandwich.name" :src="sandwich.img" class="w-full" />
          </template>
        </Card>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>