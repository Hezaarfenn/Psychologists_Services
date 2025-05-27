import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../redux/auth/authOps";
import { toast } from "react-toastify";
import * as Yup from "yup";
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

  const loginSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "At least 2 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password must be at least 6 characters")
      .min(6, "At least 6 characters"),
  });

  const handleRegisterSubmit = async (values, { setSubmitting }) => {
    const resultAction = await dispatch(registerUser(values));
    if (registerUser.fulfilled.match(resultAction)) {
      toast.success("Registered successfully!");
      onClose();
    } else {
      toast.error(resultAction.payload?.message || "Registration failed");
    }
    setSubmitting(false);
  };

  return (
    <section className="relative p-15 md:p-0">
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
        validationSchema={loginSchema}
        onSubmit={handleRegisterSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col mt-10 gap-4.5">
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className="w-[438px] h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15] focus:outline-none"
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
              className="w-[438px] h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15] focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm ml-2"
            />
            <Field
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-[438px] h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15] focus:outline-none"
            />
            <svg
              width="20"
              height="20"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-[50%] right-4 -translate-y-1/2 cursor-pointer"
            >
              <use href={`/sprite.svg#${showPassword ? "eye-off" : "eye"}`} />
            </svg>

            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm ml-2"
            />

            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-[438px] h-[52px] mt-10 border bg-[#54BE96] border-transparent hover:bg-[#36A379] rounded-[30px] text-[#FBFBFB]"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>

      {/* X ikonu */}
      <div className="absolute top-[-10px] left-[610px] md:top-[-40px] md:left-[444px]">
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
