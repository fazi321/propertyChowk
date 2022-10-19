<template>
  <section class="gallery">
    <div class="image-gallery" v-for="(g, index) in galleryImages" :key="index">
      <img v-lazy="require(`../assets/images/${g}`)" />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      galleryImages: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",
        "12.png",
        "13.png",
        "14.png",
        "15.png",
        "16.png",
        "17.png",
        "18.png",
        "19.png",
        "20.png",
        "22.png",
        "23.png",
        "24.png",
        "25.png",
        "26.png",
        "27.png",
        "28.png",
        "29.png",
        "30.png",
        "31.png",
        "32.png",
        "33.png",
        "34.png",
        "35.png",
        "36.png",
      ],
    };
  },
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  margin-bottom:30px;
}
.image-gallery {
  cursor: pointer;
  width: 23%;
  height: 197px;
  margin: 10px;
}
.image-gallery img {
  width: 100%;
  height: 100%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .image-gallery{
    width: 44%;
    height: 150px;
  }
}
</style>