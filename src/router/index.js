import { createRouter, createWebHistory } from 'vue-router'
import LogInView from "@/views/LogInView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogInView
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path:'/Home',
      name:'Home',
      component:()=>import('../views/HomeView.vue')
<<<<<<< HEAD
    }
=======
    },
    {
      path:'/Class',
      name:'Class',
      component:()=>import('../components/ClassTwo.vue')
    },
    {
      path:'/Edit',
      name:'Edit',
      component:()=>import('../components/Edit.vue')
    },
    {
      path:'/Class3',
      name:'ClassThree',
      component:()=>import('../components/ClassThree.vue')
    },
    {
      path:'/Edit/:i',
      name:'newEdit',
      component:()=>import('../components/Edit.vue')
    },
>>>>>>> 4ddbf2b (提交代码)
  ]
})

export default router
