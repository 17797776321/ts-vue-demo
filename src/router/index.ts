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
        component: () => import('@/views/Home.vue'),
      },
    ],
    meta: { title: '首页' },
  }
];
// 动态挂在路由
export const asyncRoutes: RouteConfig[] = [
  // 个人介绍
  {
    path: '/personal-center',
    component: Layout,
    meta: { title: '个人中心' },
    children: [
      {
        path: 'personal-intro',
        component: () => import('@/views/Personal-Intro/index.vue')
      }
    ]
  },
  // 技术储备
  {
    path: '/technology-center',
    component: Layout,
    meta: { title: '技术储备' },
    children: [
      // 前端
      {
        path: 'front',
        component: () => import('@/views/Technology-Front/index.vue')
      }
    ]
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
