<template>
  <div class="wrapper">
    <cus-nav :title="title"></cus-nav>
    <div class="box">
      <div v-for="i in 50" :key="i">
        <div>1</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CusNav from '@/components/nav'
export default {
  data() {
    return {
      title: '新闻详情'
    }
  },
  components: {
    CusNav
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  .box {
    top: 1.09rem;
    height: calc(100vh - 1.09rem);
    overflow: hidden;
    overflow-y: auto;
    div  {
      height: 100px;
      font-size: 16px;
    }
  }
}
</style>
