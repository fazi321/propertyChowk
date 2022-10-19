<template>
  <section class="card-container">
    <div>
      <router-link :to="`property-detail?id=${dataList.id}`">
        <div class="card-top">
          <div class="image-card">
            <div
              class="water-mark"
              v-if="dataList.images && dataList.images.length"
            >
              <img src="../../assets/images/Propertylogowatermark.png" />
            </div>
            <div class="water-mark-logo" v-else>
              <img src="../../assets/images/logo-transparent.svg" />
            </div>
            <img
              :src="dataList.images[0]"
              v-if="dataList.images && dataList.images.length"
            />
            <!-- <img v-lazy="require(dataList.images[0])"  v-if="dataList.images && dataList.images.length"/> -->
            <img src="../../assets/images/about.png" v-else />
          </div>
          <div
            class="super-hot"
            v-if="dataList.featured && dataList.feature_type == 0"
          >
            <button class="btn btn-hot">SUPER HOT</button>
          </div>
          <div class="super-hot" v-if="dataList.feature_type == 1">
            <button class="btn btn-hot">HOT</button>
          </div>
          <!-- <div class="camera">
        <p>{{ dataList.views }}</p>
        <div class="cam-img">
          <img src="../../assets/images/camera.png" />
        </div>
      </div>
      <div class="wishlist">
        <div class="wish-img">
          <img src="../../assets/images/wishlist.svg" />
        </div>
        </div>-->
        </div>
        <div class="card-content">
          <div class="location-button">
            <button class="btn btn-blue" v-if="dataList.property_title">
              {{ dataList.property_title }}
            </button>
          </div>
          <div class="type-headding">
            <h2 v-if="!dataList.purpose">
              {{ dataList.sub_type }}
              {{ dataList.sub_type == "House" ? "" : dataList.property_type }}
              for Sale
            </h2>
            <h2 v-else>{{ dataList.sub_type }} for Rent</h2>
          </div>
          <div class="location">
            <h3>PKR {{ converter(dataList.price) }}</h3>
            <p>
              <span v-if="dataList.block">Block {{ dataList.block }},</span>
              <span v-if="dataList.sector">Sector {{ dataList.sector }},</span>
              <span v-if="dataList.phase">Phase {{ dataList.phase }},</span>
              <span v-if="dataList.society">{{ dataList.society }},</span>
              <span v-if="dataList.city">{{ dataList.city }}</span>
            </p>
          </div>
        </div>
      </router-link>
      <div class="card-main">
        <div class="icons-main">
          <div class="icons-wrapper">
            <div class="icon" v-if="dataList.bedrooms">
              <div class="i-img">
                <img src="../../assets/images/bed.png" />
              </div>
              <div>
                <p>{{ dataList.bedrooms }}</p>
              </div>
            </div>
            <div class="icon" v-if="dataList.bathrooms">
              <div class="i-img">
                <img src="../../assets/images/bath.png" />
              </div>
              <div>
                <p>{{ dataList.bathrooms }}</p>
              </div>
            </div>
            <div class="icon">
              <div class="i-img">
                <img src="../../assets/images/ft.png" />
              </div>
              <div>
                <p>{{ dataList.area }} {{ dataList.area_type }}</p>
              </div>
              <!-- <h1>{{dataList.city}}</h1> -->
            </div>
          </div>
          <div class="wish-img" v-if="$store.state.user">
            <router-link :to="`property-detail?id=${dataList.id}`">
              <span
                class="pair"
                v-if="isExist(dataList.property_features, 'Pair')"
                >Pair</span
              >
              <span
                class="pair"
                v-if="isExist(dataList.property_features, 'Triple')"
                >Triple</span
              >
              <span
                class="pair"
                v-if="isExist(dataList.property_features, 'Tetra')"
                >Tetra</span
              >
            </router-link>
            <div v-if="!loading">
              <img
                v-if="fav"
                @click="favUnFav(dataList.docKey)"
                class="svg-icon"
                src="../../assets/images/heart.svg"
              />
              <svg
                class="svg-icon"
                viewBox="0 0 20 20"
                @click="favUnFav(dataList.docKey)"
                v-else
              >
                <path
                  fill="#606060"
                  d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"
                />
              </svg>
            </div>
            <img
              v-else
              class="svg-icons"
              src="../../assets/images/heartAni.svg"
            />
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
  name: "CardView",
  props: ["dataList"],
  data() {
    return {
      fav: false,
      loading: false,
    };
  },
  computed: {
    info() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    favUnFav(v) {
      var isAdd = false;
      if (this.info.favorites.includes(v)) {
        isAdd = false;
        this.info.favorites = this.info.favorites.filter((item) => {
          return v != item;
        });
      } else {
        isAdd = true;
        this.info.favorites.push(v);
      }
      this.callFirebase(isAdd, v);
    },
    callFirebase(option, key) {
      this.loading = true;
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("users")
            .doc(user.uid)
            .update({ favorites: this.info.favorites })
            .then(() => {
              if (option) {
                this.fav = true;
              } else {
                this.fav = false;
                if (this.$route.path == "/favorites") {
                  this.$emit("update", key);
                }
              }
              this.loading = false;
              console.log("updated");
            });
        }
      });
    },
    isExistWish() {
      if (this.info && this.info.favorites) {
        var listFav = [...this.info.favorites];
        if (listFav.includes(this.dataList.docKey)) {
          this.fav = true;
        } else {
          this.fav = false;
        }
      }
    },
    isExist(arr, val) {
      var active = arr && arr.includes(val);
      return active;
    },
    converter: (amount) => {
      if (!amount) return "";
      var val = Math.abs(amount);
      if (val >= 1000000000) {
        val = val / 1000000000 + " Arab";
      }
      if (val >= 10000000) {
        val = val / 10000000 + " Crore";
      }
      if (val >= 100000) {
        val = val / 100000 + " Lakh";
      }
      if (val >= 1000) {
        val = val / 1000 + " Thousand";
      }
      return val;
    },
  },
  watch: {
    info: {
      handler: function () {
        this.isExistWish();
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.svg-icon {
  cursor: pointer;
}
.wish-img {
  display: flex;
  align-items: center;
}
.pair {
  margin-right: 5px;
  font-size: 14px;
  color: #ff3b00;
}
.icons-main {
  display: flex;
  justify-content: space-between;
}
.icons-main .wish-img svg {
  width: 25px;
  margin-right: 10px;
}
.icons-main .wish-img img {
  width: 27px;
  margin-right: 10px;
}
.icons-main .wish-img .svg-icons {
  width: 32px;
  margin-right: 7px;
  margin-top: -1.8px;
}
.type-headding h2 {
  font-size: 16px;
  font-weight: 500;
  color: #07abd3;
  text-align: left;
  padding: 10px 5px;
}
.card-container a {
  text-decoration: none;
}
.water-mark {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.water-mark img {
  width: 85px !important;
  height: 70px !important;
  opacity: 0.5;
}
.water-mark-logo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.water-mark-logo img {
  width: 150px !important;
}
.card-main {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.card-container {
  width: 276px;
  margin-bottom: 30px;
  box-shadow: 0px 1px 6px -2px #00000036;
  height: fit-content;
  background: #fff;
  border-radius: 5px;
  padding: 5px;
  height: 355px;
  margin-right: 20px;
  position: relative;
}
.card-container .card-top {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8e8e8;
  position: relative;
}
.card-container .image-card {
  height: 175px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.card-container .image-card img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.card-container .icons-wrapper {
  padding: 7px 5px 15px 5px;
  display: flex;
  width: 100%;
}
.card-container .icons-wrapper .icon {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.card-container .icons-wrapper .icon .i-img {
  width: 13px;
  height: 13px;
}
.card-container .icons-wrapper .icon .i-img img {
  width: 100%;
  height: 100%;
}
.card-container .icons-wrapper .icon p {
  font-size: 14px;
  color: #606060;
  margin-left: 7px;
}
.card-content {
  width: 100%;
}
.card-content .location {
  padding: 0 5px;
}
.card-content .location h3 {
  text-align: left;
  font-size: 18px;
  color: #000;
  font-weight: 500;
}
.card-content .location p {
  color: #606060;
  font-size: 14px;
  text-align: left;
  line-height: 1.5;
  padding: 6px 0;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  overflow: hidden;
}
.card-content .location-button {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 33px;
}
.card-content .location-button button {
  padding: 7px 15px !important;
  font-size: 12px !important;
  border-radius: 20px;
  margin: 5px 5px 0 5px !important;
  width: unset !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-shadow: 0 10px 10px -5px #0000004a;
  max-width: 200px;
}
.bottom-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.bottom-buttons button {
  margin: 5px 0 5px 10px;
  padding: 6px 15px !important;
  font-size: 12px !important;
  width: unset;
}
/* super hot button  */
.super-hot {
  position: absolute;
  top: 0px;
  left: 0px;
}
.super-hot .btn-hot {
  background-image: linear-gradient(to right, #e30000, #ff3b00);
  font-size: 12px;
  padding: 7px 15px 8px 8px;
  border-bottom-right-radius: 20px;
  min-width: 70px;
}
/* camera icon  */
.camera {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: #22202061;
  position: absolute;
  bottom: 0;
  left: 0;
}
.camera p {
  color: #fff;
  font-size: 14px;
  margin-right: 5px;
  position: relative;
  top: 1px;
}
.camera .cam-img {
  width: 18px;
  height: 18px;
}
.camera .cam-img img {
  width: 100%;
  height: 100%;
}
/* wishlist style  */
.wishlist {
  position: absolute;
  bottom: 0;
  right: 0;
}
.wishlist .wish-img {
  height: 27px;
  line-height: 0;
}
.wishlist .wish-img img {
  width: 100%;
  height: 100%;
}
@media (max-width: 479px) and (min-width: 320px) {
  .card-container {
    width: 100%;
    height: 330px;
  }
  .card-container .image-card {
    height: 150px;
  }
  .super-hot .btn-hot {
    font-size: 10px;
    padding: 6px 10px;
  }
  .wishlist .wish-img {
    height: 24px;
  }
  .card-content .location-button button {
    padding: 6px 15px !important;
  }
  .card-container .icons-wrapper {
    width: 90%;
  }
  .card-container .icons-wrapper .icon .i-img {
    width: 12px;
    height: 12px;
  }
  .card-container .icons-wrapper .icon p {
    font-size: 12px;
    margin-left: 5px;
  }
  .bottom-buttons button {
    font-size: 10px;
    padding: 6px 10px;
    margin: 5px;
  }
  .card-content .location h3 {
    font-size: 14px;
  }
  .card-content .location p {
    font-size: 12px;
    padding: 3px 0;
  }
  .btn-blue {
    margin: 10px 0;
  }
}
</style>
