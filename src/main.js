import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from "vue-i18n"
import us from "@/assets/lang/us.json"
import ir from "@/assets/lang/ir.json"

const messages = {
    "us" : us,
    "ir" : ir
}

const i18n = createI18n({
    locale: "us",
    fallbackLocale: "ir",
    messages
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount("#app")