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
    <div class="item-box" v-for="(item ,index) in microfinanceData" :key="index">
      <div class="left-box">
        <div>
          <span class="num">{{item.rate}}</span>
          <span class="title">{{item.rateTetx}}</span>
        </div>
        <div class="text-box">
          <span class="text" v-for="(gro, index) in item.des" :key="index">{{gro.des}}</span>
        </div>
      </div>
      <div class="right-box">
        <div class="title">{{item.title}}</div>
        <div class="sub-title">{{item.subTitle}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: {
    microfinanceData: Array
  },
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
    box-shadow: 1px 1px 3px 0px rgba(203, 203, 203, 0.35);
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
