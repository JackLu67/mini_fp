<template>
  <div class="wrapper">
    <div class="latly-box">
      <div class="logo-box">
        <div>
          <span class="sub-logo">推荐网点</span>
        </div>
        <div>
          <span>145m</span>
          <img src="../../../assets/images/daohang.png" alt="">
        </div>
      </div>
      <div class="title">
        <img src="../../../assets/images/logo.png" alt="">
        <span>湖南农村信用社商贸城支行</span>
      </div>
      <div class="sub-title">湖南省-慈利县-林城路贵阳国际金融中心MAX-D座</div>
      <div class="phone">
        <span>营业厅</span>
        <span>ATM机</span>
      </div>
      <div class="btn-box">
        <div class="right">
          <img src="../../../assets/images/phone.png" alt="" >
          <span>拨号</span>
        </div>
        <div class="left">
          <img src="../../../assets/images/daohang02.png" alt="" width="15px" height="16px">
          <span>导航</span>
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
        border-radius: 2px;
      }
      span {
        vertical-align: middle;
        font-size: 12px;
        color: #000000;
      }
      img {
        vertical-align: middle;
      }
    }
    .title {
      font-family: PingFang_Bold;
      margin-top: 0.6rem;
      img {
        width: 0.34rem;
        height: 0.34rem;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin-left: 0.17rem;
        font-size: 17px;
      }
    }
    .sub-title {
      font-family: PingFang_Medium;
      font-size: 12px;
      color: #010101;
      margin-top: 0.31rem;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      width: 90%;
    }
    .phone {
      margin-top: 0.41rem;
      span  {
        font-size: 11px;
        color: #326AE8;
      }
      span:last-child {
        margin-left: 0.17rem;
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
          vertical-align: middle;
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
