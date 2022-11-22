<template>
  <footer>
    <div class="footer">
      <div class="footer-container">
        <section class="footer-row">
          <div class="col">
            <h3 class="contact">CONTACT US</h3>
            <ul class="contact-list contact">
              <!-- <li class="fist-list">
              <div><img src="../../assets/images/location.svg" /></div>
              <div>
                <router-link to="#"
                  >Imperial MEA General Trading L.L.C Office No. 516, The Binary
                  Tower Al Abraj Street.</router-link
                >
              </div>
              </li>-->
              <li>
                <div>
                  <label>Mobile</label>
                  <img src="../../assets/images/phone.svg" />
                </div>
                <div>
                  <a class="call" href="tel:(+92) 3078949292">(+92) 307 8949292</a>
                </div>
              </li>
              <li>
                <div>
                  <label>Office</label>
                  <img src="../../assets/images/briefcase.png" />
                </div>
                <div>
                  <a class="call" href="tel:(042) 111-777-111">(042) 111-777-111</a>
                  <!-- <router-link to="#">(042) 111-777-111</router-link> -->
                </div>
              </li>
              <li>
                <div>
                  <label>Whatsapp</label>
                  <img src="../../assets/images/user.png" />
                </div>
                <div>
                  <a class="whatsapp" href="https://wa.me/923078949292" target="_blank">(+92) 307 8949292</a>
                  <!-- <router-link to="#">(+92) 307 8949292</router-link> -->
                </div>
              </li>
              <li>
                <div>
                  <label>Email</label>
                  <img src="../../assets/images/email.svg" />
                </div>
                <div>
                  <router-link to="#">info@propertychowk.com</router-link>
                </div>
              </li>
            </ul>
          </div>
          <div class="col">
            <h3>QUICK LINKS</h3>
            <ul class="contact-list">
              <li class="fist-list">
                <router-link to="/about">About Us</router-link>
              </li>
              <li class="fist-list">
                <router-link to="contact">Contact Us</router-link>
              </li>
              <li class="fist-list">
                <router-link to="/privacy">Privacy Policy</router-link>
              </li>
              <li class="fist-list">
                <router-link to="#">Support</router-link>
              </li>
              <li class="fist-list">
                <router-link to="/term-conditions">Term & Conditions</router-link>
              </li>
            </ul>
          </div>
          <div class="col">
            <h3>CITIES</h3>
            <div class="contact-list">
              <div class="city-list">
                <router-link to="/search?city=Lahore&page=1">Lahore</router-link>
                <router-link to="/search?city=Rawalpindi&page=1">Rawalpindi</router-link>
                <router-link to="/search?city=Bahawalpur&page=1">Bahawalpur</router-link>
                <router-link to="/search?city=Multan&page=1">Multan</router-link>
                <router-link to="/search?city=Gujranwala&page=1">Gujranwala</router-link>
                <router-link to="/search?city=Karachi&page=1">Karachi</router-link>
                <router-link to="/search?city=Quetta&page=1">Quetta</router-link>
                <router-link to="/search?city=Peshawar&page=1">Peshawar</router-link>
              </div>
            </div>
          </div>
          <div class="col">
            <h3>FOLLOW US</h3>
            <div class="contact-list">
              <div class="follow-list">
                <a href="https://facebook.com/propertychowkpk">
                  <img src="../../assets/images/fb.png" />
                </a>

                <a href="https://twitter.com/propertychowk">
                  <img src="../../assets/images/twiter.png" />
                </a>
                <a class="youtube" href="https://www.youtube.com/channel/UCgzxqMJuzeGjMDcozRK_4bQ">
                  <img src="../../assets/images/footer-youtube.png" />
                </a>
                <a class="whats" href="https://www.instagram.com/propertychowk">
                  <img src="../../assets/images/insta.png" />
                </a>
                <a class="whats" href="https://wa.me/message/CX7RNKRE6TAPE1">
                  <img src="../../assets/images/footer-whatsapp.png" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div class="reserved">
          <p>@2021 All rights reserved. Created by Property Chowk</p>
        </div>
      </div>
    </div>
    <BottomFooter />
  </footer>
</template>

<script>
import BottomFooter from "@/components/footer/bottomFooter.vue";
export default {
  name: "AppFooter",
  components: {
    BottomFooter
  }
};
</script>

<style scoped>
.footer {
  background: #1e1e1e;
  min-height: 200px;
  width: 100%;
}
.footer .footer-container {
  max-width: 1166px;
  margin: 0 auto;
}
.footer .footer-row {
  padding: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.footer .footer-row .col {
  padding: 10px;
}
.footer .footer-row .col h3 {
  color: #fff;
  font-size: 18px;
  text-align: left;
}
.contact {
  padding-left: 26px;
}
.footer .footer-row .col .contact-list {
  list-style: none;
  margin: 0;
  padding: 15px 0;
}
.footer .footer-row .col .contact-list li {
  /* display: flex;
  align-items: center; */
  margin: 10px 0;
}
.footer .footer-row .col .contact-list li a {
  text-decoration: none;
  color: #8a8a8a;
  font-size: 14px;
  text-align: left;
  line-height: 1.6;
}
.footer .footer-row .col .contact li a {
  font-size: 18px !important;
  font-weight: 600;
}
.footer .footer-row .col .contact li {
  padding: 5px 0;
  border-bottom: 1px solid #8a8a8a;
}
.footer .footer-row .col .contact-list li div:first-child {
  display: flex;
  justify-content: space-between;
}
.footer .footer-row .col .contact-list li div label {
  font-size: 14px;
}
.footer .footer-row .col .contact-list li div img {
  width: 18px;
}
.footer .footer-row .col .contact-list li div:nth-child(2) {
  width: 300px;
  text-align: left;
}
.city-list {
  display: flex;
  flex-wrap: wrap;
  width: 305px;
  margin-top: 10px;
}
.city-list a {
  text-decoration: none;
  color: #8a8a8a;
  border: 1px solid #8a8a8a;
  border-radius: 3px;
  padding: 6px 8px;
  min-width: 76px;
  margin: 4px 3px;
  font-size: 14px;
  text-align: center;
}
.follow-list {
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 150px;
}

.follow-list .youtube img {
  width: 33px !important;
  margin-right: 7px;
  height: 30px;
}
.follow-list a img {
  width: 35px;
  margin-right: 5px;
}
.reserved {
  padding: 30px 54px;
}
.reserved p {
  color: #fff;
  font-size: 16px;
  text-align: left;
}
/* reponsive start */
@media (max-width: 479px) and (min-width: 320px) {
  .footer .footer-row .col {
    width: 100%;
  }
  .reserved {
    padding: 25px !important;
  }
}
@media (max-width: 991px) and (min-width: 768px) {
}
@media (max-width: 1199px) and (min-width: 1024px) {
}
@media (max-width: 684px) and (min-width: 575px) {
}
@media (max-width: 767px) and (min-width: 685px) {
}
@media (max-width: 991px) and (min-width: 768px) {
}
@media (max-width: 574px) and (min-width: 480px) {
}
/* reponsive end */
</style>