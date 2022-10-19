import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Teams from './components/Teams.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard,
            name: 'home'
        },
        {
            path: '/about',
            component: About,
            name: 'about',
        },
        {
            path: '/projects',
            component: Projects,
            name: 'projects'
        },
        {
            path: '/teams',
            component: Teams,
            name: 'teams'
        }
    ]
})