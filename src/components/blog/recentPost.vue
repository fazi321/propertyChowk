<template>
  <div>
    <div class="recent-posts">
      <div class="heading">
        <hr />
        <h2>Recent Posts</h2>
        <hr />
      </div>
      <router-link to="" class="recent-card">
        <h3>CDA Accepts FWO'S Proposal For Expressway's Expansion</h3>
      </router-link>
      <router-link to="" class="recent-card">
        <h3>CDA Accepts FWO'S Proposal For Expressway's Expansion</h3>
      </router-link>
      <router-link to="" class="recent-card">
        <h3>CDA Accepts FWO'S Proposal For Expressway's Expansion</h3>
      </router-link>
      <router-link to="" class="recent-card">
        <h3>CDA Accepts FWO'S Proposal For Expressway's Expansion</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.recent-posts{
    margin-top: 45px;
}
.recent-posts a{
    text-decoration: none;
}
.recent-posts .heading {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.recent-posts .heading h2 {
  font-size: 16px;
  text-transform: uppercase;
  color: #333;
  margin: 0 10px;
  white-space: nowrap;
}
.recent-posts .heading hr {
  width: 100%;
  height: 2px;
  background: #eee;
  border: none;
}
.recent-card {
  display: flex;
  padding: 10px 0;
}
.recent-card h3 {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #333;
  /* margin-left: 15px; */
}
</style>