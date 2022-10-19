<template>
  <div class="container">
    <div class="review-wrapper">
      <div class="review-head">
        <h2>Ratings and Reviews</h2>
      </div>
      <!-- <section class="rating-container">
                <div>
                    <div class="review-count">
                        <h3>4.1 </h3>
                    </div>
                    <div class="rate">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <p>750</p>
                    </div>
                </div>

            </section> -->
      <carousel
        :settings="settings"
        :autoplay="4000"
        :wrap-around="true"
        :breakpoints="breakpoints"
        class="carousel-container"
        v-if="myAllReviews && myAllReviews.length"
      >
        <slide v-for="slide in myAllReviews" :key="slide">
          <div class="user-reviews">
            <div class="user-head">
              <div class="user-image">
                <img src="../../assets/images/profile.svg" alt="profile" />
              </div>
              <h6>{{ slide.name }}</h6>
            </div>
            <div>
              <div class="rate" v-if="slide.rating">
                <span
                  :class="['fa fa-star', { checked: slide.rating >= 1 }]"
                ></span>
                <span
                  :class="['fa fa-star', { checked: slide.rating >= 2 }]"
                ></span>
                <span
                  :class="['fa fa-star', { checked: slide.rating >= 3 }]"
                ></span>
                <span
                  :class="['fa fa-star', { checked: slide.rating >= 4 }]"
                ></span>
                <span
                  :class="['fa fa-star', { checked: slide.rating >= 5 }]"
                ></span>
                <!-- <p>09/26/2022</p> -->
              </div>
              <p>
                {{ slide.reviewsText }}
              </p>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation />
          <!-- <pagination /> -->
        </template>
      </carousel>
    </div>
    <!-- write a review section  -->
    <section class="rate-wrapper">
      <div class="rate-app">
        <h2>Rate this Agent</h2>
        <div class="rattings">
          <div class="rate">
            <span
              :class="['fa fa-star', { active: rating >= 1 }]"
              @click="rattings(1)"
            ></span>
            <span
              :class="['fa fa-star', { active: rating >= 2 }]"
              @click="rattings(2)"
            ></span>
            <span
              :class="['fa fa-star', { active: rating >= 3 }]"
              @click="rattings(3)"
            ></span>
            <span
              :class="['fa fa-star', { active: rating >= 4 }]"
              @click="rattings(4)"
            ></span>
            <span
              :class="['fa fa-star', { active: rating >= 5 }]"
              @click="rattings(5)"
            ></span>
          </div>
          <div class="current-rating">({{ rating }})</div>
        </div>

        <div class="massege" v-if="toggleBtn">
          <form @submit="submitReviews">
            <textarea
              v-model="reviewsText"
              rows="8"
              required
              cols="50"
              placeholder="Write a review here..."
            ></textarea>
            <input
              type="submit"
              :value="!submitLoading ? 'Submit' : 'Loading...'"
              :disabled="submitLoading"
            />
          </form>
        </div>
        <div class="review-btn">
          <button @click="toggleArea" v-if="!reviewBLoading">
            Write a review
          </button>
          <button v-else>loading...</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import firebase from "../../firebase";
