import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "@/router";
import {createPinia} from "pinia";

import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

createApp(App).use(ViewUIPlus).use(createPinia()).use(router).mount('#app')
