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
  <!-- <div class="navigation-header">
    <Menubar
      :model="menuItems"
      class="navigation-header__nav py-0 pl-0 pr-3 fixed w-full z-5 border-none border-noround"
    >
      <template #start>
        <RouterLink :to="RoutePath.Root">
          <img alt="Mabo E&A logo" src="@/assets/logo.png" class="logo p-2" />
        </RouterLink>
      </template>
      <template #end></template>
    </Menubar>
  </div> -->
</template>

<style lang="scss">
.navigation-header {
  .navigation-header__nav {
    &.p-menubar {
      background: var(--primary-color);
      height: 80px;
      top: 0;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

      .p-menuitem-separator {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        width: 1px;
        height: 40px;
        background: black;
      }
    }
  }
}

.logo {
  height: 80px;
  width: auto;
}
</style>
