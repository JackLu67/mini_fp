<template>
  <div class="wrapper">
    <div class="status-box"></div>
    <div class="nav-box">
      <img src="../../assets/images/left.png" alt="" @click="back">
      <span>{{title}}</span>
      <img src="../../assets/images/search.png" alt="">
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    title: String
  },
  data() {
    return {
      
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: #FFF;
  .status-box {
    height: 0.34rem;
  }
  .nav-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.75rem;
    padding: 0 0.26rem;
    span {
      flex: 1;
      text-align: center;
      font-family: PingFang_Bold;
      color: #333333;
      font-size: 18px;
    }
    img {
      height: 0.3rem;
    }
  }
}
</style>
