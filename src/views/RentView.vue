<template>
  <default-layout>
    <section class="container">
      <BlueHead :title="'Rent'" />
      <section class="filters-search">
        <div class="main-search">
          <SelectBox
            :category="'Buy'"
            :dataInput="buy"
            @selected="selectedValues"
          />
          <!-- <RangeBox category="Price Range" @selected="selectedValues" /> -->
          <div class="location-search">
            <label>location</label>
            <input type="text" name="location" v-model="location" />
          </div>
          <SelectBox
            :category="'City'"
            :dataInput="cities"
            @selected="selectedValues"
          />
          <SelectBox
            :category="'Property Type'"
            :dataInput="propertyType"
            @selected="selectedValues"
          />
        </div>
        <div class="main-search main-search-sec">
          <AreaRangeBox category="Price Range" />
          <SelectBox
            :category="'Buy'"
            :dataInput="buy"
            @selected="selectedValues"
          />
          <SelectBox
            :category="'City'"
            :dataInput="cities"
            @selected="selectedValues"
          />
          <SelectBox
            :category="'Property Type'"
            :dataInput="propertyType"
            @selected="selectedValues"
          />
        </div>
        <div class="features-section">
          <div class="features-head">
            <h6>Features</h6>
          </div>
          <div class="features-list">
            <FeatureBox :name="'Gas'" />
            <FeatureBox :name="'Electricity'" />
            <FeatureBox :name="'Corner'" />
            <FeatureBox :name="'Near Masjid'" />
            <FeatureBox :name="'Lawn'" />
            <FeatureBox :name="'Near School'" />
            <FeatureBox :name="'Pool'" />
            <FeatureBox :name="'Tv Lounge'" />
            <FeatureBox :name="'Near Market'" />
            <FeatureBox :name="'Store Room'" />
            <FeatureBox :name="'Drawing Room'" />
            <FeatureBox :name="'Laundry Room'" />
            <FeatureBox :name="'Kichen'" />
            <FeatureBox :name="'Balcony'" />
            <FeatureBox :name="'Near Park'" />
          </div>
          <PropertydetailTabs />
          <PropertyList />
        </div>
      </section>
    </section>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import FeatureBox from "@/components/common/FeatureBox.vue";
import BlueHead from "@/components/common/BlueHeader.vue";
import SelectBox from "@/components/common/SelectBox.vue";
// import RangeBox from "@/components/common/RangeBox.vue";
import AreaRangeBox from "@/components/common/AreaRangeBox.vue";
import PropertydetailTabs from "@/components/PropertydetailTabs.vue";
import PropertyList from "@/components/PropertyList.vue";
export default {
  name: "SearchView",
  components: {
    DefaultLayout,
    FeatureBox,
    BlueHead,
    SelectBox,
    AreaRangeBox,
    PropertydetailTabs,
    PropertyList,
  },
  data() {
    return {
      type: "buy",
      location: "",
      showBox: "",
      citySelected: true,
      search: {},
      // input data
      buy: [{ name: "Buy" }, { name: "Sell" }, { name: "Rent" }],
      cities: [
        {
          name: "Islamabad",
          society: [
            { name: "7th Avenue" },
            { name: "9th Avenue" },
            { name: "D-12" },
          ],
        },
        {
          name: "Karachi",
          society: [
            { name: "k7th Avenue" },
            { name: "k9th Avenue" },
            { name: "kD-12" },
          ],
        },
        {
          name: "Lahore",
          society: [
            { name: "l7th Avenue" },
            { name: "l9th Avenue" },
            { name: "lD-12" },
          ],
        },
      ],
      society: [],
      propertyType: [
        { name: "Home" },
        { name: "Plot" },
        { name: "Commercial Farm House" },
      ],
    };
  },
  methods: {
    selectedType(type) {
      this.type = type;
    },
    selectedValues(values) {
      if (values.category == "City") {
        this.search.city = values;
        var filterSociety = this.cities.filter((v) => {
          return v.name == values.name;
        });
        this.society = filterSociety[0].society;
        this.citySelected = false;
      } else if (values.category == "Property Type") {
        this.search.ptype = values;
      } else if (values.category == "Society") {
        this.search.society = values;
      } else if (values.category == "price") {
        // console.log(values)
        this.search.price = values;
      }
    },
  },
};
</script>
<style scoped>
.location-search {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 13px 10px 10px 22px;
  position: relative;
  box-shadow: 0px 0px 4px 0px #89878754;
}
.location-search:before {
  position: absolute;
  content: "";
  height: 50px;
  background-color: #ebebeb;
  width: 1px;
  top: 16px;
  left: -1px;
}
.location-search input[type="text"] {
  height: 100%;
  border: none;
  color: #707070;
}
.location-search input[type="text"]:focus {
  border: none;
  outline: none;
}
.filters-search {
  padding: 10px 0;
}
.filters-search .main-search {
  display: flex;
  justify-content: space-between;
  margin: 26px 0;
}
.filters-search .main-search .drop-down,
.filters-search .main-search .range {
  box-shadow: 0px 0px 4px 0px #89878754;
}
.main-search > div:nth-child(1) {
  width: 16%;
}
.main-search > div:nth-child(2) {
  width: 40%;
}
.main-search > div:nth-child(3) {
  width: 14%;
}
.main-search > div:nth-child(4) {
  width: 12%;
}
.main-search-sec {
  margin-top: 32px !important;
}
.main-search-sec > div:nth-child(1) {
  width: 36%;
}
.main-search-sec > div:nth-child(2) {
  width: 17%;
}
.main-search-sec > div:nth-child(3) {
  width: 13%;
}
.main-search-sec > div:nth-child(4) {
  width: 14%;
}
/* features-section start */
.features-section .features-head h6 {
  color: #000;
  font-size: 16px;
}
.features-section .features-head {
  padding: 14px 0 24px 0;
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
/* features-section end */
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .filters-search .main-search {
    flex-wrap: wrap;
    padding: 0 10px;
  }
  .filters-search .main-search .drop-down {
    width: 40%;
  }
  .main-search > div:nth-child(3),
  .main-search > div:nth-child(4) {
    margin-top: 10px;
  }
  .main-search > div:nth-child(2) {
    width: 40%;
  }
  .main-search-sec > div:nth-child(1) {
    width: 40%;
  }
  .filters-search .main-search {
    margin: 10px 10px 10px 10px !important;
  }
  .features-section .features-head {
    padding-left: 18px;
  }
  .features-list {
    padding-left: 18px;
  }
}
</style>
