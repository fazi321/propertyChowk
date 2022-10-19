<template>
  <default-layout>
    <section class="container">
      <div class="add-banner">
        <img v-lazy="require(`../assets/images/970x90.png`)" />
      </div>
      <BlueHead :title="'Gallery'" />
      <GalleryImages/>
    </section>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import BlueHead from "@/components/common/BlueHeader.vue";
import GalleryImages from "@/components/GalleryImages.vue"
export default {
  name: "SearchView",
  components: {
    DefaultLayout,
    BlueHead,
    GalleryImages
  },
};
</script>
<style scoped>
.add-banner {
  margin: 5px 10px 15px 10px;
  height: 105px;
}
.container .bluehead{
    margin: 10px 10px;
}
.add-banner img {
  width: 100%;
  height: 100%;
   border: 1px solid #808080;
}
</style>