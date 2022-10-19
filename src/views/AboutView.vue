<template>
  <div>
    <layout-home>
      <div class="container">
        <AboutUs/>
      </div>
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import AboutUs from "@/components/about/index.vue";
export default {
  name: "AboutView",
  components: {
    LayoutHome,
    AboutUs
  },
 
};
</script>
<style scoped>
.section-pagination{
  display: flex;
  justify-content: center;
}
.post-main {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}
.post-main .blog-left {
  width: 60%;
}
.post-main .blog-right {
  width: 30%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .post-main {
    padding: 10px;
  }
  .post-main .blog-left {
  width: 100%;
}
.post-main .blog-right {
  width: 100%;
}
}
</style>