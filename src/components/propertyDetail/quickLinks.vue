<template>
  <section class="QLinks-container">
      <h3>Quick Links</h3>
    <ul>
      <li>
        <a href="#">Property for rent in Islamabad</a>
      </li>
      <li>
        <a href="#">Property for rent in DHA Defence</a>
      </li>
      <li>
        <a href="#">Property for rent in DHA Defence Phase 2</a>
      </li>
      <li>
        <a href="#">Upper Portions for rent in Islamabad</a>
      </li>
      <li>
        <a href="#">Upper Portions for rent in DHA Defence</a>
      </li>
      <li>
        <a href="#">Upper Portions for rent in DHA</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "QuickLinks",
};
</script>

<style scoped>
.QLinks-container {
  padding: 20px;
  box-shadow: 0px 0px 10px #00000012;
  border-radius: 5px;
  margin: 50px 0;
}
.QLinks-container h3 {
  padding: 10px;
  color: #000000;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
}
.QLinks-container ul {
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
}
.QLinks-container ul li {
  padding: 10px 0;
  text-align: left;
}
.QLinks-container ul li a {
  text-decoration: none;
  color: #000;
  font-size: 14px;
}
</style>