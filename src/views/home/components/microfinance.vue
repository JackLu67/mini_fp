<template>
  <div class="wrapper">
    <div class="title-box">
      <div>
        <span class="title">小额贷专享</span>
        <span class="sub-title">一键申请 快速到账</span>
      </div>
      <div>
        <span class="more">更多</span>
        <span>></span>
      </div>
    </div>
    <div class="pro-box">
      <div class="item-box">
        <div class="left-box">
          <div>
            <span class="num">4.2%</span>
            <span class="title">约定利率</span>
          </div>
          <div class="text-box">
            <span class="text">利率低</span>
            <span class="text">放款快</span>
            <span class="text">延期优惠大</span>
          </div>
        </div>
        <div class="right-box">
          <div class="title">福祥·青创贷</div>
          <div class="sub-title">您的梦想有我守护</div>
        </div>
      </div>
      <div class="item-box">
        <div class="left-box">
          <div>
            <span class="num">4.2%</span>
            <span class="title">约定利率</span>
          </div>
          <div class="text-box">
            <span class="text">利率低</span>
            <span class="text">放款快</span>
            <span class="text">延期优惠大</span>
          </div>
        </div>
        <div class="right-box">
          <div class="title">福祥·助学贷</div>
          <div class="sub-title">来日方长 未来可期</div>
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
  font-family: PingFang_Bold;
  .title {
    font-size: 16px;
    font-weight: bold;
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
  .item-box {
    display: flex;
    align-items: center;
    padding: 0.31rem 0.7rem 0.22rem 0.25rem;
    background: #FFFFFF;
    box-shadow:1px 1px 3px 0px rgba(203, 203, 203, 0.35);
    margin-bottom: 0.2rem;
    border-radius: 0.07rem;
    .left-box {
      flex: 1;
      .num {
        font-size: 22px;
        color: #F04240;
        font-family: PingFang_Bold;
      }
      .title {
        color: #565656;
        font-size: 12px;
        margin-left: 0.09rem;
        font-family: PingFang_Medium;
      }
      .text-box {
        margin-top: 0.26rem;
        .text {
          font-size: 11px;
          color: #336AE8;
          margin-right: 0.14rem;
          font-family: PingFang_Regular;
        }
      }
    }
    .right-box {
      .title {
        font-size: 15px;
        color: #343434;
        font-family: PingFang_Bold;
      }
      .sub-title {
        font-size: 11px;
        color: #565656;
        margin-top: 0.12rem;
        font-family: PingFang_Regular;
      }
    }
  }
}
.item-box:last-child {
  margin-bottom: 0;
}
</style>
