<template>
    <div class="container py-5 h-20">
        <div class="row d-flex justify-content-center align-items-center h-20">
            <div class="col">
                <div class="my-4">
                    <div class="row g-0">

                        <div class="col-xl-6">
                            <div class="p-md-5 text-black">
                                <h3 class="text-right">Please select a donation amount</h3>

                                <DonationLine class="row mb-4" v-for="donationOption in donationOptions"
                                    :key="donationOption.amount" @donation-amount-chosen="chooseAmount"
                                    :donation-option="donationOption" />

                                <div class="row mx-md-n5">
                                    <span class=" col-sm-1">$</span>
                                    <input class="col-sm-10" type="number" placeholder=" or enter your amount"
                                        @change="(event) => inputAmount(event.target.value)" />
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 d-none d-xl-block">
                            <img :src="imageUrl" alt="Sample photo" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { donationOptions } from '../../../constants/configuration';
import { donation } from "../../../states";
import donate from "../../../assets/donate.jpg";
import DonationLine from './DonationLine.vue';
export default {
    name: "DonationDetails",
    components: {
        DonationLine,
    },
    data() {
        return {
            donationOptions: [],
            imageUrl: donate,
        };
    },
    mounted() {
        this.donationOptions = donationOptions;
    },
    methods: {
        chooseAmount(donationAmount) {
            donation.amount = donationAmount;
            this.donationOptions.forEach(option => {
                if (option.amount === donationAmount) {
                    option.selected = true;
                } else {
                    option.selected = false;
                }
            });
        },
        inputAmount(donationAmount) {
            this.donationOptions.forEach(option => option.selected = false);
            donation.amount = donationAmount;
        }
    }
}
</script>

<style scoped>
DonationLine {
    opacity: 0.5;
}
</style>