<template>
    <LeadingPageHeader />
    <component :is="sections[sectionIndex]" />
    <div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-primary" @click="nextSection" v-if="showNextSection">
            Next Step
        </button>
        <button class="btn btn-primary" @click="submitSections" v-else>
            Submit
        </button>
        <button class="btn btn-secondary" @click="previousSection">Back</button>
    </div>
</template>
<script>
import DonationDetails from '../sections/donation/DonationDetails'
import ContactDetails from '../sections/contact/ContactDetails'
import LeadingPageHeader from '../headers/LeadingPageHeader';
import Payments2UsPage from './Payments2UsPage';
export default {
    name: 'LeadingPage',
    components: {
        LeadingPageHeader,
        Payments2UsPage
    },
    data() {
        return {
            sectionIndex: 0,
            sections: [DonationDetails, ContactDetails]
        };
    },
    computed: {
        showNextSection() {
            return this.sectionIndex < this.sections.length - 1;
        },
    },
    methods: {
        nextSection() {
            if (this.sectionIndex === this.sections.length - 1) return;
            this.sectionIndex = (this.sectionIndex + 1) % this.sections.length;
        },
        submitSections() {
            this.$emit('show-main-page');
        },
        previousSection() {
            if (this.sectionIndex === 0) return;
            this.sectionIndex = (this.sectionIndex - 1) % this.sections.length;
        }
    }
}
</script>