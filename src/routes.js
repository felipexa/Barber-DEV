import Vue from 'vue'
import Router from 'vue-router'
import BarberArea from '@/components/Barber/BarberArea.vue'
import Home from '@/components/Home/Home.vue'
import store from '@/store/store.js'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/barberArea',
        component: BarberArea,
        meta: {
            requiresAuth: true
        }
    },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/barberArea')
    } else {
        next()
    }
})

export default router;