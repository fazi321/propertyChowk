<template>
  <div>
    <layout-home>
      <ContactGetTouch />
      <div class="container">
        <ContactForm />
      </div>
      <GetApp />
    </layout-home>
  </div>
</template>
<script>
import LayoutHome from "@/components/layouts/LayoutHome.vue";
import ContactForm from "@/components/contact/contactForm.vue";
import ContactGetTouch from "@/components/contact/contactGetTouch.vue";
import GetApp from "@/components/home/getApp.vue";
export default {
  name: "RealtorsView",
  components: {
    LayoutHome,
    ContactForm,
    ContactGetTouch,
    GetApp
  },
  methods: {
    clickCallback(num) {
      this.$refs.slider.slideTo(num);
    }
  }
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
</style>