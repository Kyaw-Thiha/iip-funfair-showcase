import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: 'sign-in',
        name: 'sign-in',
        component: () => import('pages/SignInPage.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import('pages/SignUpPage.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: 'products/:id',
        name: 'product-detail',
        component: () => import('src/pages/ProductDetailPage.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: 'purchased-tickets',
        name: 'purchased-tickets',
        component: () => import('src/pages/PurchasedTicketsPage.vue'),
        meta: { requiresAuth: false }, //Convert this to true
      },
      {
        path: 'my-shop',
        name: 'my-shop',
        component: () => import('src/pages/MyShopPage.vue'),
        meta: { requiresAuth: false }, //Convert this to true
      },
      {
        path: 'edit-shop',
        name: 'edit-shop',
        component: () => import('src/pages/EditShopPage.vue'),
        meta: { requiresAuth: false }, //Convert this to true
      },
      {
        path: 'sold-tickets',
        name: 'sold-tickets',
        component: () => import('src/pages/SoldTicketsPage.vue'),
        meta: { requiresAuth: false }, //Convert this to true
      },
      {
        path: 'ticket-management',
        name: 'ticket-management',
        component: () => import('src/pages/TicketManagementPage.vue'),
        meta: { requiresAuth: false }, //Convert this to false
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
