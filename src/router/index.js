import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import RhymeOpposite from '@/components/RhymeOpposite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path:'/rhyme-opposite',
      name: 'RhymeOpposite',
      component: RhymeOpposite
    }
  ]
})
