<template>
<div v-if="isShow" class="wrapper">
  <div class="load-box">
  </div>
  <div class="load-content">
    <img src="../../assets/images/loading.gif" alt="">
    <span>加载中</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    isShow: Boolean
  },
  data() {
    return {}
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .load-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .2);
    z-index: 9999;
  }

  .load-content {
    position: fixed;
    width: 1.4rem;
    height: 1.4rem;
    left: 50%;
    top: 40%;
    margin-left: -.7rem;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    z-index: 9999;

    span {
      margin-top: 0.17rem;
      color: #FFF;
    }
  }
}
</style>
