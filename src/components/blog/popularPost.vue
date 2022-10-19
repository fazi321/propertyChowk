<template>
  <div>
    <div class="popular-posts">
      <div class="heading">
        <hr />
        <h2>Popular Posts</h2>
        <hr />
      </div>
      <router-link to class="popular-card">
        <div>
          <img src="../../assets/images/commercial.jpg" />
          <div class="badge">
            <span>1</span>
          </div>
        </div>
        <h3>CDA Accepts FWO'S Proposal For Expressway's Expansion</h3>
      </router-link>
      <router-link to class="popular-card">
        <div>
          <img src="../../assets/images/commercial.jpg" />
          <div class="badge">
            <span>1</span>
          </div>
        </div>
        <h3>CDA Accepts FWO'S Proposal For Expressway's Expansion</h3>
      </router-link>
      <router-link to class="popular-card">
        <div>
          <img src="../../assets/images/commercial.jpg" />
          <div class="badge">
            <span>1</span>
          </div>
        </div>
        <h3>CDA Accepts FWO'S Proposal For Expressway's Expansion</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.popular-posts .heading {
  display: flex;
  align-items: center;
}
.popular-posts a {
  text-decoration: none;
}
.popular-posts .heading h2 {
  font-size: 16px;
  text-transform: uppercase;
  color: #333;
  margin: 0 10px;
  white-space: nowrap;
}
.popular-posts .heading hr {
  width: 100%;
  height: 2px;
  background: #eee;
  border: none;
}
.popular-card {
  display: flex;
  padding: 20px 0;
}
.popular-card > div {
  width: 100px;
  position: relative;
}
.popular-card > div img {
  width: 100%;
}
.popular-card > div .badge {
  position: absolute;
  bottom: -3px;
  right: -5px;
  border-radius: 50%;
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
}
.popular-card > div .badge span {
  font-size: 12px;
  color: #fff;
}
.popular-card h3 {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #333;
  margin-left: 15px;
}
</style>