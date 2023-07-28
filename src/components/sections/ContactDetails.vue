<template>
    <h3>Please Enter Your Contact Details Below</h3>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">Personal Donation</button>
        <button type="button" class="btn btn-secondary">Company Donation</button>
    </div>
    <form class="needs-validation" novalidate>
        <div class="row align-items-center">
            <div class="col-sm-2 mb-1">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First name" v-model="contact.firstName"
                    required>
            </div>
            <div class="col-sm-2 mb-1">
                <label for="lastname">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Last name" v-model="contact.lastName"
                    required>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="jane.doe@example.com" required
                    v-model="contact.email">
            </div>
        </div>
        <div class="row">
            <label class="col-sm-12 pt10 pb10" for="postalAddress">Postal Address <a href="javascript:;"
                    class="expand-address pull-right" tabindex="0"><small>(enter manually)</small></a></label>
            <input type="text" class="form-control" id="postalAddress" v-model="contact.postalAddress"
                placeholder="Please enter your street address" />
        </div>
    </form>
</template>
<script>
import { contact } from "../../states";
export default {
    name: "DonationDetails",
    data() {
        return { contact };
    }
}
</script>
<style scoped></style>