# message-flow-component

> 消息流处理

## 演示

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

![test.png](https://github.com/WYBOOM/message-flow-component/blob/master/src/assets/test.png "test")

## 说明

全局注册几个渲染不同消息类型的组件，在 vue 原型链上绑定`$sendMessage(options)`方法,根据 options 传参的不同，实例化不同组件，添加到 dom 上。

> 方法入参对象说明

|    键值    | 值类型 |                                    说明                                    | 默认值 |
| :--------: | :----: | :------------------------------------------------------------------------: | :----: |
|    type    | String | 发送的消息类型，可选值：theText/theImg/theSystemInfo(值为 vue 组件的 name) |   无   |
|    from    | String |                     发送消息的位置，可选值：left/right                     |   无   |
|  message   | String |                    type 为 theText 可用，发送的消息内容                    |   无   |
|   imgSrc   | String |                    type 为 theImg 可用，发送的图片地址                     |   无   |
| systemInfo | String |                 type 为 theSystemInfo 可用，发送的系统通知                 |   无   |
