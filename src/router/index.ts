import { createRouter, createWebHistory } from 'vue-router'
import { RouteName, RouteParameter, RoutePath } from '@/router/routes'
import Welcome from '@/views/WelcomePage.vue'
import Layout from '@/views/BaseLayout.vue'
import SandwichesOverview from '@/views/SandwichesOverview.vue'
import SandwichDetail from '@/views/SandwichDetail.vue'

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
          children: [
            {
              path: '',
              name: RouteName.Sandwiches,
              component: SandwichesOverview,
            },
            {
              path: `:${RouteParameter.SandwichId}`,
              name: RouteName.SandwichDetail,
              component: SandwichDetail,
            },
          ],
        },
      ],
    },
  ],
})

export default router