const db = firebase.firestore();
export default {
  name: "ReviewAgent",
  props: ["id"],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      staticReviews: [
        {
          name: "Asfand Kalyar",
          reviewsText: "best platform for property sale and purchase",
          rating: 5,
        },
        {
          name: "Rai Babar Kalyar",
          reviewsText: "Most Experienced Team & Professional Attitude",
          rating: 5,
        },
        {
          name: "Talha Rai",
          reviewsText:
            "Professional quality service. Babar Kalyar is very down to earth and humble - his team has great knowledge about real estate. I'm very happy to have invested with these guys.",
          rating: 5,
        },
        {
          name: " Muhammad Adeel Khan",
          reviewsText:
            " I recommend BK Properties. I really appreciate their prompt response and team work is commendable.They are trustworthy in comparison to other property consultants in the market. I really had a very good experience investing with them as they are very transparent and honest.",
          rating: 5,
        },
        {
          name: "Jahan Tahir",
          reviewsText:
            "had a great experience with BK properties consultants. the staff is highly trained & professional.",
          rating: 5,
        },
      ],
      talatEstate: [
        {
          name: "Sameer Sohail Leslie",
          reviewsText:
            "Thank you Talat estate for excellent services. We love our new home. Thank you so much ",
          rating: 5,
        },
        {
          name: "Javaid Channan",
          reviewsText: "it's a good and trustworthy group to invest with",
          rating: 5,
        },
        {
          name: "Nazir Ahmad ",
          reviewsText: "Name of Trust wonderful people's with great deal",
          rating: 5,
        },
      ],
      reviews: [],
      rating: 5,
      reviewsText: "",
      toggleBtn: false,
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      isAlreadySubmited: false,
      reviewBLoading: false,
      myAllReviews: [],
      submitLoading: false,
    };
  },
  computed: {
    info() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    submitReviews(e) {
      e.preventDefault();
      const { name, id } = this.info;
      this.submitLoading = true;
      var obj = [
        {
          id: id,
          name: name,
          reviewsText: this.reviewsText,
          rating: this.rating,
        },
        ...this.reviews,
      ];
      db.collection("users")
        .doc(this.id)
        .update({ agentReviews: obj })
        .then(() => {
          this.submitLoading = false;
          this.$swal({
            icon: "success",
            title: "Review Added",
            showConfirmButton: false,
            timer: 3000,
          });
          this.toggleBtn = false;
          this.getReviews();
        })
        .catch((err) => {
          if (err) {
            this.submitLoading = false;
          }
        });
    },
    rattings(rate) {
      this.rating = rate;
    },
    toggleArea() {
      if (this.isAlreadySubmited) {
        this.$swal({
          icon: "success",
          title: "Already Given",
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }
      if (this.info && !this.info.id) {
        this.$swal({
          icon: "error",
          title: "Please Login",
          showConfirmButton: false,
          timer: 3000,
        });
        return;
      }
      this.toggleBtn = !this.toggleBtn;
    },
    getReviews(btn) {
      if (btn == "load") {
        this.reviewBLoading = true;
      }
      const { id } = this.info;
      if(this.$route.path != '/miantalatahmad'){
        db.collection("users")
        .doc(this.id)
        .get()
        .then((querySnapshot) => {
          var { agentReviews } = querySnapshot.data();
          if (agentReviews) {
            this.reviews = agentReviews;
          }
          if (this.$route.path == "/babarkalyar") {
            this.myAllReviews = [...agentReviews, ...this.staticReviews];
          } else if (this.$route.path == "/miantalatahmad") {
            var re = !agentReviews ? [] : agentReviews;
            this.myAllReviews = [...re, ...this.talatEstate];
          } else {
            this.myAllReviews = agentReviews;
          }
          this.reviewBLoading = false;
          this.isAlreadySubmited =
            agentReviews && agentReviews.some((user) => user.id == id);
        });
      }else{
        this.myAllReviews = this.talatEstate;
        this.reviewBLoading = false;
      }
    },
  },
  mounted() {
    this.getReviews("load");
  },
  watch: {
    info: {
      handler: function () {
        this.getReviews("load");
      },
      // immediate: true,
    },
  },
};
</script>

<style scoped>
.rattings {
  position: relative;
}
.rattings .current-rating {
  position: absolute;
  right: -6px;
  bottom: 16px;
  color: gray;
  font-size: 11px;
}
.active {
  color: orange;
}
.review-wrapper {
  padding: 30px 0;
}

.rate-wrapper {
  padding: 30px 0;
}
.massege {
  width: 100%;
}

.massege form {
  display: flex;
  flex-direction: column;
}

.massege form textarea {
  padding: 15px;
}

.massege form input {
  margin: 15px 0;
  padding: 10px;
  background-color: #0cb2da;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.rate-app {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rate-app h3 {
  font-size: 34px;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
  color: #000;
}

.rate-app .rate {
  padding: 20px 0;
}

.rate-app .review-btn button {
  border: 1px solid #999;
  color: gray;
  padding: 10px 25px;
  border-radius: 5px;
  outline: none;
  background: transparent;
}

.rate-app .rate span {
  margin: 0 10px;
  font-size: 24px;
  cursor: pointer;
}

.review-wrapper .review-head h2 {
  font-size: 24px;
  padding: 15px 0;
  text-align: center;
  color: #000;
}

.rating-container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.review-count h3 {
  font-size: 34px;
  padding: 15px 0;
  text-align: center;
  text-transform: uppercase;
  color: #000;
}

.rate {
  display: flex;
  align-items: center;
}

.rate span {
  margin: 0 5px;
  font-size: 18px;
}

.heading {
  font-size: 25px;
  margin-right: 25px;
}

.fa {
  font-size: 25px;
}

.checked {
  color: orange;
}
.carousel-container {
  margin-top: 15px;
}
.user-reviews {
  padding: 30px 10px;
  border: 1px solid #eee;
  width: 100%;
  height: 220px;
}

.user-reviews .rate {
  padding: 15px 0;
}

.user-reviews .rate span {
  font-size: 14px !important;
  margin: 0 5px 0 0 !important;
}

.user-reviews p {
  font-size: 14px;
  text-align: left;
  color: gray;
  line-height: 1.5;
  letter-spacing: 0.5px;
  height: 92px;
  overflow-y: scroll;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.user-reviews p::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.user-reviews p {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.user-reviews .rate p {
  margin-left: 10px;
  font-size: 14px;
}

.user-head {
  display: flex;
  align-items: center;
}

.user-head h6 {
  font-size: 16px;
  color: #000;
}

.user-head .user-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
  border: 1px solid #eee;
}

.user-head .user-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
