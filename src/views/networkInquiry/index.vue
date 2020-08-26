<template>
<div class="wrapper">
  <cus-nav :title="title"></cus-nav>
  <cus-map></cus-map>
  <cus-lately></cus-lately>
  <cus-list></cus-list>
</div>
</template>

<script>
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
      searchImgShow: true,
      title: '网点查询'
    }
  },
  mounted() {
    var that = this
    that.$loading.show()
    setTimeout(() => {
      that.$loading.hide()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
</style>
