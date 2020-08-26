<template>
  <div class="wrapper">
    <div class="img-box">
      <img :src="src" alt="">
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    src: String
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.img-box {
  margin-top: 0.34rem;
}
</style>
