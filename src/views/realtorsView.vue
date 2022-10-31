<template>
  <div>
    <layout-home title="REALTORS">
      <div class="container">
        <div class="agent-card-container">
          <AgentCard
            v-for="(item, index) in titanium"
            :key="index"
            :items="item"
          />
          <!-- <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard /> -->
        </div>
        <!-- <section class="section-pagination">
          <paginate
            :page-range="3"
            :margin-pages="2"
            :page-count="3"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          ></paginate>
        </section> -->
      </div>
      <GetApp />
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import AgentCard from "@/components/agentCard.vue";
import GetApp from "@/components/home/getApp.vue";
// import Paginate from "vuejs-paginate-next";
export default {
  name: "RealtorsView",
  data() {
    return {
      titanium: [
        {
          name: "Babar Kalyar",
          eState: "BK Property Marketing",
          img: "Profile.png",
          slug: "babarkalyar",
        },
        {
          name: "Muhammad Asif",
          eState: "Ravian Holding Real Estate",
          img: "MuhammadAsif.png",
          slug: "muhammadasif",
        },
        {
          name: "Malik Asif Jahangir",
          eState: "ESTATE MASTER",
          img: "malikAsif.jpeg",
          slug: "malikasifjahangir",
        },
        {
          name: "Mian Talat Ahmad",
          eState: "Talat Estate",
          img: "MianTalatAhmad.jpeg",
          slug: "miantalatahmad",
        },
        {
          name: "Haider Ayub Baig",
          eState: "L.M Real Estate",
          img: "HaiderAyubBaig.png",
          slug: "haiderayubbaig",
        },
        {
          name: "Wasim Siyal",
          eState: "Pioneer Estate",
          img: "wasimsiyal.png",
          slug: "wasimsiyal",
        },
        {
          name: "Mohsin Malik",
          eState: "Al-Nasr Real Estate & Marketing",
          img: "MohsinMalik.png",
          slug: "mohsinmalik",
        },
        {
          name: "M. Amir Malik",
          eState: "New Realtors Estate",
          img: "M. AmirMalik.png",
          slug: "mAmirMalik",
        },
      ],
    };
  },
  components: {
    LayoutHome,
    AgentCard,
    GetApp,
  },
  methods: {
    // clickCallback(num) {
    //   this.$refs.slider.slideTo(num);
    // },
  },
};
</script>
<style scoped>
.agent-card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
}
.section-pagination {
  display: flex;
  justify-content: center;
}
@media (max-width: 479px) and (min-width: 320px) {
}
</style>
