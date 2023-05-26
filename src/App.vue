<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import router from './router';
import store from './store';

export default {
  name: 'App',
  created() {
    router.beforeEach((to, from, next) => {
      // 判断路由是否需要登录
      const requireAuth = to.meta.requireAuth;
      // 判断用户是否已经登录
      const isAuthentivcated = store.state.isAuthentivcated;
      if (requireAuth && !isAuthentivcated) {
        next('/login')
      } else {
        next()
      }
    })
  }
}
</script>
