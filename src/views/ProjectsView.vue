
<template>
  <div>
    <pages-layout v-if="projects && projects.length" :pageData="projects">
      <ProjectsPage v-if="projects && projects.length" :pageData="projects" />
    </pages-layout>
  </div>
</template>
<script>
import PagesLayout from "@/components/layouts/PagesLayout.vue";
import ProjectsPage from "@/components/allProjects/index.vue";
export default {
  name: "TrendingView",
  components: {
    PagesLayout,
    ProjectsPage,
  },
  data() {
    return { pageData: [], projects: [] };
  },
  mounted() {
    var q = this.$route.query.city;
    this.pageData = this.$store.state.trendings.filter((tc) => {
      return tc.title == q;
    });
    this.projects = this.pageData[0].projects.filter((t) => {
      return t.type == this.$route.query.type;
    });
  },
};
</script>