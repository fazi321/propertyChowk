<template>
  <div class="overview-container">
    <ul class="details-list">
      <li v-if="data && data.block">
        <div>Block</div>
        <div>{{ data.block }}</div>
      </li>
      <li v-if="data && data.phase">
        <div>Phase</div>
        <div>{{ data.phase }}</div>
      </li>
      <li v-if="data && data.sector">
        <div>Sector</div>
        <div>{{ data.sector }}</div>
      </li>
      <li v-if="data && data.society">
        <div>Society</div>
        <div>{{ data.society }}</div>
      </li>
      <li v-if="data && data.city">
        <div>City</div>
        <div>{{ data.city }}</div>
      </li>
      <li v-if="(data && data.area) || (data && data.area_type)">
        <div>Area</div>
        <div>{{ data.area }} {{ data.area_type }}</div>
      </li>
      <li v-if="data && data.floor">
        <div>Floor</div>
        <div>{{ data.floor }}</div>
      </li>
      <li v-if="data && data.bedrooms">
        <div>Bedrooms</div>
        <div>{{ data.bedrooms }}</div>
      </li>
      <li v-if="data && data.bathrooms">
        <div>Bathrooms</div>
        <div>{{ data.bathrooms }}</div>
      </li>
      <li v-if="data && data.sub_type">
        <div>Property Type</div>
        <div>{{ data.sub_type }}</div>
      </li>
      <li v-if="data && data.property_number">
        <div>Property Number</div>
        <div>{{ data.property_number }}</div>
      </li>
      <li
        v-if="
          (data && data.road) ||
          (data && data.street) ||
          (data && data.block) ||
          (data && data.sector) ||
          (data && data.phase)
        "
      >
        <div>Full Address</div>
        <div>
          <span v-if="data && data.road">Road {{ data.road }},</span>
          <span v-if="data && data.street"> Street {{ data.street }},</span>
          <span v-if="data && data.block"> Block {{ data.block }},</span>
          <span v-if="data && data.sector"> Sector {{ data.sector }},</span>
          <span v-if="data && data.phase">Phase {{ data.phase }},</span>
          {{ data.society }}, {{ data.city }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DescriptionView",
  props: ["data"],
  // mounted(){
  //  console.log(this.data)
  // },
};
</script>

<style scoped>
.details-list {
  list-style: none;
  padding: 0 0 20px 0;
}
.details-list li {
  color: #606060;
  font-size: 14px;
  text-align: left;
  padding: 10px 0;
  line-height: 1.5;
  display: flex;
  white-space: nowrap;
}
.details-list li div:nth-child(1) {
  min-width: 125px;
}
.details-list li div:nth-child(2) {
  color: #000 !important;
}
@media (max-width: 479px) and (min-width: 320px) {
  .details-list {
    columns: 1;
    -webkit-columns: 1;
    -moz-columns: 1;
    display: block;
  }
  .details-list li div:nth-child(2) {
    white-space: normal;
  }
}
</style>