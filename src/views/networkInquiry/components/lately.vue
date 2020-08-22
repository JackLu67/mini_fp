<template>
  <div class="wrapper">
    <div class="latly-box">
      <div class="logo-box">
        <div>
          <img src="../../../assets/images/bankLogo.png" alt="">
          <span class="sub-logo">距离最近</span>
        </div>
        <div>
          <span>145m</span>
          <img src="../../../assets/images/daohang.png" alt="">
        </div>
      </div>
      <div class="title">贵阳银行林城东路支行</div>
      <div class="sub-title">贵阳市-观山湖区-林城路贵阳国际金融中心MAX-D座</div>
      <div class="phone">
        <img src="../../../assets/images/phone.png" alt="">
        <span>0851-42569888</span>
      </div>
      <div class="btn-box">
        <div class="left">
          <img src="../../../assets/images/daohangguanli01.png" alt="">
          <span>导航</span>
        </div>
        <div class="right">
          <img src="../../../assets/images/phone.png" alt="">
          <span>拨号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
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
@import '../../../assets/css/mixin.scss';
.wrapper {
  position: relative;
  .latly-box {
    position: absolute;
    width: 90%;
    left: 50%;
    margin-left: -45%;
    z-index: 99;
    bottom: 1.71rem;
    background: #FFF;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    .logo-box {
      display: flex;
      justify-content: space-between;
      .sub-logo {
        display: inline-block;
        padding: 0.07rem 0.1rem;
        background: #EF423F;
        font-family: PingFang_Medium;
        font-size: 12px;
        color: #FFF;
        margin-left: 0.17rem;
        border-radius: 2px;
      }
      span {
        vertical-align: middle;
        font-size: 12px;
        color: #777777;
      }
      img {
        vertical-align: middle;
      }
    }
    .title {
      font-size: 18px;
      font-family: PingFang_Bold;
      margin-top: 0.6rem;
    }
    .sub-title {
      font-family: PingFang_Medium;
      font-size: 12px;
      color: #010101;
      margin-top: 0.31rem;
    }
    .phone {
      margin-top: 0.2rem;
      img {
        margin-right: 0.07rem;
      }
    }
    .btn-box {
      display: flex;
      margin-top: 0.34rem;
      div {
        flex: 1;
        text-align: center;
        height: 0.51rem;
        line-height: 0.51rem;
        font-size: 14px;
        font-family: PingFang_Medium;
        span {
          vertical-align: middle;
        }
        img {
          margin-right: 2px;
          vertical-align: sub;
        }
      }
      .left {
        border-right: 1px solid #eee;
        span {
          color: #3D76F7;
        }
      }
      .right {
        span {
          color: #EF423F;
        }
      }
    }
  }
}
</style>
