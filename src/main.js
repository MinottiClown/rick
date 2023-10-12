import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


app.use(ElementPlus)
app.mount('#app')
