<template>
  <section class="searchHeader">
    <div class="container">
      <div class="main-container">
        <div class="main-primary">
          <div class="search-header">
            <h1>Property Chowk</h1>
            <h2 v-if="$route.path == '/trending'">
              <!-- Coming Soon  -->
              {{ $route.query.city }}
            </h2>
            <h2 v-else>{{ pageData[0].title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["pageData"],
 
};
</script>
<style scoped>
.searchHeader {
  width: 100%;
}
.main-container {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.main-primary {
  width: 90%;
}
.main-container .search-header h1 {
  font-size: 26px;
  font-weight: 400;
}
.main-container .search-header h2 {
  font-size: 56px;
  font-style: italic;
  line-height: 1.2;
  letter-spacing: 2.5px;
  text-transform: uppercase;
}
.main-container .search-header h1,
h2 {
  color: #000;
}
.main-container .search-header {
  line-height: 1.5;
  margin-top: 40px;
  text-align: center;
}
@media (max-width: 479px) and (min-width: 320px) {
  .main-primary {
    width: 100%;
  }
  .quick-main{
    width: 95%;
  }
  .quick-search .search-container{
    padding: 15px 8px!important;
  }
  .quick-search h1{
    font-size: 14px;
  }
  .main-container .search-header h2{
    font-size: 24px;
  }
  .main-container .search-header h1{
    font-size: 18px;
  }
  .main-container .search-header{
    margin-top: 0!important;
  }
  .main-container .search{
    padding: 0!important;
  }
}
</style>