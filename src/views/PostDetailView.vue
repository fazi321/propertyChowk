<template>
  <div>
    <layout-home :title="getPost.title">
      <div class="container">
        <div class="post-main">
          <div class="blog-left">
            <PostDetail :data="getPost"/>
          </div>
          <div class="blog-right">
            <PopularPosts />
            <PostSearch />
            <RecentPosts />
          </div>
        </div>
      </div>
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import PopularPosts from "@/components/blog/popularPost.vue";
import PostSearch from "@/components/blog/postSearch.vue";
import RecentPosts from "@/components/blog/recentPost.vue";
import PostDetail from "@/components/blog/detailPost.vue";
export default {
  name: "PostDetailView",
  components: {
    LayoutHome,
    PostDetail,
    PopularPosts,
    PostSearch,
    RecentPosts,
  },
  methods: {
    clickCallback(num) {
      this.$refs.slider.slideTo(num);
    },
  },
  computed: {
    getPost() {
      var post = this.$store.state.posts;
      var { id } = this.$route.params;
      var getDetail = post[id - 1];
      return getDetail;
    },
  },
};
</script>
<style scoped>
.section-pagination {
  display: flex;
  justify-content: center;
}
.post-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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