<template>
  <div class="wrapper">
    <bannar></bannar>
    <grid-menu></grid-menu>
    <notice></notice>
    <div class="recommend-box">
      <public-service></public-service>
      <hot-recommend :hotRecommendList="hotRecommendList"></hot-recommend>
      <microfinance :microfinanceData="microfinance"></microfinance>
      <financial-products></financial-products>
      <cus-img :src="src1"></cus-img>
      <financial-news :news="news"></financial-news>
      <cus-img :src="src2"></cus-img> 
    </div>
  </div>
</template>

<script>
import Bannar from "./components/bannar"
import Notice from "./components/notice"
import PublicService from "./components/publicService"
import GridMenu from "./components/gridMenu"
import HotRecommend from "./components/hotRecommend"
import Microfinance from "./components/microfinance"
import FinancialProducts from "./components/financialProducts"
import FinancialNews from "./components/financialNews"
import CusImg from "@/components/img"
import { getIndexList } from "@/api/data"

import src1 from '@/assets/images/guanggao.png'
import src2 from '@/assets/images/guanggao1.png'

export default {
  components: {
    Bannar,
    Notice,
    PublicService,
    GridMenu,
    HotRecommend,
    Microfinance,
    FinancialProducts,
    FinancialNews,
    CusImg
  },
  data() {
    return {
      src1: src1,
      src2: src2,
      isShow: true,
      hotRecommendList: [],
      microfinance: [],
      news: []
    }
  },
  created() {
    this.$loading.show()
  },
  mounted() {
    let that = this
    this.getData()
    setTimeout( () => {
      that.$loading.hide()
    }, 8000)
  },
  methods: {
    async getData() {
      this.$store.dispatch('user/getInfo')
      const data = await getIndexList()
      if(data.code === 200) {
        this.hotRecommendList = data.data.hotRecommend
        this.microfinance = data.data.microfinance
        this.news = data.data.news
        this.$loading.hide()
      }
    }
  }
}
</script>

<style lang="scss">
.recommend-box {
  padding: 0 0.27rem;
  background: #f6f6f6;
  padding-bottom: 0.48rem;
}
</style>
