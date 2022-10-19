<template>
  <div>
    <div class="header-tile">
      <h1>{{ heading }}</h1>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading"],
};
</script>

<style scoped>
.header-tile {
  padding: 20px 25px;
  background: #fff;
  box-shadow: 0px 0px 10px #00000012;
  margin: 20px 0;
}
.header-tile h1 {
  color: #0cb2da;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
}
@media (max-width: 479px) and (min-width: 320px) {
  .header-tile {
  margin: 20px 10px;
}
}
</style>