<template>
  <div class="wrapper">
    <div class="map" id="map">
    </div>
  </div>
</template>

<script type="text/javascript">
import currentPtImg from '../../../assets/images/currentPt.png'
import pointLogo from '../../../assets/images/pointLogo.png'
export default {
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.map = new BMap.Map('map')
      this.map.centerAndZoom(new BMap.Point(111.136772,29.434138), 19)
      this.map.enableScrollWheelZoom()
      // 当前位置
      let pt = new BMap.Point(111.136812,29.4347)
      let str = `<div class="round1-box" style="width: 2.45rem;
                    height: 2.45rem;
                    border-radius: 50%;
                    background:rgba(255,154,152,.1);
                    display: flex;
                    justify-content: center;
                    align-items: center;">
                    <div class="round2-box" style="width: 1.73rem;
                      height: 1.73rem;
                      border-radius: 50%;
                      background:rgba(255,154,152,.1);
                      display: flex;
                      justify-content: center;
                      align-items: center;">
                      <div class="round3-box" style="width: 1.08rem;
                        height: 1.08rem;
                        border-radius: 50%;
                        background:rgba(255,154,152,.1);
                        display: flex;
                        justify-content: center;
                        align-items: center;">
                        <div class="round4-box" style="width: 0.56rem;
                          height: 0.56rem;
                          border-radius: 50%;
                          background:rgba(255,154,152,.41);
                          display: flex;
                          justify-content: center;
                          align-items: center;">
                          <div class="point">
                            <img src="${currentPtImg}" alt="" style="margin-top: -0.44rem;">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`
      let myLabel = new BMap.Label(str, {
        position: pt, //label 在此处添加点位位置信息
        offset: new BMap.Size(-70, -70)
      })
      myLabel.setStyle({
        border: "0", //边
        cursor: "pointer",
        zIndex: 2,
        padding: 0,
        background: 'transparent'
      })
      this.map.addOverlay(myLabel) //添加label

      // 添加marker
      let pot = new BMap.Point(111.137064,29.434398)
      let myIcon = new BMap.Icon(pointLogo, new BMap.Size(32, 35))
      let marker = new BMap.Marker(pot, { icon: myIcon, offset: new BMap.Size(0, -10) })  // 创建标注
      this.map.addOverlay(marker);

      //let geolocation = new BMap.Geolocation()
      // geolocation.enableSDKLocation() // sdk定位
      // geolocation.getCurrentPosition(function(r) {
      //   if(this.getStatus() == BMAP_STATUS_SUCCESS){
      //     alert('您的位置：'+r.point.lng+','+r.point.lat)
      //   }
      //   else {
      //     console('failed'+this.getStatus())
	    //   }
      // })
      this.routePlan(pt, pot)
    },
    routePlan(pt, pot) {
      let map = this.map
      let walking = new BMap.WalkingRoute(map, {
        renderOptions: {
          map: map, 
          autoViewport: true
        },
        onPolylinesSet(routes) {
          routes.forEach(Route => {
            let polyline = Route.getPolyline()
            polyline.setStrokeColor("#EB2719")
            polyline.setStrokeWeight(4)
          })
        },
        onMarkersSet(routes) {
          map.removeOverlay(routes[0].marker) // 删除起点
          map.removeOverlay(routes[1].marker) // 删除终点
        }
      })
      walking.search(pt, pot);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/mixin.scss';
// /deep/.BMap_Marker img {
//   display: none !important;
// }
.wrapper {
  position: relative;
  .map {
    height: calc(100vh - 1.09rem);    
  }
}
.BMapLabel {
  .round1-box {
    width: 2.45rem;
    height: 143.5px;
    border-radius: 50%;
    background:rgba(255,154,152,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    .round2-box {
      width: 1.73rem;
      height: 1.73rem;
      border-radius: 50%;
      background:rgba(255,154,152,.1);
      display: flex;
      justify-content: center;
      align-items: center;
      .round3-box {
        width: 1.08rem;
        height: 1.08rem;
        border-radius: 50%;
        background:rgba(255,154,152,.1);
        display: flex;
        justify-content: center;
        align-items: center;
        .round4-box {
          width: 0.56rem;
          height: 0.56rem;
          border-radius: 50%;
          background:rgba(255,154,152,.41);
          display: flex;
          justify-content: center;
          align-items: center;
          .point {
            height: 0.51rem;
            width: 0.35rem;
            @include bg-image('currentPt');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-top: -0.44rem;
            background: url('../../../assets/images/currentPt@2x.png');
          }
        }
      } 
    } 
  }
}

</style>
