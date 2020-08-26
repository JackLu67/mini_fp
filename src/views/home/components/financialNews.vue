<template>
  <div class="wrapper">
    <div class="title-box">
      <div>
        <span class="title">金融资讯</span>
        <span class="sub-title">平台服务 方便快捷</span>
      </div>
      <div>
        <span class="more" @click="moreNews('/news')">更多</span>
        <span>></span>
      </div>
    </div>
    <div class="pro-box">
      <div class="item" v-for="(item, index) in news" :key="index">
        <div class="left">
          <p class="title">{{item.title}}</p>
          <p class="sub-title">
            <span>{{item.source}}</span>
            <span>{{item.views}}</span>
          </p>
        </div>
        <div class="right">
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    news: Array
  },
  data() {
    return {
      isShow: true
    }
  },
  created() {
    this.$loading.show()
  },
  mounted() {
  },
  methods: {
    moreNews(url) {
      this.$router.push(url)
    }
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
