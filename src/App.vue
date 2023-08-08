<template>
  <LeadingPage v-if="!showMainPage" @show-main-page="showMainPage = true" />
  <Payments2UsPage v-show="showMainPage" />
</template>

<script>
import LeadingPage from './components/pages/LeadingPage'
import Payments2UsPage from './components/pages/Payments2UsPage'

export default {
  name: 'App',
  data() {
    return {
      showMainPage: false,
    };
  },
  components: {
    LeadingPage,
    Payments2UsPage,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
