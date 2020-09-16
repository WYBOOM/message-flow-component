<template>
  <div class="img-item">
        <div class="img-content">
        <img :src="imgSrc" height="200" alt="">
        </div>
  </div>
</template>

<script>
export default {
    name:'theImg',
    data(){
        return{
            imgSrc:''
        }
    }
};
</script>

<style lang="scss" scoped>
.img-item {
  margin: 15px 10px;
}
</style>