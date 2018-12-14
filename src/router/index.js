import Vue from 'vue'
import Router from 'vue-router'
/** ***************** VIEWS ***************** **/
import Home from '@/views/Home'
import AboutMe from '@/views/AboutMe'
import Projects from '@/views/Projects'
import ContactMe from '@/views/ContactMe'
import Resume from '@/views/Resume'
import LearningVue from '@/views/LearningVue'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aboutme',
      name: 'About Me',
      component: AboutMe
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contactme',
      name: 'Contact Me',
      component: ContactMe
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/learningvue',
      name: 'Learning Vue',
      component: LearningVue
    }
  ],
  mode: 'history'
})
