<template>
  <div class="wrapper">
    <div class="title-box">
      <div>
        <span class="title">热款推荐</span>
        <span class="sub-title">客户涨利 品质优选</span>
      </div>
      <div>
        <span class="more">更多</span>
        <span>></span>
      </div>
    </div>
    <div class="pro-box">
      <div class="pro-item">
        <div class="top-bgn">
          <span>装修无忧</span>
        </div>
        <div class="title">
          <span>福祥·装修贷</span>
          <i></i>
        </div>
        <p class="num">3%</p>
        <p class="sub-title">贷款费率</p>
        <p class="tips">利率低<span class="red"></span>放款快<span class="red"></span>分期还款</p>
        <button class="btn">立即申请</button>
      </div>
      <div class="pro-item">
        <div class="top-bgn">
          <span>存教产品</span>
        </div>
        <div class="title">
          <span>爱心存单</span>
          <i></i>
        </div>
        <p class="num">2.6%-3.5%</p>
        <p class="sub-title">贷款费率</p>
        <p class="tips">专享500积分</p>
        <button class="btn">立即申请</button>
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
    font-weight: bold;
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
  .pro-item {
    flex: 1;
    background: #FFFFFF;
    text-align: center;
    padding-top: 0.58rem;
    padding-bottom: 0.22rem;
    position: relative;
    box-shadow:1px 1px 3px 0px rgba(203, 203, 203, 0.35);
    border-radius: 8px;
    .top-bgn {
      position: absolute;
      top: -0.14rem;
      left: 50%;
      margin-left: -0.85rem;
      width: 1.7rem;
      height: 0.46rem;
      @include bg-image('card-top-bgn');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      span {
        display: inline-block;
        margin-top: 0.12rem;
        font-size: 12px;
        color: #FFF;
        font-family: PingFang_Medium;
      }
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      font-family: PingFang_Medium;
    }
    .sub-title {
      color: #666666;
      font-size: 11px;
      font-family: PingFang_Medium;
    }
    .num {
      font-size: 25px;
      color: #F04240;
      padding-top: .44rem;
      padding-bottom: 9px;
      font-family: PingFang_Bold;
    }
    .tips {
      font-size: 11px;
      color: #343434;
      padding-top: .44rem;
      font-family: PingFang_Medium;
      .red {
        color: #EF4240;
        display: inline-block;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: #EF4240;
        vertical-align: middle;
        margin: 0 2px;
      }
    }
    button {
      margin-top: 0.31rem;
      border: 1px solid #FF0000;
      background: #FFF;
      color: #F04240;
      padding: 0.08rem 0.7rem;
      border-radius: 0.24rem;
      font-family: PingFang_Medium;
    }
  }
  .pro-item:last-child {
    margin-left: 10px;
  }
}
</style>
