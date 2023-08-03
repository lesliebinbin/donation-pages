<template>
    <div class="container py-5 h-20">
        <div class="row d-flex justify-content-center align-items-center h-20">
            <div class="col">
                <div class="card card-registration my-4">
                    <div class="row g-0">
                        <div class="col-xl-6 d-none d-xl-block">
                            <img :src="imageUrl" alt="Sample photo" class="img-fluid" />
                        </div>

                        <div class="col-xl-6">
                            <div class="card-body p-md-5 text-black">
                                <h3 class="text-right">Please select a donation amount</h3>
                                <div class="row mb-4">
                                    <b-card no-body>
                                        <b-tabs pills card vertical nav-wrapper-class="w-50">
                                            <b-tab v-for="donationOption in donationOptions" :key="donationOption.amount"
                                                @click="setDonationAmount(donationOption.amount)"
                                                :title="`$${donationOption.amount}`">
                                                <b-card-text>
                                                    {{ donationOption.description }}
                                                </b-card-text>
                                            </b-tab>
                                        </b-tabs>
                                    </b-card>
                                </div>
                                <div class="row mx-md-n5">
                                    <span class=" col-sm-1">$</span>
                                    <input class="col-sm-2" type="number" placeholder=" or enter your amount"
                                        @change="(event) => setDonationAmount(event.target.value)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { donationOptions } from '../../constants/configuration';
import { donation } from "../../states";
import sekiro from "../../assets/sekiro.jpeg";
export default {
    name: "DonationDetails",
    data() {
        return {
            donationOptions: [],
            imageUrl: sekiro,
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

<style scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
}

.card-registration .select-arrow {
    top: 13px;
}
</style>