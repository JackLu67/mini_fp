<template>
<div class="wrapper">
  <div class="title-box">
    <div>
      <span class="title">公共服务</span>
      <span class="sub-title">您掌上的便民服务</span>
    </div>
  </div>
  <div class="pro-box">
    <div class="item-box">
      <div class="zwbl">
        <p class="title">政务办理</p>
        <p class="sub-title">一站式便捷办理</p>
      </div>
      <div class="bm-box">
        <div class="bmrx center">
          <p class="title">便民热线</p>
          <p class="sub-title">更贴心的服务</p>
        </div>
        <div class="bmfw center">
          <p class="title">便民服务</p>
          <p class="sub-title">综合服务中心</p>
        </div>
      </div>
    </div>
    <div class="item-box">
      <div class="cxzx center">
        <p class="title">查询中心</p>
        <p class="sub-title">快速便捷查询</p>
      </div>
      <div class="jfzx center">
        <p class="title">缴费中心</p>
        <p class="sub-title">各种缴费服务</p>
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
  border-radius: 0.14rem;
  box-shadow: 1px 1px 3px 0px rgba(203, 203, 203, 0.35);

  .item-box {
    display: flex;

    div {
      flex: 1;
    }

    .zwbl {
      margin-right: 0.1rem;
      height: 2.47rem;
      @include bg-image('zwgl');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;

      .title {
        font-size: 15px;
        font-family: PingFang_Bold;
        padding: 0.26rem 0 0 0.31rem;
      }

      .sub-title {
        margin-top: 0.15rem;
        font-size: 12px;
        color: #999999;
        padding: 0 0 0 0.31rem;
      }
    }

    .bm-box {
      display: flex;
      flex-direction: column;

      div {
        flex: 1;
      }

      .bmrx {
        @include bg-image('bmrx');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .bmfw {
        margin-top: 0.1rem;
        @include bg-image('bmfw');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }

    .cxzx {
      margin-right: 0.1rem;
      height: 1.19rem;
      @include bg-image('jfzx');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .jfzx {
      height: 1.19rem;
      @include bg-image('cxzx');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 0.31rem;
      box-sizing: border-box;

      .title {
        font-size: 15px;
        font-family: PingFang_Bold;
      }

      .sub-title {
        margin-top: 0.15rem;
        font-size: 12px;
        color: #999999;
      }
    }
  }

  .item-box:last-child {
    margin-top: 0.1rem;
  }
}
</style>
