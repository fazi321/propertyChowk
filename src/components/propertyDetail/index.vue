<template>
  <section class="container">
    <!-- top header  -->
    <div
      class="top-head"
      v-if="myProperty && Object.keys(myProperty).length !== 0"
    >
      <!-- New Upper Portion For Sale DHA2 Islamabad -->
      <h3>
        {{ myProperty.property_title }} {{ myProperty.society }}
        {{ myProperty.city }}
      </h3>
      <button class="btn btn-hot" v-if="!myProperty.feature_type && myProperty.featured">SUPER HOT</button>
      <button class="btn btn-hot" v-if="myProperty.feature_type == 1" >HOT</button>
    </div>
    <div class="top-head" v-else>
      <h1 class="heading-skeleton"></h1>
      <div class="btn-skeleton"></div>
    </div>
    <!-- top header  -->
    <div class="detail-container">
      <!-- left content  -->
      <div class="details-left">
        <BigCard
          :data="myProperty"
          v-if="myProperty && Object.keys(myProperty).length !== 0"
        />
        <div v-else>
          <!-- <h1 class="heading-skeleton"></h1> -->
          <div class="image-skeleton"></div>
        </div>
        <div class="overview">
          <h2>OVERVIEW</h2>
          <content-layout :title="'DESCRIPTION'" v-if="myProperty && myProperty.description">
            <DESCRIPTION :data="myProperty" />
          </content-layout>
          <content-layout :title="'DETAILS'">
            <PropertyDetails :data="myProperty" />
          </content-layout>
          <content-layout :title="'FEATURES'" v-if="myProperty && myProperty.property_features">
            <FeaturesView :data="myProperty" />
          </content-layout>
          <content-layout :title="'AGENT DETAILS'" v-if="agentData">
            <AgentDetails :agentData="agentData" :opNumber="myProperty"/>
          </content-layout>
        </div>
      </div>
      <!-- left content  -->
      <!-- right content  -->
      <div class="details-right">
        <SendEmail :data="myProperty" />
        <QuickLinks />
      </div>
      <!-- right content  -->
    </div>
    <!-- similar propert cards  -->
    <!-- <div class="similar-property">
      <h1>Similar Properties</h1>
      <div class="similar-container">
        <SimilarProperty />
        <SimilarProperty />
        <SimilarProperty />
        <SimilarProperty />
        <SimilarProperty />
        <SimilarProperty />
      </div>
    </div>-->
    <!-- similar propert cards  -->
  </section>
</template>

<script>
import firebase from "../../firebase";
const db = firebase.firestore();
import BigCard from "../propertyDetail/bigCard.vue";
import SendEmail from "../propertyDetail/email.vue";
import QuickLinks from "../propertyDetail/quickLinks.vue";
import ContentLayout from "../common/ContentLayout.vue";
import DESCRIPTION from "../propertyDetail/description.vue";
import PropertyDetails from "../propertyDetail/propertyDetails.vue";
import FeaturesView from "../propertyDetail/features.vue";
import AgentDetails from "../propertyDetail/agentDetails.vue";
// import SimilarProperty from "../common/CardProperty.vue";
export default {
  name: "PropertyDetailPage",
  components: {
    BigCard,
    SendEmail,
    QuickLinks,
    ContentLayout,
    DESCRIPTION,
    PropertyDetails,
    FeaturesView,
    AgentDetails,
  },
  data() {
    return {
      myProperty: {},
      agentData: {},
    };
  },
  computed: {
    properties() {
      return this.$store.state.properties;
    },
  },
  methods: {
    getAgentInfo(id) {
      db.collection("users")
        .doc(id)
        .get()
        .then((querySnapshot) => {
          this.agentData = querySnapshot.data();
        });
    },
    filterProperty() {
      var { id } = this.$route.query;
      var filtered = this.$store.state.properties.filter(function (item) {
        return item.id == id;
      });
      // console.log(filtered[0]);
      this.myProperty = filtered[0];
      if (this.myProperty) {
        this.getAgentInfo(this.myProperty.seller_id);
      }
    },
  },
  watch: {
    properties: {
      handler: function () {
        this.filterProperty();
      },
      // immediate: true,
    },
    "$route.query": {
      handler() {
        if (this.properties.length) {
          this.filterProperty();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
.detail-container {
  display: flex;
  padding-bottom: 15px;
}
.top-head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  /* margin-left: 20px; */
}
.top-head h3 {
  font-size: 18px;
  color: #000000;
  text-transform: uppercase;
  width: 66%;
  line-height: 1.5;
}
.top-head .btn-hot {
  background-image: linear-gradient(to right, #e30000, #ff3b00);
}
.detail-container .details-left {
  width: 70%;
}
.heading-skeleton {
  height: 30px;
  background: #eee;
  width: 50%;
}
.btn-skeleton {
  width: 150px;
  height: 30px;
  background: #eee;
  text-align: right;
}
.image-skeleton {
  background: #eee;
  height: 400px;
  width: 100%;
}
.detail-container .details-right {
  width: 30%;
  margin-left: 40px;
}
.overview h2 {
  color: #0cb2da;
  font-size: 20px;
  padding: 15px 0 30px 0;
  text-align: left;
}
.similar-property {
  padding: 40px 0;
  border-top: 1px solid #eee;
}
.similar-property h1 {
  font-size: 24px;
  color: #000000;
  text-align: left;
  padding-bottom: 25px;
}
.similar-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 479px) and (min-width: 320px) {
  .similar-property {
    padding: 20px 10px;
  }
  .similar-property h1 {
    padding-bottom: 20px;
  }
  .detail-container {
    flex-wrap: wrap;
  }
  .detail-container .details-left {
    width: 100%;
  }
  .detail-container .details-right {
    width: 100%;
    margin-left: 0px;
    padding: 0 10px;
  }
  .top-head {
    justify-content: space-around !important;
  }
  .top-head h3 {
    font-size: 14px;
    line-height: 1.3;
  }
  .top-head .btn-hot {
    font-size: 12px !important;
    padding: 6px 10px !important;
  }
  .overview {
    padding: 0 10px;
  }
}
</style>