<template>
  <div class="home">
    <default-layout>
      <PropertyDetailPage />
      <!-- <AppFooter /> -->
    </default-layout>
  </div>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import PropertyDetailPage from "@/components/propertyDetail/index";
export default {
  name: "PropertyDetailsView",
  components: {
    DefaultLayout,
    PropertyDetailPage,
  },
};
</script>