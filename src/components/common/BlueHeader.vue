<template>
  <div class="bluehead">
    <h6>{{title}}</h6>
  </div>
</template>

<script>
export default {
  props:['title']
};
</script>

<style scoped>
.bluehead {
  padding: 20px 25px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  margin-top:30px;
}
.bluehead h6 {
  color: #fff;
  text-transform: uppercase;
}
@media (max-width: 479px) and (min-width: 320px) {
  .bluehead{
    margin: 20px 10px 10px 10px;
  }
}
</style>