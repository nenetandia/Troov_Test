import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42ec3314 = () => interopDefault(import('..\\pages\\Liste.vue' /* webpackChunkName: "pages/Liste" */))
const _615cd956 = () => interopDefault(import('..\\pages\\Objet.vue' /* webpackChunkName: "pages/Objet" */))
const _ea74dc50 = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _21cfc884 = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _85286168 = () => interopDefault(import('..\\pages\\UpdateObjet.vue' /* webpackChunkName: "pages/UpdateObjet" */))
const _7fa5ee61 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Liste",
    component: _42ec3314,
    name: "Liste"
  }, {
    path: "/Objet",
    component: _615cd956,
    name: "Objet"
  }, {
    path: "/Profile",
    component: _ea74dc50,
    name: "Profile"
  }, {
    path: "/Register",
    component: _21cfc884,
    name: "Register"
  }, {
    path: "/UpdateObjet",
    component: _85286168,
    name: "UpdateObjet"
  }, {
    path: "/",
    component: _7fa5ee61,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
