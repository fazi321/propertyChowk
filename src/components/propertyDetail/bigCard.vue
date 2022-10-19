<template>
  <!-- <div v-if="!data.images">NOT FOUND</div> -->
  <section class="main-card">
    <div class="image-card" v-if="!data.images">
      <img src="../../assets/images/about.png" />
      <div class="water-mark-logo">
        <img src="../../assets/images/logo-transparent.svg" />
      </div>
    </div>
    <carousel
      v-if="data.images"
      :settings="settings"
      :autoplay="2000"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="carousel-container"
    >
      <slide v-for="(slide, index) in data.images" :key="index">
        <div class="image-card">
          <img :src="slide" />
          <div class="water-mark" v-if="data.images">
              <img src="../../assets/images/Propertylogowatermark.png" />
            </div>
        </div>
      </slide>

      <template #addons>
        <!-- <navigation /> -->
        <pagination />
      </template>
    </carousel>

    <div class="icons-wrapper">
      <div class="icon" v-if="data.bedrooms">
        <div class="i-img">
          <img src="../../assets/images/bed.png" />
        </div>
        <div>
          <p>{{ data.bedrooms }}</p>
        </div>
      </div>
      <div class="icon" v-if="data.bathrooms">
        <div class="i-img">
          <img src="../../assets/images/bath.png" />
        </div>
        <div>
          <p>{{ data.bathrooms }}</p>
        </div>
      </div>
      <div class="icon">
        <div class="i-img">
          <img src="../../assets/images/ft.png" />
        </div>
        <div>
          <p>{{ data.area }} {{ data.area_type }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
export default {
  props: ["data"],
  name: "BigCard",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 1,
        snapAlign: "start",
      },
    },
  }),
};
</script>

<style scoped>
.water-mark {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.water-mark img {
  width: 150px !important;
  height: 120px !important;
  opacity: 0.5;
}
.water-mark-logo {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.water-mark-logo img {
  width: 200px !important;
}
.main-card .image-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e8e8;
  height: 400px;
  width: 100%;
}
.main-card .image-card img {
  width: 100%;
  height: 100%;
}
.icons-wrapper {
  padding: 15px 15px;
  display: flex;
  width: 35%;
  justify-content: space-between;
}
.icons-wrapper .icon {
  display: flex;
  align-items: center;
}
.icons-wrapper .icon .i-img {
  width: 18px;
  height: 18px;
}
.icons-wrapper .icon .i-img img {
  width: 100%;
  height: 100%;
}
.icons-wrapper .icon p {
  font-size: 14px;
  color: #606060;
  margin-left: 10px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .main-card .image-card {
    height: 320px;
  }
  .icons-wrapper {
    padding: 20px 10px;
    width: 50%;
  }
}
</style>