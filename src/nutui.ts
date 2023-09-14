import '@nutui/nutui-taro/dist/style.css'
import { Button, Sku, Popup, InputNumber, Price } from '@nutui/nutui-taro'
// import { IconFont } from '@nutui/icons-vue-taro';
import { App } from 'vue'
const setNutUi = (app: App) => {
  app.use(Button).use(Sku).use(Popup).use(InputNumber).use(Price)
}
export default setNutUi
