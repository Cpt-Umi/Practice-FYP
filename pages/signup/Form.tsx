import React from "react";
import { useAccount } from "wagmi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  role: Yup.string().required("Please select a role"),
});

const MyForm = () => {
  const { address } = useAccount();

  const initialValues = {
    name: "",
    address: address,
    role: "",
  };

  const onSubmit = async (values: any) => {
    try {
      const response = await fetch("../api/signup", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors if needed
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="role">Role:</label>
          <Field as="select" id="role" name="role">
            <option value="" label="Select a role" />
            <option value="manufacturer" label="Manufacturer" />
            <option value="distributor" label="Distributor" />
            <option value="pharmacy" label="Pharmacy" />
          </Field>
          <ErrorMessage name="role" component="div" />
        </div>

        <button type="submit">Submit</button>
        <p>{address}</p>
      </Form>
    </Formik>
  );
};

export default MyForm;
