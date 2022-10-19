<template>
  <div>
    <section class="container-main">
      <div class="desktop-header">
        <AppHeader :transparent="false" />
      </div>
      <div class="mobile-header">
        <MobileAppHeader :transparent="false" />
      </div>
    </section>
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from "../footer/AppFooter.vue";
import AppHeader from "../header/AppHeader.vue";
import MobileAppHeader from "../header/mobileHeader.vue";
export default {
  components: {
    AppFooter,
    AppHeader,
    MobileAppHeader
  }
};
</script>

<style scoped>
.desktop-header {
  display: block;
}
.mobile-header {
  display: none;
}
@media (max-width: 479px) and (min-width: 320px) {
  .desktop-header {
    display: none;
  }
  .mobile-header {
    display: block;
  }
}
</style>