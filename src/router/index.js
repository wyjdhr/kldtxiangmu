import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import question from '@/components/question'
import score from '@/components/score'
Vue.use(Router)
export default new Router({
  routes: [
//  {
//  	//跟路径
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  },
    {
    	//跟路径
      path: '/',
      name: 'home',
      component: home
    },
    {
    	//跟路径
      path: '/question',
      name: 'question',
      component: question
    },
    {
    	//跟路径
      path: '/score',
      name: 'score',
      component: score
    },
    
  ]
})
