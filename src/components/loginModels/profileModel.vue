<template>
  <div class="logout-container" id="slide">
    <div class="logout-inner">
      <div class="close-icon" @click="closeSlide">
        <img src="../../assets/images/close-icon.svg" alt />
      </div>
      <div class="profile-container">
        <h2>Profile</h2>
        <section v-if="!edit">
          <div
            class="img-container"
            v-if="info && info.image && !edit"
            :style="{ backgroundImage: 'url(' + info.image + ')' }"
          ></div>
          <div
            class="img-container"
            v-else
            :style="{
              backgroundImage:
                'url(' + require('@/assets/images/profileimage.png') + ')',
            }"
          ></div>
        </section>
        <section v-else>
          <!-- // change image -->
          <div
            class="img-container filechange"
            :style="
              !imageChanged
                ? info.image
                  ? { backgroundImage: 'url(' + info.image + ')' }
                  : {
                      backgroundImage:
                        'url(' +
                        require('@/assets/images/profileimage.png') +
                        ')',
                    }
                : { backgroundImage: 'url(' + previewImage + ')' }
            "
          >
            <label>
              <input type="file" @change="handleChange" size="60" />
              <img class="camera" src="@/assets/images/camerablue.png">
            </label>
          </div>
        </section>
      </div>
      <div class="edit-btn" v-if="!edit">
        <button @click="editProfile">Edit</button>
      </div>
      <div class="profile-list">
        <ul>
          <!-- <li class="profile-image">
          <p>Hi</p>
          </li>-->
          <li>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="#1783b4"
                d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
              />
            </svg>
            <input
              type="text"
              ref="focusInput"
              :readonly="!edit"
              v-model="editValue.name"
            />
          </li>
          <li>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="#1783b4"
                d="M17.051,3.302H2.949c-0.866,0-1.567,0.702-1.567,1.567v10.184c0,0.865,0.701,1.568,1.567,1.568h14.102c0.865,0,1.566-0.703,1.566-1.568V4.869C18.617,4.003,17.916,3.302,17.051,3.302z M17.834,15.053c0,0.434-0.35,0.783-0.783,0.783H2.949c-0.433,0-0.784-0.35-0.784-0.783V4.869c0-0.433,0.351-0.784,0.784-0.784h14.102c0.434,0,0.783,0.351,0.783,0.784V15.053zM15.877,5.362L10,9.179L4.123,5.362C3.941,5.245,3.699,5.296,3.581,5.477C3.463,5.659,3.515,5.901,3.696,6.019L9.61,9.86C9.732,9.939,9.879,9.935,10,9.874c0.121,0.062,0.268,0.065,0.39-0.014l5.915-3.841c0.18-0.118,0.232-0.36,0.115-0.542C16.301,5.296,16.059,5.245,15.877,5.362z"
              />
            </svg>
            <input type="text" :readonly="true" v-model="editValue.email" />
          </li>
          <li>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="#1783b4"
                d="M14.911,1.295H5.09c-0.737,0-1.339,0.603-1.339,1.339v14.733c0,0.736,0.603,1.338,1.339,1.338h9.821c0.737,0,1.339-0.602,1.339-1.338V2.634C16.25,1.898,15.648,1.295,14.911,1.295 M15.357,17.367c0,0.24-0.205,0.445-0.446,0.445H5.09c-0.241,0-0.446-0.205-0.446-0.445v-0.893h10.714V17.367z M15.357,15.58H4.644V4.42h10.714V15.58z M15.357,3.527H4.644V2.634c0-0.241,0.205-0.446,0.446-0.446h9.821c0.241,0,0.446,0.206,0.446,0.446V3.527z"
              />
            </svg>
            <input
              type="text"
              :readonly="!edit"
              v-model="editValue.phone_number"
            />
          </li>
          <li>
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="#1783b4"
                d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"
              />
            </svg>
            <input
              type="text"
              :readonly="!edit"
              v-model="editValue.estate_name"
            />
          </li>
        </ul>
        <div class="update-btn" v-if="edit">
          <button @click="submit" :disabled="loading">
            {{ !loading ? "Update" : "Loading..." }}
          </button>
        </div>
        <div class="premium">
          <h2>Premium Ads</h2>
          <div>
            <p>Super Hot</p>
            <p>{{ this.$store.state.userInfo.superhot_ads }}</p>
          </div>
          <div>
            <p>Hot</p>
            <p>{{ this.$store.state.userInfo.hot_ads }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "../../firebase";
const db = firebase.firestore();
const ref = firebase.storage();
export default {
  data() {
    return {
      loading : false,
      imageChanged: false,
      edit: false,
      editValue: {},
      previewImage: "",
      //
      updateImage: "",
    };
  },
  computed: {
    info() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    handleChange(e) {
      var img = e.target.files[0];
      this.updateImage = img;
      this.imageChanged = true;
      // selected file read
      var reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
      reader.readAsDataURL(img);
    },
    closeSlide() {
      this.$parent.profileOpen = false;
    },
    fillInput() {
      var { name, email, phone_number, estate_name } =
        this.$store.state.userInfo;
      this.editValue = {
        name,
        email,
        phone_number,
        estate_name,
      };
    },
    submit() {
      this.loading = true;
      if (this.updateImage) {
        const refTask = ref
          .ref(`${this.updateImage.name}`)
          .put(this.updateImage);
        refTask.on(
          `state-change`,
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.progress = progress;
          },
          (error) => {
            console.log(error);
            this.loading = false;
          },
          async () => {
            try {
              await refTask.snapshot.ref.getDownloadURL().then((url) => {
                this.editValue.image = url;
                this.updateProfile();
              });
            } catch (error) {
              this.loading = false;
            }
          }
        );
      } else {
        this.updateProfile();
      }
    },
    updateProfile() {
      this.loading = true;
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("users")
            .doc(user.uid)
            .update(this.editValue)
            .then(() => {
              this.closeSlide();
              this.$swal({
                icon: "success",
                title: "Updated Success",
                showConfirmButton: false,
                timer: 3000,
              });

              db.collection("users")
                .doc(user.uid)
                .get()
                .then((querySnapshot) => {
                  this.$store.dispatch("userDetail", querySnapshot.data());
                });
              this.$store.dispatch("setUser", true);
              this.loading = false;
            });
        }
      });
    },
    editProfile() {
      this.edit = true;
      this.$refs.focusInput.focus();
    },
  },
  watch: {
    info: {
      handler: function () {
        this.fillInput();
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
/* // file change */
.filechange label {
  padding: 10px;
  display: table;
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.filechange label .camera{
  width: 25px!important;
  height:25px!important;
  position:absolute;
  bottom:0;
  right:0;
}
.filechange {
  cursor: pointer;
  position:relative;
}
.filechange input[type="file"] {
  display: none;
}
.premium h2 {
  font-size: 16px;
  color: #333;
  padding: 20px 0;
  text-align: center;
}
.premium > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
}
.premium > div p {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}
.edit-btn {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.edit-btn button {
  border: none;
  outline: none;
  position: absolute;
  color: #fff;
  font-size: 14px;
  padding: 8px 15px;
  background: #1783b4;
  border-radius: 5px;
  right: 30px;
  top: 25px;
}
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  position: relative;
}
.profile-container section {
  display: flex;
  justify-content: center;
}
.profile-container h2 {
  font-size: 16px;
  color: #333;
}
.profile-container .img-container {
  background-size: cover;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 35px;
  border: 2px solid #eee;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #fcfcfc; */
  /* overflow: hidden; */
}
.profile-container .img-container img {
  width: 100%;
  height: 100%;
}

.logout-inner .close-icon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 15px 10px 0;
}
.logout-inner .close-icon img {
  width: 25px;
  height: 25px;
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
  z-index: 999;
  height: 100%;
}
.logout-inner {
  background: #f5f6fa;
  width: 30%;
  position: fixed;
  right: -600px;
  animation: slide 0.5s forwards;
  height: 100%;
}
.update-btn {
  text-align: center;
}
.update-btn button {
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  padding: 8px 15px;
  background: #1783b4;
  border-radius: 5px;
  margin: 10px;
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
  padding: 15px 10px;
  color: #333;
  font-size: 16px !important;
  font-weight: 600;
  margin: 0 !important;
  cursor: pointer;
  width: 95%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
}
.logout-container ul li input {
  border: none;
  outline: none;
  color: #333;
  font-size: 16px !important;
  font-weight: 600;
  width: 100%;
}
.logout-container .profile-list {
  border-top: 2px solid #eee;
  padding: 40px 10px 10px 10px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background: #fff;
  height: 100%;
}
.logout-container ul li img {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
.logout-container ul li svg {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}
.logout-text {
  color: #1783b4 !important;
}
.profile-pic img {
  width: 100%;
  height: 100%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .logout-inner {
    width: 100%;
  }
}
</style>
