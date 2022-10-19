<template>
  <section class="container">
    <div class="tending-project">
      <router-link :to="p.slug" class="trend-card" v-for="(p, index) in projects" :key="index">
        <div class="trend-image">
          <img :src="require(`../../assets/images/${p.img}`)" />
        </div>
        <div>
          <h2>{{p.title}} (20)</h2>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "TrendingProjects",
  props: ["pageData"],
  data() {
    return { projects: [] };
  },
  mounted() {
    this.projects = this.pageData[0].projects;
  }
};
</script>
<style scoped>
.tending-project {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
}
.tending-project .trend-card {
  margin: 12px 20px 15px 20px;
  width: calc(30% - 9px);
  text-decoration: none;
  position: relative;
}
/* .project-title h2 {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
} */
.tending-project .trend-image img {
  width: 100%;
}
.tending-project h2 {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px 0;
}
@media (max-width: 479px) and (min-width: 320px) {
  .tending-project .trend-card {
    margin: 12px 10px 15px 10px;
    width: calc(48% - 15px);
  }
}
</style>