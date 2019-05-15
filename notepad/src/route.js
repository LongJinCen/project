import App from './App.vue'
import Home from './components/Home/Home.vue'
import Edit from './components/Edit/Edit.vue'

export const routes = [
    {
        path: '/app',
        component: App,
        children: [{
            path:'home',
            component: Home
        },{
            path: 'edit',
            component: Edit
        }]
    },
]