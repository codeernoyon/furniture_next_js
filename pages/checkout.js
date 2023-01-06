import React from "react";
import * as Yup from "yup";
import Address from "../app/components/checkout/Address";
import PurchaseDetails from "../app/components/checkout/PurchaseDetails";
import { AppForm } from "../app/components/shared/Form";

// ----------  validation ----------
const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .max(25)
    .min(3)
    .required()
    .label("Please Enter Your first name"),
  last_name: Yup.string()
    .max(25)
    .min(3)
    .required()
    .label("Please Enter Your last name"),
  email: Yup.string()
    .email("Invalid email address")
    .required()
    .label("Please Enter Your email"),
  mobile: Yup.string()
    .max(14)
    .min(11)
    .required()
    .label("Please Enter Your Mobile number"),
  country: Yup.string()
    .max(25)
    .min(3)
    .required()
    .label("Please Enter Your first name"),
  street_name: Yup.string()
    .max(25)
    .min(3)
    .required()
    .label("Please Enter Your street name"),
  zip: Yup.string()
    .max(25)
    .min(3)
    .required()
    .label("Please Enter Your zip/postal code"),
  city: Yup.string()
    .max(25)
    .min(3)
    .required()
    .label("Please Enter Your first name"),
});
const checkout = () => {
  // ----------  initial value ----------
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    country: "",
    street_name: "",
    zip: "",
    city: "",
  };
  // ----------  handle submit ----------
  const placeOrder = (value) => {
    console.log(value);
  };
  return (
    <div className="pt-[120px] bg px-10">
      <AppForm
        initialValues={{ initialValues }}
        onSubmit={placeOrder}
        validationSchema={validationSchema}
      >
        <div className="flex">
          <Address />
          <PurchaseDetails placeOrder={placeOrder} />
        </div>
      </AppForm>
    </div>
  );
};

export default checkout;
