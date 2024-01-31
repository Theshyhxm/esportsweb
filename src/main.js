import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import $ from 'jquery'
import "@/js/vendor/jquery-1.12.4.min.js"
import "@/js/app.min.js"
import "@/js/vscustom-carousel.min.js"
import "@/js/vs-cursor.min.js"
import "@/js/vsmenu.min.js"
import "@/js/imagesloaded.js"
import "@/js/ajax-mail.js"
import "@/js/main.js"
// import "@/js/login"
createApp(App).use(router).use($).mount('#app')
