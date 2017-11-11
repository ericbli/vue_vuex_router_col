import Vue from 'vue'
import Router from 'vue-router'
import Hellovuex from '@/components/Hellovuex'
import FirstRoute from '@/components/FirstRoute'
import FirstRouteChild from '@/components/FirstRouteChild'
import Users from '@/components/Users'
import News from '@/components/News'
import SourceSelection from  '@/components/SourceSelection'
import Newslist from  '@/components/Newslist'
import About from  '@/components/About'
import Home from  '@/components/Home'
import Translator from '@/components/Translator'
import TranslateForm from '@/components/TranslateForm'
import TranslateOutput from '@/components/TranslateOutput'
Vue.use(Router)

export default new Router({
  routes: [

    ////define root/////////
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    //////define  /home    ///////
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    ////////////
    {
      path: '/hellovuex',
      name: 'Hellovuex',
      component: Hellovuex
    },
///////////test//////
{
  path: '/translator',
  name: 'Translator',
  component: Translator
},

//////
{
  path: '/users',
  name: 'Users',
  component: Users
},
///////////////////////////////
///////////test////////////
{
  path: '/news',
  name: 'News',
  component: News
},
///////////test////////////
{
  path: '/about',
  name: 'About',
  component: About
},
////////////////

    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute,
      /////////////////////////////////////////
      children: [
        {
          path: 'child',
          component: FirstRouteChild
        }
      ]
    }
    ////////////////////////////////////////////


  ]
})
