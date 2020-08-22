<template>
  <div class="wrapper">
    <div class="title-box">
      <div>
        <span class="title">金融产品</span>
        <span class="sub-title">平台服务 方便快捷</span>
      </div>
    </div>
    <div class="pro-box">
      <div class="item cunkuan">
        <p class="title">存款产品</p>
        <p class="sub-title">存款年利率超过4%</p>
      </div>
      <div class="item daikuan">
        <p class="title">贷款产品</p>
        <p class="sub-title">手续方便更快速</p>
      </div>
      <div class="item yinhangka">
        <p class="title">银行卡产品</p>
        <p class="sub-title">更多免年费信用卡</p>
      </div>
      <div class="item dianziyinghang">
        <p class="title">电子银行</p>
        <p class="sub-title">您手上的银行</p>
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
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  .item {
    width: calc(calc(100% / 2) - 0.09rem);
    box-sizing: border-box;
    height: 1.02rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fff;
    padding: 0.21rem 0 0 0.21rem;
    .title {
      font-family: PingFang_Bold;
      font-size: 15px;
      padding-bottom: 0.09rem;
    }
    .sub-title {
      font-size: 11px;
      font-family: PingFang_Regular;
    }
  }
  .item:nth-child(odd) {
    margin-right: 0.17rem;
  }
  .cunkuan {
    @include bg-image('ckcp_bgn');
  }
  .daikuan {
    @include bg-image('dkcp_bgn');
  }
  .yinhangka {
    @include bg-image('yhk_bgn');
    margin-top: 0.17rem;
  }
  .dianziyinghang {
    @include bg-image('dzyh_bgn');
    margin-top: 0.17rem;
  }
}
</style>
