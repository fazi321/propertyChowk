<template>
  <div class="gallery-container">
    <h1>GALLERY</h1>
    <div class="gallery-images">
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
      <div>
        <img src="../../assets/images/gallery.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryImage"
};
</script>

<style scoped>
.gallery-container{
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