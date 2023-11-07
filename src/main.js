import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/router';
import store from '@/store';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
