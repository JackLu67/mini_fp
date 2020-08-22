<template>
  <div class="wrapper">
    <bannar></bannar>
    <grid-menu></grid-menu>
    <div class="recommend-box">
      <hot-recommend></hot-recommend>
      <microfinance></microfinance>
      <financial-products></financial-products>
      <financial-news></financial-news>
    </div>
    <loading :isShow="isShow"></loading>
  </div>
</template>
<script>
import Bannar from './components/bannar'
import GridMenu from './components/gridMenu'
import HotRecommend from './components/hotRecommend'
import Microfinance from './components/microfinance'
import FinancialProducts from './components/financialProducts'
import FinancialNews from './components/financialNews'

export default {
  components: {
    Bannar,
    GridMenu,
    HotRecommend,
    Microfinance,
    FinancialProducts,
    FinancialNews
  },
  data() {
    return {
      isShow: true
    }
  },
  mounted() {
    var that = this
    setTimeout(() => {
      that.isShow = false
    }, 3000)
  },
}
</script>
<style lang="scss">
.recommend-box {
  padding: 0 .27rem;
  background: #f6f6f6;
  padding-bottom: 0.48rem;
}
</style>
