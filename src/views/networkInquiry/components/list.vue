<template>
  <div class="wrapper">
    <div class="list-box" v-if="!show">
      <div class="list-top">
        <p>您附近共有<i>89</i>家网点</p>
        <img src="../../../assets/images/xiangxia.png" alt="" @click="hanldeShowClick">
      </div>
    </div>
    <div class="item-box animate__animated animate__fadeIn" v-if="show">
      <div class="tab-box">
        <div class="left">
          <span>附近</span>
          <img src="../../../assets/images/down.png" alt="">
        </div>
        <div>
          <span>银行</span>
          <img src="../../../assets/images/down.png" alt="">
        </div>
      </div>
      <div class="item-list-box">
        <div class="item" v-for="i in 10" :key="i">
          <div class="logo-box">
            <img src="../../../assets/images/logo.png" alt="">
          </div>
          <div class="title-box">
            <p class="title">贵阳银行</p>
            <p class="sub-title">观山湖区-林城路贵阳国际金</p>
          </div>
          <div class="num-box">
            <span>145m</span>
            <img src="../../../assets/images/daohang.png" alt="">
          </div>
        </div>
      </div>
      <div class="up-box">
        <img src="../../../assets/images/xiangxia.png" alt="" @click="hanldeShowClick">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    hanldeShowClick() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  .list-box {
    position: absolute;
    width: 90%;
    left: 50%;
    margin-left: -45%;
    z-index: 99;
    bottom: 0;
    background: #FFF;
    padding: 0.29rem 0 0.2rem 0;
    box-sizing: border-box;
    border-radius: 8px;
    .list-top {
      text-align: center;
      font-family: PingFang_Medium;
      font-size: 14px;
      i {
        color: #EF423F;
      }
      img {
        margin-top: 0.51rem;
      }
    }
  }
  .item-box {
    position: absolute;
    width: 90%;
    left: 50%;
    margin-left: -45%;
    z-index: 999;
    bottom: 0;
    background: #FFF;
    border-radius: 8px;
    padding: 20px 0;
    box-sizing: border-box;
    .tab-box {
      display: flex;
      margin-bottom: 0.17rem;
      div {
        flex: 1;
        text-align: center;
        height: 0.34rem;
        line-height: 0.34rem;
        font-size: 14px;
        font-family: PingFang_Medium;
        img {
          height: 0.17rem;
        }
      }
      .left {
        border-right: 1px solid #eee;
      }
    }
    .item-list-box {
      max-height: 6rem;
      overflow: hidden;
      overflow-y: auto;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.17rem 0.34rem;
        padding-bottom: 0.34rem;
        .logo-box {
          margin-top: -.2rem;
          margin-right: 0.05rem;
        }
        .title-box {
          flex: 1;
          font-family: PingFang_Medium;
          .title {
            font-size: 18px;
          }
          .sub-title {
            font-size: 12px;
            margin-top: 0.2rem;
          }
        }
        .num-box {
          font-family: PingFang_Medium;
          color: #777777;
          font-size: 12px;
          span {
            margin-right: 0.07rem;
            vertical-align: middle;
          }
          img {
            vertical-align: middle;
          }
        }
      }
    }
  }
  .up-box {
    margin-top: 0.34rem;
    text-align: center;
  }
}
</style>
