<template>
  <div>
    <layout-home :title="'Blogs'">
      <div class="container">
        <div class="post-main">
          <div class="blog-left" ref="scrolldivTo">
            <BolgPosts :posts="postsPaginate" />
            <!-- <BolgPosts /> -->
            <section class="section-pagination">
              <paginate
                :page-range="3"
                :margin-pages="2"
                :page-count="$store.state.posts.length / 4"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
              ></paginate>
            </section>
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
import BolgPosts from "@/components/blog/Posts.vue";
import PopularPosts from "@/components/blog/popularPost.vue";
import PostSearch from "@/components/blog/postSearch.vue";
import RecentPosts from "@/components/blog/recentPost.vue";
import Paginate from "vuejs-paginate-next";
export default {
  name: "BlogView",
  components: {
    LayoutHome,
    BolgPosts,
    PopularPosts,
    PostSearch,
    RecentPosts,
    Paginate,
  },
  computed: {
    postsPaginate() {
      var page = this.$route.query.page;
      var startCopy = 4 * page - 4;
      var copyEnd = 4 * page
      return this.$store.state.posts.slice(startCopy, copyEnd);
    },
  },
  methods: {
    clickCallback(num) {
      this.$router.push(`/blog?page=${num}`)
      this.scrollToElement();
    },
     scrollToElement() {
      const el = this.$refs.scrolldivTo;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  created(){
    var q = this.$route.query.page;
    if(!q){
      this.$router.replace('/blog?page=1')
    }
    // window.scrollTo({top:0, behavior: "smooth"})
  }
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