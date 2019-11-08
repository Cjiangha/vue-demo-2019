//引入两个全局的
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'
import Home from '../pages/Home.vue'
import Category from '../pages/Category.vue';
import Buycart from '../pages/Buycart.vue';
import My from '../pages/My.vue';
import Xiangqing from "../pages/Xiangqing.vue";
import Buy from "../components/Buy.vue";
import Login from "../pages/Login.vue";
import xiangqingTable from "../components/xiangqingTable.vue";
Vue.use(VueRouter)
const routes = [
    // 初始值的To默认有
    {
        path: '/',
        redirect: '/main/home'
    },
    {
        path: '/main',
        name: 'main',
        component: Main,
        children: [{
            path: 'home',
            name: 'home',
            component: Home,
            // 别名
            alias: 'h',
        },
        {
            path: 'category',
            name: 'category',
            component: Category
        },
        {
            path: 'Buycart',
            name: 'Buycart',
            component: Buycart
        }, {
            path: 'My',
            name: 'My',
            component: My
        }
        ]
    }, {
        path: '/xiangqing',
        name: 'xiangqing',
        component: Xiangqing,
    }, {
        path: '/buy',
        name: 'buy',
        component: Buy
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }, {

        path: '/xiangqingTable',
        name: 'xiangqingTable',
        component: xiangqingTable
    }
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router;