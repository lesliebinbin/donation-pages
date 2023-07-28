import { reactive } from "vue";
export const donation = reactive({
  amount: 0,
});

export const contact = reactive({
  firstName: null,
  lastName: null,
  email: null,
  postalAddress: null,
});
