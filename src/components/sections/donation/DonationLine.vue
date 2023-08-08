<template>
    <div class="col-xs-12 radio-panel" :class="{ selected: donationOption.selected }">
        <div class="radio no-image" @click="donationAmountChosen">
            <div class="radio-border">
                <div class="radio-amount btn btn-success donation-amount" style="height: 136px;">
                    <span>${{ donationOption.amount }}</span>
                </div>
                <div class="radio-text donation-description">
                    <span class="radio-copy">
                        {{ donationOption.description }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DonationLine',
    methods: {
        donationAmountChosen() {
            this.$emit('donation-amount-chosen', this.donationOption.amount);
        }
    },
    props: ['donationOption']
}
</script>
<style scoped>
.donation-amount {
    display: table-cell;
    width: 25%;
    vertical-align: middle;
    font-size: 1.5em;
    padding: 10px 0;
}

.donation-description {
    display: table-cell;
    width: 100%;
    padding: 10px 10px;
    outline: none;
    vertical-align: middle;
}

.radio-panel {
    opacity: 0.5;
}

.radio-panel.selected {
    opacity: 1.0;
}
</style>