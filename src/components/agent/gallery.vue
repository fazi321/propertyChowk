<template>
  <section>
    <div
      class="container gallery-container"
      v-if="$route.path == '/babarkalyar'"
    >
      <h1>GALLERY</h1>
      <div class="gallery-images">
        <div>
          <!-- <img src="../../assets/agent/gallery-one.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-one.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-two.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-three.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-three.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-four.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-four.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-five.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-five.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-six.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-six.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-seven.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-seven.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-eight.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-eight.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-nine.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-nine.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-ten.png" /> -->
          <img v-lazy="require(`../../assets/agent/gallery-ten.png`)" />
        </div>
      </div>
    </div>
    <div
      class="container gallery-container"
      v-if="$route.path == '/miantalatahmad'"
    >
      <h1>GALLERY</h1>
      <div class="gallery-images">
        <div>
          <!-- <img src="../../assets/agent/gallery-one.png" /> -->
          <img v-lazy="require(`../../assets/agent/talatestate/image1.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/talatestate/image2.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-three.png" /> -->
          <img v-lazy="require(`../../assets/agent/talatestate/image3.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-four.png" /> -->
          <img v-lazy="require(`../../assets/agent/talatestate/image4.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-five.png" /> -->
          <img v-lazy="require(`../../assets/agent/talatestate/image5.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-six.png" /> -->
          <img v-lazy="require(`../../assets/agent/talatestate/image6.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-seven.png" /> -->
          <img v-lazy="require(`../../assets/agent/talatestate/image7.png`)" />
        </div>
      </div>
    </div>
    <div
      class="container gallery-container"
      v-if="$route.path == '/malikasifjahangir'"
    >
      <h1>GALLERY</h1>
      <div class="gallery-images">
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g2.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-three.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g3.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-four.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g4.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-five.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g5.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-six.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g6.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-seven.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g7.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-eight.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g8.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-nine.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g9.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-one.png" /> -->
          <img v-lazy="require(`../../assets/agent/malikasifj/g1.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-ten.png" /> -->
          <!-- <img v-lazy="require(`../../assets/agent/gallery-ten.png`)" /> -->
        </div>
      </div>
    </div>
    <div
      class="container gallery-container"
      v-if="$route.path == '/haiderayubbaig'"
    >
      <h1>GALLERY</h1>
      <div class="gallery-images">
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g1-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g2-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-three.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g3-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-four.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g4-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-five.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g5-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-six.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g6-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-seven.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g7-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-eight.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g8-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-nine.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g9-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-one.png" /> -->
          <img v-lazy="require(`../../assets/agent/lmestate/g10-min.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-ten.png" /> -->
          <!-- <img v-lazy="require(`../../assets/agent/gallery-ten.png`)" /> -->
        </div>
      </div>
    </div>
    <div
      class="container gallery-container"
      v-if="$route.path == '/wasimsiyal'"
    >
      <h1>GALLERY</h1>
      <div class="gallery-images">
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/wasimsiyal/1.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/wasimsiyal/2.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/wasimsiyal/3.png`)" />
        </div>
      </div>
    </div>
    <div
      class="container gallery-container"
      v-if="$route.path == '/mohsinmalik'"
    >
      <h1>GALLERY</h1>
      <div class="gallery-images">
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/1.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/2.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/3.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/4.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/5.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/6.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/7.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/8.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/9.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/10.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/11.jpeg`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mohsinmalik/12.jpeg`)" />
        </div>
      </div>
    </div>
    <div
      class="container gallery-container"
      v-if="$route.path == '/mAmirMalik'"
    >
      <h1>GALLERY</h1>
      <div class="gallery-images">
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mAmirMalik/1.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mAmirMalik/2.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mAmirMalik/3.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mAmirMalik/4.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/mAmirMalik/5.png`)" />
        </div>
      </div>
    </div>
    <div
      class="container gallery-container"
      v-if="$route.path == '/abdulrazzaq'"
    >
      <h1>GALLERY</h1>
      <div class="gallery-images">
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/abdulrazzaq/p1.png`)" />
        </div>
        <div>
          <!-- <img src="../../assets/agent/gallery-two.png" /> -->
          <img v-lazy="require(`../../assets/agent/abdulrazzaq/p2.png`)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GalleryImage",
};
</script>

<style scoped>
.gallery-container {
  margin-top: 20px;
  padding-bottom: 30px;
}
.gallery-container h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
}
.gallery-container .gallery-images {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.gallery-container .gallery-images div {
  width: 200px;
  height: 200px;
  margin: 10px;
}
.gallery-container .gallery-images div img {
  width: 100%;
  height: 100%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .gallery-container .gallery-images div {
    width: 150px;
    height: 150px;
  }
}
</style>
