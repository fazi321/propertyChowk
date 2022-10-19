<template>
  <section :class="['login-signup', { active: model }]">
    <div class="primary-login" v-if="!forget">
      <div class="main-login">
        <div class="logo-close">
          <div class="logo">
            <img src="../../assets/images/latest-logo.png" alt="" />
          </div>
          <div class="close-icon" @click="closeModel">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>login</h1>
          <h4>Please Sign In to continue</h4>
        </div>
        <div class="login-form">
          <div class="form-container">
            <form autocomplete="off" @submit.prevent="Login">
              <div class="input-div">
                <input
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  required
                />
              </div>
              <div class="input-div">
                <input
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  required
                />
              </div>
              <div class="error" v-if="!isExist">Password is Incorrect!</div>
              <div class="input-div">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
          <div class="buttom-text">
            Don’t Have an Account? <span @click="signUp">Sign Up </span>
            or <span @click="showForget">forgot</span>
          </div>
        </div>
      </div>
    </div>
    <!-- forget  -->
    <div class="primary-login" v-if="forget">
      <div class="main-login">
        <div class="logo-close">
          <div class="logo">
            <img src="../../assets/images/latest-logo.png" alt="" />
          </div>
          <div class="close-icon" @click="closeModel">
            <img src="../../assets/images/close-icon.svg" alt="" />
          </div>
        </div>
        <div class="headings">
          <h1>forget</h1>
          <h4>Please Email to continue</h4>
        </div>
        <div class="login-form">
          <div class="form-container">
            <form autocomplete="off" @submit.prevent="forgot">
              <div class="input-div">
                <input
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  required
                />
              </div>
              <div class="error" v-if="!isExist">Password is Incorrect!</div>
              <div class="input-div">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div class="buttom-text">
            Don’t Have an Account? <span @click="signUp">Sign Up </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
export default {
  props: ["model"],
  data() {
    return {
      email: "",
      password: "",
      isExist: true,
      forget: false,
    };
  },
  methods: {
    async Login() {
      try {
        const login = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        if (login) {
          this.$parent.showModel = "";
          this.$parent.closeSlide();
          this.$swal({
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 3000
          });
        }
      } catch (error) {
        this.isExist = false;
      }
    },
    async forgot() {
      try {
        const forGot = await firebase.auth().sendPasswordResetEmail(this.email);
        if (forGot) {
          console.log("success!!");
        }
      } catch (error) {
        // console.log(error);
      }
    },
    showForget() {
      this.forget = !this.forget;
    },
    closeModel() {
      this.$parent.showModel = "";
    },
    signUp() {
      this.$parent.showModel = "signup";
    },
  },
};
</script>
<style scoped>
.error{
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: red;
}
.login-signup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  visibility: hidden;
}
.login-signup.active {
  visibility: visible;
}
.primary-login {
  width: 46%;
  background: #fff;
  height: fit-content;
  padding: 20px;
  border-radius: 20px;
  transition: 0.2s linear;
  transform: translateY(-100%);
}
.login-signup.active .primary-login {
  transform: translateY(0);
}
.logo-close {
  display: flex;
  justify-content: center;
  position: relative;
}
.logo-close .logo {
  width: 160px;
}
img {
  width: 100%;
  height: 100%;
}
.close-icon {
  cursor: pointer;
  position: absolute;
  right: 12px;
  width: 30px;
  height: 30px;
}
.headings {
  text-align: center;
  padding: 24px;
}
.headings h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
}
.login-form input {
  width: 62%;
  height: 42px;
  border: none;
  padding: 6px 30px;
  border-radius: 50px;
  box-shadow: 0px 0px 3px 1px #f1f1f1;
  outline: none;
  margin-bottom: 22px;
  user-select: none;
}
.login-form input::placeholder {
  color: #b0b0b0;
}
.form-container {
  display: flex;
  justify-content: center;
}
.form-container form {
  width: 100%;
}
.input-div {
  display: flex;
  justify-content: center;
}
.input-div button {
  padding: 15px 30px;
  background-image: linear-gradient(90deg, #0cb2da, #0cb2da);
  color: #fff;
  width: 73%;
  font-size: 18px;
  border: none;
  padding: 18px 30px;
  border-radius: 50px;
  outline: none;
  margin-bottom: 22px;
  box-shadow: 0px 2px 4px 1px #c9c9c9a6;
}
.buttom-text {
  text-align: center;
  font-size: 14px;
}
.buttom-text span {
  text-align: center;
  color: #0cb2da;
  cursor: pointer;
}
/* responsive */
@media (max-width: 479px) and (min-width: 320px) {
  .primary-login {
    width: 84%;
  }
  .headings h1 {
    font-size: 20px;
  }
}
</style>