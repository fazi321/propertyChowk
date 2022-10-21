<template>
  <section style="position: relative">
    <!-- <section :class="['model']" @mouseover="mouseOver" @mouseleave="mouseOut">
      <div class="primary-model">
        <div class="close" @click="mouseOut">✖</div>
        <div class="agent-hover">
          <div class="agent-image">
            <img src="../../assets/images/expert.svg" />
          </div>
          <h1>{{ agentDetail.name }}</h1>
          <h1>{{ agentDetail.eState }}</h1>
        </div>
        <div class="button-more">
          <router-link to="/agent" class="info-btn">More Info</router-link>
        </div>
      </div>
    </section> -->
    <!-- <section class="agent-model" v-if="Object.keys(agentDetail).length">
      <div class="model-main">
        <div class="headmodel" @click="close">
          <img src="../../assets/images/close-icon.svg" />
        </div>
        <div class="agent-container">
          <div class="agent-details">
            <ul class="details-list">
              <li>
                <div>Agent Name</div>
                <div>{{ agentDetail.name }}</div>
              </li>

              <li>
                <div>Agent Phone Number</div>
                <div>{{ agentDetail.contact }}</div>
              </li>

              <li>
                <div>Estate Name</div>
                <div>{{ agentDetail.eState }}</div>
              </li>
              <li>
                <div>City</div>
                <div>{{ agentDetail.city }}</div>
              </li>
              <li>
                <div>Area</div>
                <div>{{ agentDetail.area }}</div>
              </li>
              <li>
                <div>Property Type</div>
                <div>{{ agentDetail.type }}</div>
              </li>
              <li>
                <div>Full Address</div>
                <div>{{ agentDetail.address }}</div>
              </li>
            </ul>
            <div class="agent-image">
              <img src="../../assets/images/avatar.svg" />
            </div>
          </div>
        </div>

      </div>
    </section>-->
    <div class="main-title expert-title">
      <h1>50 Top Property Expert in City</h1>
    </div>
    <carousel
      id="mySlider"
      :settings="settings"
      :autoplay="2000"
      :wrap-around="true"
      :breakpoints="breakpoints"
      class="carousel-container custom-div explert-carousel"
    >
      <!--  -->
      <slide
        v-for="(agent, index) in titanium"
        :key="index"
        class="agent-info"
        :data-type="index + 1"
      >
        <div :id="`slide-${index}`" class="experts-main">
          <div class="carousel__item">
            <router-link
              :to="`${agent.slug ? agent.slug : 'agent'}`"
            >
              <div class="image-agent">
                <!-- <img :src="require(`../../assets/${agent.img}`)" v-if="agent.img" /> -->
                <img
                  v-lazy="require(`../../assets/${agent.img}`)"
                  v-if="agent.img"
                />
                <img src="../../assets/images/expert.svg" v-else />
              </div>
              <div class="agent-content">
                <h1>{{ agent.name }}</h1>
                <h1>{{ agent.eState }}</h1>
              </div>
            </router-link>
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <!-- <pagination /> -->
      </template>
    </carousel>
    <!-- <section class="section-pagination">
      <paginate
        v-if="titanium"
        ref="paginate"
        :page-count="titanium.length"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      ></paginate>
    </section> -->
    <section>
      <div class="button-more">
        <router-link to="/realtors" class="info-btn">Veiw All</router-link>
      </div>
    </section>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
