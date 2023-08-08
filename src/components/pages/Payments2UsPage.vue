<template >
    <iframe :src="url" frameborder="0" width="100%" height="1800px"></iframe>
</template>
<script>
import { payments2UsFormUrl } from "../../constants/configuration";
import { contact, donation } from "../../states";
export default {
    name: 'Payments2UsPage',
    data() {
        return {
            donation, contact
        };
    },
    computed: {
        url() {
            return `${payments2UsFormUrl}?FirstName=${this.contact.firstName}&lastName=${this.contact.lastName}&email=${this.contact.email}&amount=${this.donation.amount}`;
        },
    },
}
</script>