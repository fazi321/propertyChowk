<template>
  <default-layout>
    <section class="container">
      <div class="add-banner">
        <img src="../assets/images/970x90.png" alt />
      </div>
      <div class="bluehead">
        <h6>Properties</h6>
        <router-link to="/search?page=1">
          <img src="../assets/images/search.svg" alt />
        </router-link>
      </div>
      <div class="property-card-list" v-if="filteredItems.length">
        <div class="left-side">
          <div class="ads-counter">
            <h1>Latest ({{ countProperty }})</h1>
          </div>
          <div ref="goDiv">
            <PropertyList
              :filteredItems="filteredItems"
              v-if="filteredItems.length"
            />
          </div>
          <paginate
            v-if="totalPages && filteredItems.length"
            :page-count="totalPages"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          ></paginate>
        </div>
        <div class="rite-side">
          <div class="banner">Get the latest update about properties</div>
          <div class="add-section">
            <img src="../assets/images/250x250.png" alt />
          </div>
        </div>
      </div>
      <div class="card-skeleton property-page" v-else>
        <div class="pro-skeleton">
          <CardSkeleton v-for="(skeleton, index) in skeleton" :key="index" />
        </div>
        <div class="ads-skeleton">
          <img src="../assets/images/250x250.png" alt />
        </div>
      </div>
      <NewProperty
        :data="superHot"
        title="Featured Properties"
        :count="superHot.length"
        :addType="'sup'"
      />
      <NewProperty
        :data="Hot"
        title="Recent Properties"
        :count="Hot.length"
        :addType="'hot'"
      />
    </section>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import PropertyList from "@/components/PropertyList.vue";
