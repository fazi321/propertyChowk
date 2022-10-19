<template>
  <div>
    <pages-layout v-if="projectDetail && projectDetail.length" :pageData="projectDetail">
      <DetailPage />
    </pages-layout>
  </div>
</template>
<script>
import PagesLayout from "@/components/layouts/PagesLayout.vue";
import DetailPage from "@/components/detail/index.vue";
export default {
  name: "TrendingView",
  components: {
    PagesLayout,
    DetailPage,
  },
  data() {
    return { projectDetail: [] };
  },
  mounted() {
    var q = this.$route.query.city;
     var pageData = this.$store.state.trendings.filter((tc) => {
      return tc.title == q;
    });
    var projects = pageData[0].projects.filter((t) => {
      return t.type == this.$route.query.type;
    });
    this.projectDetail = projects[0].project.filter((project) => {
       return project.id == this.$route.query.project
    })
  },
};
</script>