<template>
  <div class="text-item" :class="from">
    <div class="text-box">
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "theText",
  created() {},
  data() {
    return {
      message: "",
      from: "left",
    };
  },
};
</script>
<style lang="scss" scoped>
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.text-item {
  margin: 15px 10px;
  .text-box {
    display: inline-block;
    max-width: 70%;
    text-align: center;
    border: 1px solid rgb(216, 202, 202);
    border-radius: 4px;
    line-height: 20px;
    min-height: 20px;
    min-width: 50px;
    padding: 3px 10px;
  }
}
</style>