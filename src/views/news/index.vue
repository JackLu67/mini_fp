<template>
  <div class="wrapper">
    <cus-nav :title="title"></cus-nav>
    <news-tab></news-tab>
  </div>
</template>

<script type="text/javascript">
import CusNav from '@/components/nav'
import newsTab from './components/tab.vue'

export default {
  components: {
    CusNav,
    newsTab
  },
  data() {
    return {
      title: '金融咨询',
      searchImgShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
}
</style>
