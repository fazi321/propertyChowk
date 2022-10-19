<template>
  <section class="container">
    <div class="tending-project">
      <router-link
        :to="`${project.slug}&project=${project.id}`"
        class="trend-card"
        v-for="(project ,index) in pageData[0].project"
        :key="index"
      >
        <div class="trend-image">
          <img :src="require(`../../assets/images/${project.img}`)" />
        </div>
        <div class="project-title">
          <h6>{{project.title}}</h6>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["pageData"],
  name: "AllPage"
};
</script>

<style>
.tending-project {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
}
.tending-project .trend-card {
  margin: 12px 0 1px 18px;
  width: calc(24% - 9px);
  text-decoration: none;
  position: relative;
}
.project-title {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-title h6 {
  color: #fff;
  font-size: 28px;
  font-weight: 600;
}
.tending-project .trend-image img {
  width: 100%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .tending-project .trend-card {
    margin: 12px 10px 15px 10px;
    width: calc(48% - 15px);
  }
}
</style>