// import Paginate from "vuejs-paginate-next";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  name: "PropertyExpert",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    isSliderChange: 1,
    agentDetail: {},
    titanium: [
      {
        name: "Babar Kalyar",
        eState: "BK Property Marketing",
        img: "Profile.png",
        slug:'babarkalyar',
      },
      {
        name: "Muhammad Asif",
        eState: "Ravian Holding Real Estate",
        img: "MuhammadAsif.png",
        slug:'muhammadasif',
      },
      {
        name: "Malik Asif Jahangir",
        eState: "ESTATE MASTER",
        img: "malikAsif.jpeg",
        slug:'malikasifjahangir',
      },
      {
        name: "Mian Talat Ahmad",
        eState: "Talat Estate",
        img: "MianTalatAhmad.jpeg",
        slug:'miantalatahmad',
      },
      {
        name: "Haider Ayub Baig",
        eState: "L.M Real Estate",
        img: "HaiderAyubBaig.png",
        slug:'haiderayubbaig',
      },
      {
        name: "Wasim Siyal",
        eState: "Pioneer Estate",
        img: "wasimsiyal.png",
        slug:'wasimsiyal',
      },
      {
        name: "Mohsin Malik",
        eState: "Al-Nasr Real Estate & Marketing",
        img: "MohsinMalik.png",
        slug:'mohsinmalik',
      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
      loop: true,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
        loop: true,
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "center",
        loop: true,
      },
    },
    clearNow: null,
  }),
  // mounted() {
  //   this.initPagination();
  // },
  // beforeUnmount() {
  //   clearInterval(this.clearNow);
  // },
  // methods: {
  //   initPagination() {
  //     var changePaginate = (index) => {
  //       this.isSliderChange = index;
  //     };
  //     this.clearNow = setInterval(() => {
  //       const slider = document.querySelector("#mySlider");
  //       var getActiveIndex = slider.getElementsByClassName(
  //         "carousel__slide--active"
  //       )[0];
  //       if (getActiveIndex) {
  //         var val = getActiveIndex.dataset.type;
  //         changePaginate(val);
  //       }
  //     }, 400);
  //   },
  //   paginationChanged(val) {
  //     this.$refs.paginate.handlePageSelected(parseInt(val));
  //   },
  //   clickCallback(num) {
  //     var dec = num - 1;
  //     this.$refs.slider.slideTo(dec);
  //   },
  //   // mouseOver(index) {
  //   //   if (index >= 0) {
  //   //     this.agentDetail = this.titanium[index].detail;
  //   //   }
  //   //   document.getElementById(`slide`).classList.add("activeS");
  //   // },
  //   // mouseOut() {
  //   //   document.getElementById(`slide`).classList.remove("activeS");
  //   // },
  //   // showModel(index) {
  //   //   this.agentDetail = this.titanium[index].detail;
  //   // },
  //   // close() {
  //   //   this.agentDetail = {};
  //   // }
  // },
  // watch: {
  //   isSliderChange: {
  //     handler: function (nv) {
  //       this.paginationChanged(nv);
  //     },
  //   },
  // },
};
</script>

<style scoped>
.image-agent{
  min-height:194px;
}
.pagination {
  display: flex;
  justify-content: center;
}
.agent-content {
  margin-top: 5px;
}
.agent-content h1 {
  color: #000;
  font-size: 14px;
  line-height: 1.3;
  text-transform: capitalize;
}
.model .close {
  position: absolute;
  right: 14px;
  top: 13px;
  cursor: pointer;
  color: gray;
}
.model {
  visibility: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  opacity: 0;
}
.activeS .model {
  visibility: visible;
  opacity: 1;
  transition-delay: 0.3s;
}
.model .primary-model {
  position: relative;
  background: skyblue;
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.section-pagination {
  display: flex;
  justify-content: center;
}
.expert-title {
  padding-bottom: 0 !important;
}
.experts-tilte {
  margin: 40px 0;
  visibility: hidden;
  /* display:none; */
  cursor: pointer;
  width: 300px;
  position: absolute;
  left: -20px;
}

.experts-tilte h1 {
  font-size: 28px;
  text-align: center;
  color: #231f20;
  font-weight: 500;
  letter-spacing: 1.8px;
}

.explert-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.explert-content .expert-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-top: 20px;
}

.explert-content .expert-inner img {
  width: 100px;
}

.explert-content .explert-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 20px;
}

