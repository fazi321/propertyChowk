<template>
  <div class="home">
    <default-layout>
      <TermsConditions />
      <AppFooter />
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import TermsConditions from "@/components/terms&condition/index.vue";
export default {
  name: "TermsView",
  components: {
    DefaultLayout,
    TermsConditions,
  },
};
</script>