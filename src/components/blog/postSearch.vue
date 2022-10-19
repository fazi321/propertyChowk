<template>
  <div class="post-search">
    <label>Search</label>
    <div>
      <input type="search" />
      <button class="search-btn">Search</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.post-search {
  margin: 30px 0;
}
.post-search label {
  font-size: 14px;
  color: #333;
  text-transform: uppercase;
  font-weight: 500;
}
.post-search div {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.post-search div input {
  outline: none;
  border: 1px solid #808080;
  color: #333;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
}
.post-search div .search-btn {
  border-radius: 3px;
  border: 1px solid #808080;
  padding: 10px 15px;
  color: #333;
  font-size: 12px;
  outline: none;
  background: #eee;
  margin-left: 8px;
}
</style>