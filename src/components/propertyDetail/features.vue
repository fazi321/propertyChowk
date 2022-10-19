<template>
  <div class="overview-container">
    <div class="feature-container">
      <div class="feature" v-for="(item, index) in data.property_features" :key="index">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>{{item}}</p></div>
      </div>
      <!-- <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Electricity</p></div>
      </div>
      <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Corner House</p></div>
      </div>
      <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Water</p></div>
      </div>
      <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Lawn</p></div>
      </div>
      <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Near Masjid</p></div>
      </div>
      <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Dining Room</p></div>
      </div>
      <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Store Room</p></div>
      </div>
      <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Near Market</p></div>
      </div>
      <div class="feature">
        <div>
          <img src="../../assets/images/feature.png" />
        </div>
        <div><p>Tv lounge</p></div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturesView",
  props:['data']
};
</script>

<style scoped>
.feature-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.feature-container .feature {
  display: flex;
  align-items: center;
  width: 25%;
  margin: 15px 0 20px 0;
}
.feature-container .feature div:nth-child(1) {
  margin-right: 25px;
  width: 35px;
  height: 35px;
}
.feature-container .feature div img {
  width: 100%;
  height: 100%;
}
.feature-container .feature div p {
  color: #000;
  font-size: 14px;
  text-align: left;
}
@media (max-width: 479px) and (min-width: 320px) {
  .feature-container .feature {
    width: 50%;
  }
}
</style>