<template>
  <component :is="pages[pageIndex]" />
  <div class="btn-group" role="group" aria-label="Basic example">
    <button class="btn btn-primary" @click="nextPage">
      {{ pageIndex === pages.length - 1 ? "DonateNow" : "Next Step" }}
    </button>
    <button class="btn btn-secondary" @click="previousPage">Back</button>
  </div>
</template>

<script>
import DonationDetails from './components/sections/DonationDetails'
import ContactDetails from './components/sections/ContactDetails'
import PaymentDetails from './components/sections/PaymentDetails'

export default {
  name: 'App',
  data() {
    return {
      pageIndex: 0,
      pages: [DonationDetails, ContactDetails, PaymentDetails]
    };
  },
  methods: {
    nextPage() {
      if (this.pageIndex === this.pages.length - 1) return;
      this.pageIndex = (this.pageIndex + 1) % this.pages.length;
    },
    previousPage() {
      if (this.pageIndex === 0) return;
      this.pageIndex = (this.pageIndex - 1) % this.pages.length;
    }
  }
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
