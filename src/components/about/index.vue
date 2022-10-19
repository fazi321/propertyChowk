<template>
  <section class="container">
    <div class="about-main">
      <div class="about-left">
        <div class="logo-image">
          <!-- <img src="../../assets/images/PropertyChowklogo.jpg" alt /> -->
          <img v-lazy="require(`../../assets/images/PropertyChowklogo.jpg`)" />
          <div class="circle"></div>
        </div>
        <div class="about-content">
          <h3>Our Mission</h3>
          <p>Our mission is to revolutionize the real estate market. To make a Trusted and reliable portal for the people. Our mission is to build a positive reputation in real general and generate deals and plans that are accessible and reliable to the people out there. We are all about Groundbreaking initiatives from start to end and will be sure to provide quality service throughout.</p>
        </div>
        <div class="logo-image">
          <!-- <img src="../../assets/images/PropertyChowklogo.jpg" alt /> -->
          <img v-lazy="require(`../../assets/images/PropertyChowklogo.jpg`)" />
          <div class="circle"></div>
        </div>
      </div>
      <div class="about-right">
        <div class="about-content">
          <h3>About us</h3>
          <p>
            PROPERTY CHOWK is on its way to becoming one of the biggest real state monopolies in Pakistan that will give buyers and sellers an ultimate and easy platform to interact and make deals accordingly. In a small amount of time, Property Chowk has established itself not as one of the biggest real estates but also on its way to acing to the end. The dream behind this venture is to revolutionize the real estate in Pakistan, turning the game and making it modern, and advanced with latest technology.
            The main motive behind the Property Chowk is to build something extraordinary and convenient for people. Today, we have achieved it and we are stronger than ever. Behind this amazing initiative, the pioneer and founder of this initiative are Mr. Zeeshan Ismail, who brings the dream into reality.
          </p>
        </div>
        <div class="logo-image">
          <img v-lazy="require(`../../assets/images/PropertyChowklogo.jpg`)" />
          <div class="circle"></div>
        </div>
        <div class="about-content">
          <h3>Our Vision</h3>
          <p>Our vision is to create something convenient and extraordinary for people that will benefit us as well as all the people in Pakistan. The real estate market is not convenient and demands a lot of hustles. We, Property Chowk have taken the initiative of inventing something extraordinary for people. A real estate portal without manipulation and fraud,a trustworthy space where people can buy, sell and make deals about real estate.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
  components: {}
};
</script>

<style>
.about-main {
  display: flex;
}
.about-main .about-left {
  width: 50%;
}
.about-main .about-left .logo-image {
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #ed464d78;
  position: relative;
}
.logo-image img {
  width: 280px;
}
.about-main .about-left .logo-image .circle {
  width: 10px;
  height: 10px;
  border: 3px solid #ed464d;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  right: -9px;
  top: 30%;
}
.about-main .about-left .about-content h3 {
  text-align: right !important;
}
.about-main .about-right {
  width: 50%;
}
.about-main .about-right .logo-image {
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px solid #ed464d78;
  position: relative;
}
.about-main .about-right .logo-image .circle {
  width: 10px;
  height: 10px;
  border: 3px solid #ed464d;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: -9px;
  top: 23%;
}
.about-content {
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  min-height: 380px;
}
.about-content h3 {
  font-size: 24px;
  color: #333;
  font-weight: 500;
  padding: 15px;
  margin-top: 30px;
}
.about-content p {
  font-size: 15px;
  color: #333;
  text-align: center;
  line-height: 1.3;
}
</style>