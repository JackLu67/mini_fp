<template>
<div class="wrapper">
  <div class="menu-box">
    <div class="item" v-for="item in meunList" :key="item.id" @click="handleClick(item.router)">
      <img :src="item.src" alt="">
      <span>{{item.text}}</span>
    </div>
  </div>
</div>
</template>

<script>
import wdcx from '../../../assets/images/wdcx.png'
import ckzx from '../../../assets/images/ckzx.png'
import dkzx from '../../../assets/images/dkzx.png'
import dksq from '../../../assets/images/dksq.png'
import edcx from '../../../assets/images/edcx.png'
import deyy from '../../../assets/images/deyy.png'
import xcdh from '../../../assets/images/xcdh.png'
import lcdh from '../../../assets/images/lcdh.png'
import ckzm from '../../../assets/images/ckzm.png'
import gdgn from '../../../assets/images/gdgn.png'
export default {
  data() {
    return {
      meunList: [{
          id: 1,
          src: wdcx,
          text: '网点查询',
          router: '/networkInquiry'
        },
        {
          id: 2,
          src: ckzx,
          text: '存款咨询'
        },
        {
          id: 3,
          src: dkzx,
          text: '贷款咨询'
        },
        {
          id: 4,
          src: dksq,
          text: '贷款申请'
        },
        {
          id: 5,
          src: edcx,
          text: '额度查询'
        },
        {
          id: 6,
          src: deyy,
          text: '大额预约'
        },
        {
          id: 7,
          src: xcdh,
          text: '新钞兑换'
        },
        {
          id: 8,
          src: lcdh,
          text: '零钞兑换'
        },
        {
          id: 9,
          src: ckzm,
          text: '存款证明'
        },
        {
          id: 10,
          src: gdgn,
          text: '更多功能'
        }
      ]
    }
  },
  methods: {
    handleClick(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-box {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.46rem;

  .item {
    margin-top: 0.27rem;
    width: calc(calc(100% / 5));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;

    span {
      margin-top: 0.1rem;
      font-family: PingFang_Bold;
    }
  }
}
</style>
