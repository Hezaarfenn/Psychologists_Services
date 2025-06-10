import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../redux/auth/authOps";
import { toast } from "react-toastify";
import { registerSchema } from "../../validation/validationSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registiration = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleRegisterSubmit = async (values, { setSubmitting }) => {
    const resultAction = await dispatch(registerUser(values));
    if (registerUser.fulfilled.match(resultAction)) {
      onClose();
    } else {
      const errorPayload = resultAction.payload;

      if (errorPayload?.code === "auth/invalid-credential") {
        toast.error(
          "Invalid email or password. Please check your credentials.",
        );
      } else if (errorPayload?.code === "auth/email-already-in-use") {
        toast.error("Email already in use. Please use a different email.");
      } else {
        toast.error(
          errorPayload?.message ||
            "An unexpected error occurred. Please try again.",
        );
      }
    }
    setSubmitting(false);
  };

  return (
    <section className="relative md:p-0 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-[40px] text-[#191A15] font-medium">
          Registiration
        </h1>
        <p className="text-[16px] text-[#191A15]/50 font-normal">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleRegisterSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col mt-10 gap-4.5">
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className="w-full h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15] focus:outline-none"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm ml-2"
            />

            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="w-full h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15] focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm ml-2"
            />
            <div className="relative">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15] focus:outline-none"
              />
              <svg
                width="20"
                height="20"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <use
                  href={`/sprite.svg#${showPassword ? "eye-off" : "eye-on"}`}
                />
              </svg>

              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm ml-2"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-full h-[52px] mt-10 border bg-[rgb(var(--primary-color))] border-transparent hover:bg-[rgb(var(--primary-color-hover))] rounded-[30px] text-[rgb(var(--primary-text-on))]"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>

      {/* X ikonu */}
      <div className="absolute top-[-10px] right-4 md:top-[-40px] md:left-[444px]">
        <svg
          width="32"
          height="32"
          onClick={onClose}
          className="cursor-pointer"
        >
          <use href="/sprite.svg#x" />
        </svg>
      </div>
    </section>
  );
};

export default Registiration;
