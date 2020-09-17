<template>
  <div class="img-item"
       :class="from">
    <div class="img-content">
      <img :src="imgSrc"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'theImg',
  data () {
    return {
      imgSrc: '',
      from: 'left'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common.scss";
.img-item {
  margin: 15px 10px;
  @include from;
  img {
    max-width: 200px;
  }
}
</style>