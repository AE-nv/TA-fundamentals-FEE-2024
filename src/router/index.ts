import { createRouter, createWebHistory } from 'vue-router'
import { RouteName, RoutePath } from '@/router/routes'
import Welcome from '@/views/WelcomePage.vue'
import Layout from '@/views/BaseLayout.vue'
import SandwichesOverview from '@/views/SandwichesOverview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.Root,
      component: Layout,
      children: [
        {
          path: RoutePath.Root,
          name: RouteName.Welcome,
          component: Welcome,
        },
        {
          path: RoutePath.Sandwiches,
          name: RouteName.Sandwiches,
          component: SandwichesOverview,
        },
      ],
    },
  ],
})

export default router
