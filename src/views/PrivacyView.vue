<template>
  <div class="home">
    <default-layout>
      <PrivacyPolicy />
      <AppFooter />
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import PrivacyPolicy from "@/components/privacy/index.vue";
export default {
  name: "PrivacyView",
  components: {
    DefaultLayout,
    PrivacyPolicy,
  },
};
</script>