import Main from "@/pages/Main";
import CardPage from "@/pages/CardPage";
import About from "@/pages/About";
import SingleCard from "@/pages/SingleCard";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/cards',
        component: CardPage
    },
    {
        path: '/about',
        component: About    
    },
    {
        path: '/cards/:id',
        component: SingleCard 
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;