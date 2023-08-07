<template>
    <component :is="pages[pageIndex]" />
    <div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-primary" @click="nextPage" v-if="showNextPage">
            Next Step
        </button>
        <button class="btn btn-primary" @click="submitPages" v-else>
            Submit
        </button>
        <button class="btn btn-secondary" @click="previousPage">Back</button>
    </div>
</template>
<script>
import DonationDetails from '../sections/DonationDetails'
import ContactDetails from '../sections/ContactDetails'
export default {
    name: 'LeadingPage',
    data() {
        return {
            pageIndex: 0,
            pages: [DonationDetails, ContactDetails]
        };
    },
    computed: {
        showNextPage() {
            return this.pageIndex < this.pages.length - 1;
        },
    },
    methods: {
        nextPage() {
            if (this.pageIndex === this.pages.length - 1) return;
            this.pageIndex = (this.pageIndex + 1) % this.pages.length;
        },
        submitPages() {

        },
        previousPage() {
            if (this.pageIndex === 0) return;
            this.pageIndex = (this.pageIndex - 1) % this.pages.length;
        }
    }
}
</script>
<style ></style>