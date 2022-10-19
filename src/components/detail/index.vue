<template>
  <section class="container">
    <AgentIntro />
    <ProjectFeatures />
    <PlaneMap />
    <Contact />
    <GalleryImage />
    <MeetAgent />
    <NewProperty />
    <GetInTouch />
  </section>
</template>

<script>
import AgentIntro from "@/components/detail/agentIntro.vue";
import ProjectFeatures from "@/components/detail/projectFeatures.vue";
import PlaneMap from "@/components/detail/plan.vue";
import Contact from "@/components/detail/contact.vue";
import GalleryImage from "@/components/detail/gallery.vue";
import NewProperty from "@/components/home/newProperty.vue";
import MeetAgent from "@/components/agent/meetAgent.vue";
import GetInTouch from "@/components/agent/getInTouch.vue";
export default {
  name: "DetailPage",
  components: {
    AgentIntro,
    ProjectFeatures,
    PlaneMap,
    Contact,
    GalleryImage,
    NewProperty,
    MeetAgent,
    GetInTouch
  }
};
</script>

<style scoped>
@media (max-width: 479px) and (min-width: 320px) {
}
</style>