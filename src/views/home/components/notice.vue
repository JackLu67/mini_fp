<template>
<div class="wrapper">
  <div class="notice-box">
    <img src="../../../assets/images/notice.png" alt="">
    <div class="title-box">
      <div class="img-box">
        <img src="../../../assets/images/tongzhi2.png" alt="">
      </div>
      <span class="title">
        慈利存款，年化利率3.9%，限量速购
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.notice-box {
  padding: 0 0.27rem;
  margin-bottom: 0.29rem;

  img {
    vertical-align: middle;
  }

  .title-box {
    display: inline-block;
    vertical-align: middle;
    font-family: PingFang_Medium;
    margin-left: 0.14rem;

    .img-box {
      display: inline-block;
      width: 0.58rem;
      height: 0.34rem;
      border-radius: 0.17rem;
      background: rgba(239, 66, 63, .1);
      text-align: center;
      line-height: .34rem;
      vertical-align: middle;
    }

    .title {
      margin-left: 0.14rem;
      font-size: 12px;
      color: #A77C43;
      vertical-align: middle;
    }
  }
}
</style>
