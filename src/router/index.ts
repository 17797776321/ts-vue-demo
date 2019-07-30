import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import Layout from '@/Layout/index.vue';
Vue.use(Router);
// 静态路由
export const constantRoutes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/Redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    meta: { title: '登陆', hidden: true }
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/Login/auth-redirect.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页', hidden: true }
      },
    ],
    meta: { hidden: true }
  }
];
// 动态挂在路由
export const asyncRoutes: RouteConfig[] = [
  // 个人中心
  {
    path: '/personal-center',
    component: Layout,
    redirect: '/personal-center/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/PersonalCenter/index.vue'),
        meta: { title: '个人中心' }
      }
    ],
    meta: { title: '个人中心', icon: 'menu' }
  },
  // 技术中心
  {
    path: '/technology',
    component: Layout,
    redirect: '/technology/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Technology/index.vue'),
        meta: { title: '技术中心' }
      }
    ],
    meta: { title: '技术中心', icon: 'menu' }
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
