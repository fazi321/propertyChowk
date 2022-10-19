<template>
  <div class="feature-container">
    <h1>Project Features</h1>
    <div class="card-feature">
      <div>
        <span>Gas</span>
      </div>
      <div>
        <span>Electricity</span>
      </div>
      <div>
        <span>Loby</span>
      </div>
      <div>
        <span>Kitchen</span>
      </div>
      <div>
        <span>Near school</span>
      </div>
      <div>
        <span>Near Hospital</span>
      </div>
      <div>
        <span>Near school</span>
      </div>
      <div>
        <span>Near Hospital</span>
      </div>
      <div>
        <span>Electricity</span>
      </div>
      <div>
        <span>Loby</span>
      </div>
      <div>
        <span>Kitchen</span>
      </div>
      <div>
        <span>Gas</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectFeatures"
};
</script>

<style>
.feature-container {
  padding: 40px 0;
}
.feature-container h1 {
  font-size: 24px;
  font-weight: 600;
  padding: 15px 0;
  text-align: center;
    text-transform: uppercase;
}
.feature-container .card-feature {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.feature-container .card-feature div {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #5eaacb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.feature-container .card-feature div span {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}
</style>