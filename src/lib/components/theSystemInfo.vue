<template>
  <div class="systemInfo-item">
    <span class="systemInfo-content">
      {{systemInfo}}
    </span>

  </div>
</template>

<script>
export default {
  name: 'theSystemInfo',
  data () {
    return {
      systemInfo: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../common.scss";
.systemInfo-item {
  margin: 15px 10px;
  .systemInfo-content {
    display: inline-block;
    padding: 3px 5px;
    line-height: 13px;
    font-size: 10px;
    border-radius: 3px;
    color: #fff;
    max-width: 70%;
    background: rgb(216, 206, 206);
  }
}
</style>