import Paginate from "vuejs-paginate-next";
import CardSkeleton from "@/components/common/cardSkeleton.vue";
import NewProperty from "@/components/home/newProperty.vue";
export default {
  name: "SearchView",
  components: {
    DefaultLayout,
    PropertyList,
    Paginate,
    CardSkeleton,
    NewProperty,
  },
  data() {
    return {
      // pagination
      totalPages: 0,
      // pagination
      filteredItems: [],
      skeleton: 12,
      cardDetails: "",
      countProperty: 0,
    };
  },
  computed: {
    properties() {
      return this.$store.state.properties;
    },
    superHot() {
      var filteredFeatrued = this.$store.state.properties.filter((f) => {
        return f.featured && f.city == this.cardDetails && f.feature_type == 0;
      });
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.featured && f.feature_type == 0; // && f.city == "Lahore"
        });
      }
      const sortedDesc = filteredFeatrued.sort((objA, objB) => {
        return Number(new Date(objB.date)) - Number(new Date(objA.date));
      });
      return sortedDesc;
    },
    Hot() {
      var filteredFeatrued = this.$store.state.properties.filter((f) => {
        return f.city == this.cardDetails && f.feature_type == 1;
      });
      if (!filteredFeatrued.length) {
        filteredFeatrued = this.$store.state.properties.filter((f) => {
          return f.feature_type == 1;
        });
      }
      const sortedDesc = filteredFeatrued.sort((objA, objB) => {
        return Number(new Date(objB.date)) - Number(new Date(objA.date));
      });
      return sortedDesc;
    },
  },
  methods: {
    clickCallback(pageNum) {
      this.$router.push(`/properties?page=${pageNum}`);
      this.scrollToElement();
    },
    scrollToElement() {
      const el = this.$refs.goDiv;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    filterProperty() {
      // sorting array
      var superHot = this.$store.state.properties.filter(function (item) {
        return item.featured && item.feature_type == 0;
      });
      var Hot = this.$store.state.properties.filter(function (item) {
        return item.feature_type == "1";
      });
      var genaric = this.$store.state.properties.filter(function (item) {
        return !item.featured || item.feature_type == undefined;
      });
      var sortedArray = [...superHot, ...Hot, ...genaric];
      var filtered = sortedArray.filter(function (item) {
        return item;
      });
      this.countProperty = filtered.length;
      var page = this.$route.query.page || 1;
      // pagination
      this.totalPages = Math.ceil(filtered.length / 12);
      //   pagination
      var copyFrom = (page - 1) * 12;
      var copyTo = page * 12;
      this.filteredItems = filtered.slice(copyFrom, copyTo);
    },
  },
  watch: {
    properties: {
      handler: function () {
        this.filterProperty();
      },
      // immediate: true,
    },
    "$route.query": {
      handler() {
        if (this.properties.length) {
          this.filterProperty();
        }
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
.bluehead {
  padding: 10px 25px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bluehead a {
  text-decoration: none;
}
.bluehead img {
  height: 22px;
  cursor: pointer;
}
.bluehead h6 {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
}
.card-skeleton {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.pro-skeleton {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
  height: 100%;
}
.ads-skeleton {
  width: 25%;
  margin-top: 25px;
}
.ads-skeleton img {
  width: 100%;
}
.add-banner {
  margin: 5px 0 15px 0;
}
.add-banner img {
  width: 100%;
  height: 100%;
  border: 1px solid #808080;
}
.toggle-buttons {
  margin-top: 30px;
  width: max-content;
  box-shadow: 2px 4px 7px 0px #40404057;
  border-radius: 40px;
  overflow: hidden;
}
.toggle-buttons .btn {
  border-radius: 40px;
  background: #fff;
  color: #000;
  font-weight: bold;
  font-size: 14px;
  transition: 0.8s;
}
.toggle-buttons .btn.active {
  background: #07abd3;
  color: #fff;
}
.main-inputs {
  margin: 30px 0;
}
/* features-section start */
.features-section .features-head h6 {
  color: #000;
  font-size: 16px;
}
.features-section .features-head {
  padding: 14px 0 18px 0;
}
.features-list {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
.features-list > div {
  margin-right: 18px;
  margin-bottom: 18px;
}
.check-buttons > div {
  display: flex;
  align-items: center;
}
.check-buttons input {
  outline: none;
  font-size: 14px;
  min-width: 140px;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border: 1px solid gray;
  border-radius: 6px;
}
.property-number input {
  min-width: 383px;
}
.check-buttons .mid-to {
  margin: 0 10px;
}
.check-buttons .title {
  padding: 14px 0 18px 0;
}
.check-buttons .title h1,
.area-detail .title h1 {
  color: #000;
  font-size: 16px;
}
.range-section {
  display: flex;
}
.range-section > div:nth-child(2) {
  margin-left: 60px;
}
.city-block .title {
  padding: 14px 0 18px 0;
}
.check-buttons .area {
  font-size: 14px;
  min-width: 140px;
  border: none;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  outline: none;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 6px;
}
.area-input {
  position: relative;
  width: 36%;
}
.area-input .dropdown {
  position: absolute;
  background: #fff;
  padding: 0px;
  z-index: 2;
  width: 99%;
  border: 1px solid #eee;
}
.area-input input {
  outline: none;
  font-size: 14px;
  min-width: 383px;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border: 1px solid gray;
  border-radius: 6px;
}
.area-detail {
  margin-top: 20px;
}
.address-block {
  display: flex;
  flex-wrap: wrap;
}
.address-block .check-buttons {
  margin: 20px 80px 0px 0;
}
.address-block .check-buttons input {
  min-width: 190px;
}
.city-search {
  background: #fff;
  padding: 10px;
}
.city-search input {
  outline: none;
  font-size: 12px;
  border: 1px solid #333;
  box-shadow: 0px 0px 10px #00000012;
  padding: 10px 5px;
  border-radius: 20px;
  color: #3333;
  background: #eee;
  min-width: 100% !important;
}
.city-list {
  overflow: scroll;
  height: 400px;
}
.city-list ul {
  padding: 0 10px;
}
.city-list::-webkit-scrollbar {
  display: none;
}

.city-list {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.city-list ul li:first-child {
  font-weight: 600;
  padding: 10px 0;
}
.city-list ul li {
  font-size: 14px;
  color: #000;
  padding: 10px;
}
.features-section {
  margin: 30px 0;
}
.btn-section {
  display: flex;
  justify-content: center;
  margin: 16px 0 50px 0;
}
.btn-section .btn {
  padding: 16px 0px;
  color: #fff;
  border-radius: 40px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  font-size: 14px;
  min-width: 331px;
}
.dropdown-menu {
  min-width: 190px;
  border: 1px solid gray;
  height: 36px;
  border-radius: 6px;
  margin-right: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.property-card-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
}
.property-card-list .left-side {
  width: 70%;
}
/* right side */
.rite-side {
  width: 25%;
}
.rite-side .banner {
  padding: 14px 20px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  color: #fff;
  font-size: 14px;
}
.add-section {
  margin-top: 10px;
}
.add-banner {
  margin: 5px 0 15px 0;
}
.add-banner img {
  width: 100%;
  height: 100%;
  border: 1px solid #808080;
}
.add-section img {
  width: 100%;
  height: 100%;
  border: 1px solid #808080;
}
@media (max-width: 479px) and (min-width: 320px) {
  .property-card-list .left-side {
    width: 100%;
    overflow: hidden;
  }
  .add-banner {
    padding: 10px;
    margin: 0;
  }
  .rite-side {
    width: 100%;
  }
  .pro-skeleton {
    margin: 0 10px;
    width: 100%;
    height: 100%;
  }
  .ads-skeleton {
    width: 100%;
  }
}
</style>