.explert-content .explert-contact p {
  font-size: 14px;
  color: #666666;
}

.carousel__slide .carousel__item img {
  width: 100%;
  cursor: pointer;
  border-radius: 50%;
}
.carousel__item a {
  text-decoration: none;
}
.carousel__slide--active .carousel__item img {
  border: 2px solid #0cb2da !important;
  border-radius: 50%;
  padding: 0;
  width: 100%;
}

.experts-main {
  transition: height 2s;
  /* height: 200px; */
  position: relative;
  cursor: pointer;
  padding-top: 30px;
}
.agent-info {
  position: relative;
  cursor: pointer;
}
.button-more {
  display: flex;
  justify-content: center;
}
.agent-hover .agent-image {
  display: flex;
  justify-content: center;
}
.agent-hover {
  background: #fff;
  width: 250px;
  padding: 10px;
  border: 2px solid #eee;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
/* .agent-info:hover .agent-hover {
  display: flex;
  height: 290px;
  visibility: visible;
} */
.agent-hover h1 {
  font-size: 20px;
  color: #000;
  padding: 0px 10px 5px 10px;
  text-align: center;
  text-transform: uppercase;
}
.info-btn {
  font-size: 16px;
  color: #000;
  font-weight: normal;
  background-color: #0cb2da;
  padding: 8px 30px;
  text-decoration: none;
  text-align: center;
}
/* .agent-image {
  width: 200px;
  height: 200px;
} */

.agent-image img {
  width: 220px;
  height: 220px;
}
.carousel__slide--active .experts-main.active {
  height: 400px;
  transition-delay: 2s;
}

.carousel__slide {
  align-items: unset;
  /* pointer-events: none; */
}

.carousel__slide--active {
  pointer-events: unset;
}

/* @keyframes example {
  from {
    height: 0px;
  }
  to {
    height: 400px;
  }
} */
.carousel__slide--active .experts-main.active .experts-tilte {
  visibility: visible;
  /* display: block; */
}

.custom-div .carousel__prev,
.custom-div .carousel__next {
  top: 25% !important;
}

/* ageent details popup  */
.agent-model {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0000009e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.agent-model .model-main {
  width: 450px;
  background: #fff;
  padding: 15px;
}

.headmodel {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 5px 5px 5px;
}

.headmodel img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.agent-container {
  padding: 10px 0 10px 20px;
}

.model-main .agent-details {
  display: flex;
  justify-content: space-between;
}

.model-main .agent-details .details-list {
  list-style: none;
  padding: 0 0 20px 0;
  width: 50%;
}

.model-main .agent-details .details-list li {
  color: #606060;
  font-size: 14px;
  text-align: left;
  padding: 6px 0;
  line-height: 1.5;
  display: flex;
  white-space: nowrap;
}

.model-main .agent-details .details-list li div:nth-child(1) {
  min-width: 150px;
  font-weight: 400;
}

.model-main .agent-details .details-list li div:nth-child(2) {
  color: #000 !important;
}

/* ageent details popup  */
@media (max-width: 479px) and (min-width: 320px) {
  .model .primary-model {
    width: 100%;
  }
  .agent-details {
    flex-wrap: wrap-reverse;
  }
  .agent-model .model-main {
    width: 90%;
  }
  .model-main .agent-details .details-list li div:nth-child(2) {
    white-space: pre-wrap;
  }
  .agent-image {
    margin: 10px 0;
  }
  .model-main .agent-details .details-list {
    width: 100%;
  }
}

@media (max-width: 479px) and (min-width: 320px) {
  .carousel__slide .carousel__item img {
    width: 100%;
  }

  .carousel__slide--active .carousel__item img {
    width: 100% !important;
  }

  /* .explert-content .expert-inner{
    width: 100%;
  } */
  .experts-main {
    height: unset;
  }
  .experts-tilte {
    left: -65%;
  }
}
</style>
