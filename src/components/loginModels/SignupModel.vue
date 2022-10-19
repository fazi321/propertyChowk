<template>
  <section :class="['login-signup', { active: model }]">
    <div class="primary-login">
      <div class="main-login">
        <div class="logo-close">
          <div class="logo">
            <img src="../../assets/images/latest-logo.png" alt />
          </div>
          <div class="close-icon" @click="closeModel">
            <img src="../../assets/images/close-icon.svg" alt />
          </div>
        </div>
        <div class="headings">
          <h1>Sign Up</h1>
          <h4>Please create an account</h4>
        </div>
        <div class="login-form">
          <div class="form-container">
            <form autocomplete="off" @submit.prevent="signUp">
              <div class="input-div">
                <input
                  type="text"
                  placeholder="Name"
                  v-model="insertData.name"
                  required
                />
              </div>
              <div class="input-div">
                <input
                  type="email"
                  placeholder="Email"
                  v-model="insertData.email"
                  required
                />
              </div>
              <div class="input-div">
                <input
                  type="number"
                  placeholder="Phone Number"
                  v-model="insertData.phone_number"
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
              <div class="input-div">
                <input
                  type="text"
                  placeholder="Estate Name"
                  v-model="insertData.estate_name"
                  required
                />
              </div>

              <div class="input-div">
                <button type="submit" v-if="!loading">Sign Up</button>
                <button v-else>Loading...</button>
              </div>
            </form>
          </div>
          <div class="buttom-text">
            Don’t Have an Account?
            <span @click="Login">Login</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "../../firebase";
const db = firebase.firestore();
export default {
  props: ["model"],
  data() {
    return {
      loading:false,
      //
      password: "",
      insertData: {
        device_id: "",
        email: "",
        estate_name: "",
        favorites: [],
        hot_ads: 0,
        id: "",
        image: null,
        name: "",
        package: null,
        packageName: "",
        payAmount: 0,
        phone_code: null,
        phone_number: "",
        superhot_ads: 0,
        verified: false,
      },
    };
  },
  methods: {
    async signUp() {
      this.loading = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.insertData.email, this.password)
        .then((u) => {
          this.insertData.id = u.user.uid;
          db.collection("users")
            .doc(this.insertData.id)
            .set({ ...this.insertData })
            .then(() => {
              // this.Login();
              this.$swal({
                icon: "success",
                title: "Login Success",
                showConfirmButton: false,
                timer: 3000,
              });
              this.loading = false
            });
        })
        .catch((err) => {
          this.loading = false
          this.$swal({
            icon: "error",
            title: err.message,
            showConfirmButton: false,
            timer: 3000,
          });
          // alert(err.message);
        });
    },
    closeModel() {
      this.$parent.showModel = "";
    },
    Login() {
      this.$parent.showModel = "login";
    },
  },
};
</script>
<style scoped>
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
  background-color: #fff !important;
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