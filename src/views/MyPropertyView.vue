<template>
  <default-layout>
    <section class="container">
      <div class="add-banner">
        <img src="../assets/images/970x90.png" alt />
      </div>
      <BlueHead :title="'My Properties'" />
      <div class="set-m" v-if="properties.length">
        <div ref="goDiv" class="card-property" v-if="filteredItems.length">
          <PropertyList :filteredItems="filteredItems" v-if="filteredItems.length" />
        </div>
        <div class="not-found" v-else>
          <h3>NOT FOUND</h3>
        </div>
      </div>
      <div class="card-skeleton" v-else>
        <div class="pro-skeleton">
          <CardSkeleton v-for="(skeleton, index) in skeleton" :key="index" />
        </div>
        <div class="ads-skeleton">
          <img src="../assets/images/250x250.png" alt />
        </div>
      </div>
    </section>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import BlueHead from "@/components/common/BlueHeader.vue";
import PropertyList from "@/components/PropertyList.vue";
import CardSkeleton from "@/components/common/cardSkeleton.vue";
export default {
  name: "SearchView",
  components: {
    DefaultLayout,
    BlueHead,
    PropertyList,
    CardSkeleton
  },
  data() {
    return {
      filteredItems: [],
      skeleton: 12,
      favorites:[]
    };
  },
  computed: {
    properties() {
      return this.$store.state.properties;
    },
    user() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    filterProperty() {
      var { id } = this.user;
      var filtered = this.$store.state.properties.filter(function(items) {
        return items.seller_id == id;
      });
      this.filteredItems = filtered;
    }
  },
  watch: {
    properties: {
      handler: function() {
        this.filterProperty();
      }
      // immediate: true,
    },
    "$route.query": {
      handler() {
        if (this.properties.length) {
          this.filterProperty();
        }
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
.set-m {
  margin-top: 20px;
}
.not-found {
  min-height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-skeleton {
  display: flex;
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
</style>