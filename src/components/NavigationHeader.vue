<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { RoutePath } from '@/router/routes'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const menuItems = ref([
  {
    separator: true,
  },
  {
    label: t('menu.welcome'),
    to: RoutePath.Root,
  },
])
</script>

<template>
  <Menubar :model="menuItems" class="navigation-header__nav">
    <template #start>
      <RouterLink :to="RoutePath.Root">
        <img alt="Duvels Broodje logo" src="@/assets/logo.png" class="logo" />
      </RouterLink>
    </template>
  </Menubar>
</template>

<style lang="scss">
.navigation-header__nav {
  &.p-menubar {
    background: var(--primary-color);
    height: 80px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border: none;
  }
}

.logo {
  height: 80px;
  width: auto;
  padding: 0.5rem;
}
</style>
