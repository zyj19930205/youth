import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PhotoBox from '../components/PhotoBox'
import PhotoBox2 from '../components/PhotoBox2'
import PhotoBox3 from '../components/PhotoBox3'
import PhotoBox4 from '../components/PhotoBox4'
import PhotoBox5 from '../components/PhotoBox5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/FirstStep',
          name: 'FirstStep',
          component: PhotoBox
        },
        {
          path: '/SecondStep',
          name: 'SecondStep',
          component: PhotoBox2
        },
        {
          path: '/ThirdStep',
          name: 'ThirdStep',
          component: PhotoBox3
        },
        {
          path: '/FourthStep',
          name: 'FourthStep',
          component: PhotoBox4
        },
        {
          path: '/FifthStep',
          name: 'FifthStep',
          component: PhotoBox5
        }
      ]
    }
  ]
})
