<template>
  <section>
    <section class="container-main">
      <div class="desktop-header">
        <AppHeader :transparent="true" />
      </div>
      <div class="mobile-header">
        <MobileAppHeader :transparent="true" />
      </div>
      <div class="primary">
        <div v-if="$route.params.agent == 'babarkalyar'">
          <div class="slide-imges" v-for="(img, index) in image" :key="index">
            <img v-lazy="require(`../../assets/${img}`)" class="active"/>
          </div>
        </div>
        <div v-else-if="$route.params.agent == 'muhammadasif'">
          <div class="slide-imges" v-for="(img, index) in imagess" :key="index">
            <img v-lazy="require(`../../assets/${img}`)" class="active"/>
          </div>
        </div>
        <div v-else-if="$route.params.agent == 'malikasifjahangir'">
          <div class="slide-imges" v-for="(img, index) in imagesMasterEstate" :key="index">
            <img v-lazy="require(`../../assets/${img}`)" class="active"/>
          </div>
        </div>
        <div v-else-if="$route.params.agent == 'miantalatahmad'">
          <div class="slide-imges" v-for="(img, index) in imagesTalatEstate" :key="index">
            <img v-lazy="require(`../../assets/${img}`)" class="active"/>
          </div>
        </div>
        <div v-else-if="$route.params.agent == 'haiderayubbaig'">
          <div class="slide-imges" v-for="(img, index) in LMRealEstate" :key="index">
            <img v-lazy="require(`../../assets/${img}`)" class="active"/>
          </div>
        </div>
        <div v-else-if="$route.params.agent == 'wasimsiyal'">
          <div class="slide-imges" v-for="(img, index) in PioneerEstate" :key="index">
            <img v-lazy="require(`../../assets/${img}`)" class="active"/>
          </div>
        </div>
        <div v-else-if="$route.params.agent == 'mohsinmalik'">
          <div class="slide-imges" v-for="(img, index) in AlNasrRealEstate" :key="index">
            <img v-lazy="require(`../../assets/${img}`)" class="active"/>
          </div>
        </div>
        <div v-else-if="$route.params.agent == 'mAmirMalik'">
          <div class="slide-imges" v-for="(img, index) in NewRealtorsEstate" :key="index">
            <img v-lazy="require(`../../assets/${img}`)" class="set-img active"/>
          </div>
        </div>
        <div v-else>
          <div class="slide-imges" v-for="(img, index) in images" :key="index">
            <!-- <img
              :src="require(`../../assets/images/${img}`)"
              :class="{ active: index == imageShow }"
            /> -->
            <img v-lazy="require(`../../assets/images/${img}`)" :class="{ active: index == imageShow }"/>
          </div>
        </div>
        <SearchHeader :title="title" />
      </div>
    </section>
    <main>
      <slot />
    </main>
    <AppFooter />
  </section>
</template>
<script>
import AppFooter from "../footer/AppFooter.vue";
import AppHeader from "../header/AppHeader.vue";
import MobileAppHeader from "../header/mobileHeader.vue";
import SearchHeader from "../header/SearchHeader.vue";
export default {
  components: {
    MobileAppHeader,
    AppFooter,
    AppHeader,
    SearchHeader,
  },
  data() {
    return {
      images: ["banner-1.jpg", "banner-2.jpg", "banner-3.jpg"],
      image: ["banner.png"],
      imagess: ["Ravian-ma.png"],
      imagesMasterEstate: ["masterEstateBanner.png"],
      imagesTalatEstate: ["estatebg.png"],
      LMRealEstate: ["lmestate.png"],
      PioneerEstate: ["PioneerEstate.png"],
      AlNasrRealEstate: ["Al-NasrReal.jpeg"],
      NewRealtorsEstate: ["NewRealtorsEstate.png"],
      imageShow: 0,
    };
  },
  props: ["title"],
  mounted() {
    var itration = this.images.length - 1;
    setInterval(() => {
      if (this.imageShow < itration) {
        this.imageShow++;
      } else {
        this.imageShow = 0;
      }
    }, 5000);
  },
};
</script>

<style scoped>
.slide-imges {
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
}
.slide-imges img {
  opacity: 0;
  transition: 0.5s;
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-imges img.active {
  opacity: 1;
}
.container-main {
  position: relative;
  height: 680px;
}
.container-main .primary > div {
  height: 100%;
  z-index: -1;
}
.container-main .primary {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #06758f7a; */
  position: absolute;
  top: 0;
}
.desktop-header {
  display: block;
}
.mobile-header {
  display: none;
}
.slide-imges .set-img{
  object-fit: initial!important;
}
@media (max-width: 479px) and (min-width: 320px) {
  .container-main {
    height: 480px;
  }
  .desktop-header {
    display: none;
  }
  .mobile-header {
    display: block;
  }
}
</style>
