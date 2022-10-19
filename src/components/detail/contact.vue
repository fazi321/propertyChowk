<template>
  <div class="contact-container">
    <h1>Contact/Address</h1>
    <div class="addres">
      <ul class="contact-list">
        <li >
          <div>
            <img src="../../assets/images/phone.svg" />
          </div>
          <div>
            <router-link to="#">(+92) 4512145789</router-link>
            <br>
            <router-link to="#">(+92) 4512145789</router-link>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/images/email.svg" />
          </div>
          <div>
            <router-link to="#">loremipsum@gmailcom</router-link>
            <br />
            <router-link to="#">loremipsum@gmailcom</router-link>
          </div>
        </li>
        <li>
          <div>
            <img src="../../assets/images/location.svg" />
          </div>
          <div>
            <router-link to="#">
              Imperial MEA General Trading L.L.C Office No. 516, The Binary
              Tower Al Abraj Street.
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaneMap"
};
</script>

<style scoped>
.contact-container {
  padding: 40px 0;
}
.contact-container h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  padding: 15px 0;
    text-transform: uppercase;
}
.addres {
  padding: 15px;
}
.contact-list {
  list-style: none;
  margin: 0;
  padding: 15px 0;
}
.contact-list li {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.contact-list li a {
  text-decoration: none;
  color: #8a8a8a;
  font-size: 18px;
  text-align: left;
  line-height: 1.6;
}
.contact-list li div:first-child {
  margin-right: 15px;
  width: 30px;
  height: 30px;
}
.contact-list li div img {
  width: 100%;
  height: 100%;
}
.contact-list .fist-list div:nth-child(2) {
  display: flex;
}
.contact-list li div:nth-child(2) {
  width: 300px;
  text-align: left;
}
@media (max-width: 479px) and (min-width: 320px) {
  .contact-container{
    padding: 40px 10px;
  }
}
</style>