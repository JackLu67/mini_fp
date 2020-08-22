<template>
  <div class="wrapper">
    <div class="bannar-box">
      <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="swiper-slide" v-for="(item, index) in swiperImgs" :key="index">
          <img :src="item.src" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import bannar from '../../../assets/images/banner1@2x.jpg'
export default {
  data() {
    return {
      swiperImgs: [
        {
          id: 0, src: bannar
        },
        {
          id: 1, src: bannar
        }
      ],
      swiperOptions: {
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../../assets/css/mixin.scss';
.bannar-box {
  width: 100%;
  // @include bg-image('bannar');
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  .swiper {
    height: 100%;
    width: 100%;
    .swiper-slide {
      height: 100%;
      width: 100%;
      img {
        height: 3.84rem;
        width: 100%;
      }
    }
    .swiper-pagination-bullet {
      width: 13px;
      height: 2px;
      background: #ffffff;
      border-radius: 0%;
    }
  }
}
</style>
