<template>
  <LeadingPage />
</template>

<script>
import LeadingPage from './components/pages/LeadingPage'

export default {
  name: 'App',
  components: {
    LeadingPage,
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
