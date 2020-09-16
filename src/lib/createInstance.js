import components from "./components/index";
import Vue from "vue";

let nId = 1;

export default function(options = {}) {
  //根据入参type获取组件
  const constructor = Vue.component(options.type),
    Instance = new constructor({
      data: options
    });
  Instance.id = nId++;
  //挂载
  Instance.vm = Instance.$mount("");
  document.getElementById("content").appendChild(Instance.vm.$el);
}
