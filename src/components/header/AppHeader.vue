<template>
  <header>
    <div class="container">
      <div :class="[{ active: transparent }, 'header disktop']">
        <section class="logo">
          <router-link to="/">
            <!-- <img
              v-if="transparent"
              src="../../assets/images/logo-transparent.svg"
              alt="Logo"
            /> -->
            <img
              v-if="transparent"
              src="../../assets/images/latest-logo.png"
              alt="Logo"
            />
            <img v-else src="../../assets/images/latest-logo.png" alt="Logo" />
          </router-link>
        </section>
        <section class="navigation-profile">
          <div class="nav">
            <div>
              <ul>
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/properties?page=1">Properties</router-link>
                </li>
                <li>
                  <router-link to="/realtors">Realtors</router-link>
                </li>
                <li>
                  <router-link to="/gallery">Gallery</router-link>
                </li>
                <li>
                  <router-link to="/blog">Blog</router-link>
                </li>
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
                <li>
                  <div class="add">
                    <button class="btn" @click="goTo">Add Property</button>
                  </div>
                  <!-- <div class="profile-pic shadowActive" @click="login('login')">
                    <img src="../../assets/images/profile.svg" alt="profile" />
                  </div>-->
                </li>
              </ul>
            </div>
            <div class="login-container">
              <div class="profile-pic shadowActive" @click="login('login')">
                <img src="../../assets/images/profile.svg" alt="profile" />
              </div>
              <LogoutModel v-if="$store.state.user && loginState" />
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- model -->
    <div v-if="!$store.state.user">
      <LoginModel :model="showModel == 'login'" ref="closeforgot" />
      <SignupModel :model="showModel == 'signup'" />
    </div>
  </header>
</template>
<script>
import LoginModel from "../loginModels/LoginModel.vue";
import SignupModel from "../loginModels/SignupModel.vue";
import LogoutModel from "../loginModels/logoutModel.vue";

export default {
  name: "AppHeader",
  props: ["transparent"],
  components: {
    LoginModel,
    SignupModel,
    LogoutModel,
  },
  data() {
    return {
      showModel: "",
      loginState: false,
    };
  },
  methods: {
    goTo() {
      if (!this.$store.state.user) {
        this.showModel = "login";
      } else {
        this.$router.push("/add-property");
      }
    },
    login(val) {
      if (!this.$store.state.user) {
        this.$refs.closeforgot.forget = false;
        this.showModel = val;
      } else {
        this.loginState = !this.loginState;
      }
    },
  },
};
</script>

<style scoped>
header {
  z-index: 3;
  position: relative;
}
.add {
  margin-right: 15px;
}
.add .btn {
  white-space: nowrap;
  background-color: #07abd3;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.shadowActive {
  box-shadow: 0px 2px 5px #888888a6;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90px;
}
.header .logo {
  width: 175px;
}
.header .logo img {
  width: 100%;
}
.navigation-profile {
  display: flex;
}
.navigation-profile .nav ul {
  display: flex;
  align-items: center;
  margin-top: 3px;
}
.navigation-profile .nav ul li {
  margin-right: 40px;
  text-transform: uppercase;
  font-size: 14px;
}
.navigation-profile .nav ul li a:hover {
  border-bottom: 1px solid #4092cf;
  color: #4092cf;
}
.navigation-profile .nav ul li:last-child {
  margin-right: unset;
}
.navigation-profile .nav ul li a {
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  padding: 10px 0;
}
.header.active .navigation-profile .nav ul li a {
  color: #fff;
}
.login-container {
  display: flex;
  align-items: center;
  position: relative;
}
.profile-pic {
  border-radius: 50%;
  overflow: hidden;
  width: 37px;
  background: white;
  height: 37px;
  cursor: pointer;
}
.logout-container {
  display: block;
  background: rgba(0, 0, 0, 0.32941);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999999;
  height: 100%;
}
.logout-inner {
  background: #fff;
  width: 25%;
  position: fixed;
  right: -600px;
  animation: slide 0.5s forwards;
  height: 100%;
}
@-webkit-keyframes slide {
  100% {
    right: 0;
  }
}
@keyframes slide {
  100% {
    right: 0;
  }
}
.logout-container ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
}
.logout-container ul li {
  padding: 10px;
  color: #333;
  font-size: 14px !important;
  font-weight: 500;
  margin: 0 !important;
  cursor: pointer;
  width: 85%;
  border-bottom: 1px solid #eee;
}
.logout-container ul li:last-child {
  border: none !important;
}
.profile-pic img {
  width: 100%;
  height: 100%;
}
</style>