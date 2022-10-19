<template>
  <section>
    <div class="main-title">
      <h1>{{ title }}</h1>
    </div>
    <div class="container ads-counter" v-if="count">
      <h1>{{addType == 'hot' ? 'Hot': addType == 'sup' ? 'Super Hot': 'All' }} ({{count }})</h1>
    </div>
    <carousel
      :settings="settings"
      :autoplay="4000"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="carousel-container"
      v-if="$store.state.properties.length"
    >
      <slide v-for="(property, index) in data" :key="index">
        <CardProperty :dataList="property" />
      </slide>
      <template #addons>
        <navigation />
        <!-- <pagination /> -->
      </template>
    </carousel>
    <div class="container" v-else>
      <div class="cards-skeleton">
        <CardSkeleton v-for="(skeleton, index) in skeleton" :key="index" />
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import CardSkeleton from "../common/cardSkeleton.vue";
import CardProperty from "../common/CardProperty.vue";
export default {
  name: "NewProperty",
  props: ["data", "title" ,"count", 'addType'],
  components: {
    Carousel,
    Slide,
    CardSkeleton,
    CardProperty,
    Navigation,
  },
  data() {
    return {
      skeleton: 4,
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
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    dateFormate(current) {
      if (!current) return;
      var currentdate = new Date(current);
      var date = currentdate.toLocaleDateString("zh-Hans-CN");
      return date;
    },
  },
};
</script>

<style scoped>
.ads-counter {
  padding: 15px 30px;
  display: flex;
  justify-content: flex-end;
}
.ads-counter h1 {
  font-size: 14px;
  font-weight: normal;
  color: #808080;
}
.water-mark-logo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.water-mark-logo img {
  width: 150px !important;
}
.water-mark {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.water-mark img {
  width: 85px !important;
  height: 70px !important;
  opacity: 0.5;
}
.cards-skeleton {
  display: flex;
  justify-content: space-between;
}
.new-property-container {
  position: relative;
}
.carousel__slide .layout {
  background-image: linear-gradient(#9f9f9f00, #000000de);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
}

.carousel__slide img {
  width: 350px;
  height: 300px;
}
.properties-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.properties-card .card-bottom {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.layout .properties-card .card-bottom button {
  border: none;
  font-size: 16px;
  padding: 8px 30px;
  color: #fff;
  background: #ea0404;
  margin-bottom: 10px;
  font-weight: normal;
}

.layout .properties-card .card-bottom p {
  color: #fff;
  font-size: 18px;
  line-height: 1.6;
  padding: 10px 0 0 0;
  text-align: left;
}
.properties-card .card-top {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.properties-card .card-top div button {
  border: none;
  border-radius: 5px;
  font-size: 9px;
  padding: 5px;
  color: #fff;
}
.properties-card .card-top div .feature {
  background: #77c720;
}
.properties-card .card-top div .sale {
  background: #333333;
  margin: 0 10px;
}
.properties-card .card-top div .eme {
  background: #c9c9c9;
}
.social-icons {
  display: flex;
  justify-content: flex-end;
}
.social-icons div {
  width: 22px;
  height: 22px;
  background: #ea0404;
  border-radius: 5px;
  margin: 10px 0px 5px 5px;
  padding: 4px;
  display: flex;
}
.social-icons div img {
  width: 100%;
  height: 100%;
}
.card-items {
  background: #ea0404;
  padding: 10px;
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.card-items div {
  padding-right: 15px;
}
.card-items div p {
  color: #fff;
  font-size: 16px;
  line-height: 1.3;
  text-align: left;
}
a {
  text-decoration: none;
}
.date-card {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 60px;
  background: #333333;
  padding: 0 10px;
}
.date-card p {
  color: #fff;
  font-size: 16px;
  line-height: 1.3;
}
.date-card div {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  margin-top: -3px;
}
.date-card div img {
  width: 100%;
  height: 100%;
}
</style>
