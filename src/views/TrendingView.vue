<template>
  <div>
    <pages-layout v-if="pageData && pageData.length" :pageData="pageData">
      <TrendingProjects  v-if="pageData && pageData.length" :pageData="pageData" />
    </pages-layout>
  </div>
</template>
<script>
import PagesLayout from "@/components/layouts/PagesLayout.vue";
import TrendingProjects from "@/components/trending/trendingProjects.vue";
export default {
  name: "TrendingView",
  components: {
    PagesLayout,
    TrendingProjects,
  },
  data() {
    return { pageData: [] };
  },
  mounted() {
    var q = this.$route.query.city;
    this.pageData = this.$store.state.trendings.filter((tc) => {
      return tc.title == q;
    });
  },
};
</script>