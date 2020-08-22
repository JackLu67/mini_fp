<template>
  <div class="wrapper">
    <cus-nav :title="title"></cus-nav>
    <cus-map></cus-map>
    <cus-lately></cus-lately>
    <cus-list></cus-list>
    <loading :isShow="isShow"></loading>
  </div>
</template>

<script type="text/javascript">
import CusNav from '@/components/nav'
import cusMap from './components/map'
import cusLately from './components/lately'
import cusList from './components/list'
export default {
  components: {
    CusNav,
    cusMap,
    cusLately,
    cusList
  },
  data() {
    return {
      isShow: true,
      title: '网点查询'
    }
  },
  mounted() {
    var that = this
    setTimeout(() => {
      that.isShow = false
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
</style>
