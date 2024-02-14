import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "./Header";
const Forms = () => {
  const images = {
    logo2: "/assets/logo2.png",
    person: "/assets/person.jpg",
  };
  return (
    <>
   <Header>
      <div className="w-[80%] h-[64vh] mx-auto mt-[5%] flex flex-row justify-between ">
        <div>
          <div className="text-4xl text-sky-500 font-semibold">
            Unlock Exclusive Benefits
          </div>

          <div className="w-full h-full">
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full h-full py-[6vh] pr-[2vw]">
                  <div className="font-semibold mb-[2vh]">PHONE NUMBER</div>
                  <div className="flex flex-row justify-center gap-[1vw]">
                    <select
                      type="number"
                      name="countryCode"
                      className="w-1/2 rounded-full px-5 border-2 border-gray-600 text-gray-400 py-[1vh]"
                    >
                      <option className="text-gray-400">+91</option>
                      <option className="text-gray-400">+92</option>
                    </select>
                    <ErrorMessage name="countryCode" component="div" />
                    <Field
                      type="tel"
                      name="phone"
                      className="w-1/2 rounded-full px-5 border-2 border-gray-600 text-slate-400"
                    />
                    <ErrorMessage name="phone" component="div" />
                  </div>
                  <div className="mt-[3vh] font-semibold">NAME</div>
                  <Field
                    type="name"
                    name="name"
                    className="rounded-full border-2 border-gray-600 w-full py-[1vh]"
                  />
                  <ErrorMessage name="name" component="div" />
                  <div className="mt-[3vh] font-semibold">EMAIL [OPTIONAL]</div>
                  <Field
                    type="email"
                    name="email"
                    className="rounded-full border-2 border-gray-600 w-full py-[1vh]"
                  />
                  <ErrorMessage name="email" component="div" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-sky-400 text-white rounded-full px-5 border-2 border-gray-600 w-full py-[1vh] mt-[6vh] font-semibold text-xl"
                  >
                    CONTINUE
                  </button>
                  <div className="text-gray-400">
                    Get ready to receive a secret code(OTP) on your phone
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <img src={images.person} className="h-[64vh] w-auto hidden lg:block" />
      </div>
      </Header>
      </>
  );
};

export default Forms;
