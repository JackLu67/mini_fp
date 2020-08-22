<template>
  <div class="wrapper">
    <div class="title-box">
      <div>
        <span class="title">金融资讯</span>
        <span class="sub-title">平台服务 方便快捷</span>
      </div>
      <div>
        <span class="more">更多</span>
        <span>></span>
      </div>
    </div>
    <div class="pro-box">
      <div class="item">
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
      <div class="item">
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
      <div class="item">
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
<style lang="scss" scoped>
@import '../../../assets/css/mixin.scss';
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 19px;
  .title {
    font-size: 16px;
    font-family: PingFang_Bold;
  }
  .sub-title {
    color: #787878;
    margin-left: 10px;
    font-size: 12px;
    font-family: PingFang_Regular;
  }
  .more {
    font-size: #343434;
    text-decoration: underline;
    font-size: 12px;
    font-family: PingFang_Medium;
  }
}
.pro-box {
  padding: 0 0.27rem;
  background: #ffffff;
  border-radius: 0.14rem;
  box-shadow:1px 1px 3px 0px rgba(203, 203, 203, 0.35);
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.17rem;
    padding-bottom: 0.34rem;
    .left {
      flex: 1;
      font-family: PingFang_Medium;
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
