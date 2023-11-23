<script>
import AppHeader from "./components/AppHeader.vue";
import AppContent from "./components/AppContent.vue";
import AppFooterTop from "./components/AppFooterTop.vue";
export default {
  components: {
    AppHeader,
    AppContent,
    AppFooterTop,
  },
};
</script>

<template>
  <AppHeader />
  <AppContent />
  <AppFooterTop />
</template>

<style lang="scss">
@use "../src/style/general.scss";
</style>
