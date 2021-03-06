import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import User from 'views/userInfo/User'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import details from 'components/detail/details'
Vue.use(Router)

// 配置路由
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: details
        }
      ]
    },
    {
      path: '/recommend/detail/:id',
      name: 'recommend',
      components: {
        'default': Recommend,
        'subPage': details
      }
    },
    {
      path: '/User',
      component: User
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
