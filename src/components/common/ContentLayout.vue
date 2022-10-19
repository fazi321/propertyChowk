<template>
  <div>
    <div class="contentheader">
        <h1>{{title}}</h1>
    </div>
    <div>
        <slot/>
    </div>
  </div>
</template>

<script>
export default {
    props:['title']
};
</script>

<style scoped>
.contentheader {
  padding: 20px 25px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
}
.contentheader h1{
  color: #fff;
  font-size: 14px;
}
</style>