<template>
  <div class="wrapper">
    <div class="pro-box">
      <div class="item" v-for="i in 10" :key="i" @click="handleItme">
        <div class="left">
          <p class="title">财政部促地方支出加快，谋稳税源房产税渐行渐近</p>
          <p class="sub-title">
            <span>财经新闻</span>
            <span>浏览12</span>
          </p>
        </div>
        <div class="right">
          <img src="../../../assets/images/bannar@2x.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    console.log(this.list)
  },
  methods: {
    moreNews(url) {
      this.$router.push(url)
    },
    handleItme() {
      this.$router.push('/newsDetail')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/css/mixin.scss';
.wrapper {
  padding: 0 0.27rem;
}
.pro-box {
  max-height: calc(100vh - 4rem);
  background: #ffffff;
  border-radius: 0.14rem;
  box-shadow: 0 0 0.07rem 0px rgba(203, 203, 203, 0.95);
  overflow: hidden;
  overflow-y: auto;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.17rem;
    padding-bottom: 0.34rem;
    padding-left: 0.17rem;
    padding-right: 0.17rem;
    box-sizing: border-box;
    .left {
      flex: 1;
      font-family: PingFang_Medium;
      margin-right: 0.17rem;
      .title {
        font-size: 16px;
        line-height: 0.43rem;
      }
      .sub-title {
        font-size: 12px;
        color: #AAAAAA;
        padding-top: 0.17rem;
        span {
          margin-right: 0.17rem;
        }
      }
    }
    .right {
      img {
        height: 1.13rem;
        width: 1.54rem;
        border-radius: 4px;
      }
    }
  }
}
</style>
