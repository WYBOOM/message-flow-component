<template>
  <div id="app">
    <div class="message-content">
      <div class="top-bar">
        <span>啦啦啦</span>
      </div>
      <div class="content" id="content" ref="content"></div>
      <div class="input-bar">
        <div class="from">
          <label>
            <input name="from" type="radio" value="left" checked ref="left" />左边
          </label>
          <label>
            <input name="from" type="radio" value="right" />右边
          </label>
        </div>
        <div class="sendText">
          <input type="text" v-model="message" />
          <button @click="sendText">发送文字</button>
        </div>
        <div class="sendImg">
          <input type="file" accept="image/*" ref="img" @change="sendImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      from: "right", //消息显示位置 left/right
      message: "",
      imgSrc: "",
    };
  },
  methods: {
    send(options) {
      //获取设置的from
      const radios = document.getElementsByName("from");
      this.from = Array.from(radios).find((i) => i.checked).value;

      let params = {
        from: this.from,
      };
      Object.assign(params, options);

      //根据入参type来使用不同的组件
      this.$sendMessage(params);

      this.moveToBottom();
    },

    sendText() {
      this.send({
        type: "theText",
        message: this.message,
      });
    },

    //将文件转为base64，传入theImg组件呢
    sendImg() {
      const img = this.$refs.img.files[0],
        previewImg = document.querySelector("img");
      const fr = new FileReader();
      fr.onload = (re) => {
        this.imgSrc = re.target.result;
        this.send({
          type: "theImg",
          imgSrc: this.imgSrc,
        });
      };
      fr.readAsDataURL(img);
    },

    //移动聊天框至最底部
    moveToBottom() {
      this.$refs.content.scrollTop = 99999;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
<style lang="scss" scoped>
.message-content {
  margin: auto;
  width: 400px;
  height: 700px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  .top-bar {
    height: 50px;
    background: rgb(56, 50, 50);
    span {
      color: white;
      line-height: 50px;
    }
  }
  .content {
    height: calc(100% - 171px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .input-bar {
    height: 120px;
    border-top: 1px solid rgb(211, 188, 188);
    .sendText {
      margin-top: 5px;
    }
  }
}
</style>
