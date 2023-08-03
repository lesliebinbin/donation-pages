<template>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
                <div class="card card-registration my-4">
                    <div class="row g-0">
                        <div class="col-xl-6 d-none d-xl-block">
                            <img :src="imageUrl" alt="Sample photo" class="img-fluid" />
                        </div>
                        <div class="col-xl-6">
                            <div class="card-body p-md-5 text-black">
                                <h3 class="mb-5 text-uppercase">Contact Details</h3>
                                <div class="row">
                                    <b-tabs pills align="center" class="mb-4">
                                        <b-tab title="Personal Donation">
                                        </b-tab>
                                        <b-tab title="Organisation Donation">
                                        </b-tab>
                                    </b-tabs>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example1m">First name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Example1n">Last name</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="email" id="email" class="form-control form-control-lg" />
                                    <label class="form-label" for="email">Email</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="text" id="postal_address" class="form-control form-control-lg" />
                                    <label class="form-label" for="postal_address">Postal Address (enter
                                        manually)</label>
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
import { contact } from "../../states";
import sekiro from "../../assets/sekiro.jpeg";
export default {
    name: "DonationDetails",
    data() {
        return { contact, imageUrl: sekiro };
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