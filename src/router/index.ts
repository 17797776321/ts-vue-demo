import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Layout from '@/Layout/index.vue';
Vue.use(Router);
// 静态路由
export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Home/index.vue'),
      },
    ],
    meta: { title: '首页' },
  }
];
// 动态挂在路由
export const asyncRoutes: RouteConfig[] = [
  {
    path: ''
  }
];

const createRouter = () => new Router({
  scrollBehavior: (to, from, savePosition) => {
    if (savePosition) {
      return savePosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes,
});
const router = createRouter();
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher;
}

export default router;
