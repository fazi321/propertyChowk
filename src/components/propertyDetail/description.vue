<template>
  <div class="discription-container overview-container">
    <!-- <h3>Miller Real Estate</h3> -->
    <p >{{data.description}}</p>
  </div>
</template>

<script>
export default {
  name: "DescriptionView",
  props:['data'],
};
</script>

<style scoped>
.discription-container h3 {
  color: #000000;
  font-size: 16px;
  text-align: left;
}
.discription-container p {
  color: #606060;
  font-size: 14px;
  text-align: left;
  padding: 20px 0;
  line-height: 1.5;
}
</style>