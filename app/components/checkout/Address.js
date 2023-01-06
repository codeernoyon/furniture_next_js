import React from "react";
import { FormInput } from "../shared/Form";

const Address = () => {
  return (
    <div className="w-2/4 pr-10">
      <FormInput name="first_name" placeholder="Enter your first name" />
      <FormInput name="last_name" placeholder="Enter your last name" />
      <FormInput name="email" placeholder="Enter your email" />
      <FormInput name="mobile" placeholder="Enter your mobile" />
      <FormInput name="country" placeholder="Country name" />
      <FormInput name="street_name" placeholder="Street Address" />
      <FormInput name="zip" placeholder="zip/postal code" />
      <FormInput name="city" placeholder="City name" />
    </div>
  );
};

export default Address;
