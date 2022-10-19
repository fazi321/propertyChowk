<template>
  <section>
    <div class="main-title">
      <h1>Trending Projects 2022-2023</h1>
    </div>
    <carousel
      :settings="settings"
      :autoplay="2000"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="carousel-container"
    >
      <slide v-for="(trend, index) in $store.state.trendings" :key="index">
        <router-link :to="trend.slug">
          <!-- <img :src="require(`../../assets/images/${trend.img}`)" /> -->
          <img v-lazy="require(`../../assets/images/${trend.img}`)" />

          <div class="layout">
            <div>
              <h2>{{ trend.title }}</h2>
              <!-- <p>{{ trend.description }}</p> -->
            </div>
          </div>
        </router-link>
      </slide>

      <template #addons>
        <navigation />
        <!-- <pagination /> -->
      </template>
    </carousel>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  name: "NewProjects",
  components: {
    Carousel,
    Slide,
    Navigation,
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
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
};
</script>

<style scoped>
.carousel__slide {
  position: relative;
}
.carousel__slide .layout {
  background-image: linear-gradient(#9f9f9f00, #000000de);
  position: absolute;
  top: 85px;
  left: 0;
  right: 0;
  bottom: 3px;
  margin: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.layout div {
  padding: 30px 10px;
}
.layout div h2 {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
}
.layout div p {
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
  padding: 10px 0;
}
.carousel__slide img {
  width: 100%;
}
</style>