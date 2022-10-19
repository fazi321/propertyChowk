<template>
  <div class="agent-card">
    <div class="agent-image">
      <img v-lazy="require(`../assets/${items.img}`)" />
    </div>
    <h1>{{items.name}}</h1>
    <h1>{{items.eState}}</h1>
    <router-link :to="items.slug" class="info-btn">More Info</router-link>
  </div>
</template>

<script>
export default {
  props:['items']
};
</script>

<style scoped>

.agent-card {
  background: #fff;
  width: 17%;
  border: 2px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px 0;
}
.agent-card h1 {
  font-size: 14px;
  color: #000;
  padding: 0px 10px 5px 10px;
  text-align: center;
}
.agent-card .info-btn {
  font-size: 16px;
  color: #fff;
  background-color: #0cb2da;
  padding: 8px 30px;
  text-decoration: none;
  text-align: center;
  margin-top: 5px;
}
.agent-image{
  min-height: 166px;
}
.agent-image img {
  width: 150px;
  height: 150px;
}
@media (max-width: 479px) and (min-width: 320px) {
  .agent-card {
    width: 42%;
  }
}
</style>