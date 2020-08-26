<template>
<div class="wrapper">
  <div class="list-box" v-if="!show">
    <div class="list-top">
      <p>您附近共有<i>89</i>家网点</p>
      <img src="../../../assets/images/xiangxia.png" alt="" @click.stop="hanldeShowClick">
    </div>
  </div>
  <div @click="hanldeShowClick" class="item-box animate__animated" :class="[show ? 'animate__slideInUp': 'animate__slideOutDown']" v-if="show">
    <div class="top-box">1</div>
    <div class="search-mask-box">
      <div class="search-list" id="menus" @click.stop="test">
        <div class="title-box">
          <div>1</div>
        </div>
        <div class="sub-title-box">
          <div>2</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      isSelected: true,
      isTabShow: true
    }
  },
  methods: {
    hanldeShowClick(e) {
      this.show = !this.show
    },
    test(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.nearby-item-active {
  background: #FFF;
}
/deep/.animate__animated {
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
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
    border-radius: 8px;
    padding: 0;
    box-sizing: border-box;
    .top-box {
      background: #FFF;
      border: 1px solid #eee;
    }
    .search-mask-box {
      height: 8.4rem;
      background: rgba(0,0,0,.75);
      .search-list {
        height: 5rem;
        background: #FFF;
      }
    }
  }

  .up-box {
    margin-top: 0.34rem;
    text-align: center;
  }
}
</style>
