import components from './components/index'
import createInstance from './createInstance'

const install = (vue, opt = {}) => {
    //组件注册
  components.forEach(c => vue.component(c.name, c));
  vue.prototype.$sendMessage = createInstance
};

export default { install };
