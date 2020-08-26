<template>
  <div class="wrapper">
    <div class="news-tab-box">
      <div class="item" v-for="(item, i) in tabData" :key="item.id" @click="handleClick(item.id, i)">
        <span :class="[item.id===index ? 'active' : '']">
          {{ item.name }}
        </span>
      </div>
    </div>
    <news-bannar></news-bannar>
    <news-list :list="list"></news-list>
  </div>
</template>

<script type="text/javascript">
import newsBannar from './bannar.vue'
import newsList from './newsList.vue'
export default {
  components: {
    newsBannar,
    newsList
  },
  data() {
    return {
      index: 0,
      tabData: [
        {
          id: 0,
          name: '社区消息'
        },
        {
          id: 1,
          name: '通知公告'
        },
        {
          id: 2,
          name: '慈利新闻'
        },
        {
          id: 3,
          name: '乡镇动态'
        }
      ],
      list: [1,2,3]
    }
  },
  methods: {
    handleClick(id, i) {
      this.index = i
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  border-bottom: 2px solid #EF4240;
  color: #000 !important;
}
.news-tab-box {
  display: flex;
  box-shadow:0px 0.1rem 0.24rem 0px rgba(239,66,64,0.2);
  .item {
    flex: 1;
    text-align: center;
    span {
      display: inline-block;
      padding: 0.24rem 0.1rem;
      font-size: 16px;
      color: #666666;
      font-family: PingFang_Medium;
    }
  }
}
</style>
