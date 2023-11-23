<script>
import AppHeader from "./components/AppHeader.vue";
import AppContent from "./components/AppContent.vue";
import AppFooterTop from "./components/AppFooterTop.vue";
import AppFooterBottom from "./components/AppFooterBottom.vue";
export default {
  components: {
    AppHeader,
    AppContent,
    AppFooterTop,
    AppFooterBottom,
  },
};
</script>

<template>
  <AppHeader />
  <AppContent />
  <AppFooterTop />
  <AppFooterBottom />
</template>

<style lang="scss">
@use "../src/style/general.scss";
</style>
