import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/normalize.css'
//引入elementui组件 从elementui中引出Table
import ElementUI,{Table} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


//注意，这里是处理table宽度报错的问题
const fixElTableErr = table => {
  const oldResizeListener = table.methods.resizeListener
  table.methods.resizeListener = function () {
    window.requestAnimationFrame(oldResizeListener.bind(this))
  }
}

// ！！！！一定要在Vue.use之前执行此函数
fixElTableErr(Table)

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

