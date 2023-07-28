<template>
    <div class="form-group center container">
        <h3 class="row">Please select a donation amount</h3>
        <div class="row radio-panel mx-md-n5" v-for="donationOption in donationOptions" :key="donationOption.amount"
            @click="setDonationAmount(donationOption.amount)">
            <label class="btn btn-primary col-sm-2 m-1">${{ donationOption.amount }}</label>
            <label class="col-sm-3 m-1">{{ donationOption.description }}</label>
        </div>
        <div class="row mx-md-n5">
            <span class=" col-sm-1">$</span>
            <input class="col-sm-2" type="number" placeholder=" or enter your amount"
                @change="(event) => setDonationAmount(event.target.value)" />
        </div>
    </div>
</template>

<script>
import { donationOptions } from '../../constants/configuration';
import { donation } from "../../states";
export default {
    name: "DonationDetails",
    data() {
        return {
            donationOptions: []
        };
    },
    mounted() {
        this.donationOptions = donationOptions;
    },
    methods: {
        setDonationAmount(donationAmount) {
            console.log(`The current donation Amount is ${donationAmount}`);
            donation.amount = donationAmount;
        }
    }
}
</script>

<style scoped></style>