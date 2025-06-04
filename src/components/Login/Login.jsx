import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/auth/authOps";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../../validation/validationSchema";
import "./../../routers/AppRoutes";

const Login = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/psychologists");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLoginSubmit = async (values, { setSubmitting }) => {
    const resultAction = await dispatch(loginUser(values));

    if (loginUser.fulfilled.match(resultAction)) {
      onClose();
    } else {
      toast.error(error.message);
    }

    setSubmitting(false);
  };

  return (
    <section className="relative p-15 md:p-0">
      <div className="flex flex-col gap-5">
        <h1 className="text-[40px] text-[#191A15] font-medium">Log In</h1>
        <p className="text-[16px] text-[#191A15]/50 font-normal">
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleLoginSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col mt-10 gap-4.5">
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
              type="password"
              placeholder="Password"
              className="w-[438px] h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15] focus:outline-none"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm ml-2"
            />
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-[438px] h-[52px] mt-10 border bg-[rgb(var(--primary-color))] border-transparent hover:bg-[rgb(var(--primary-color-hover))] rounded-[30px] text-[rgb(var(--primary-text-on))]"
            >
              {isLoading ? "Logging in..." : "Log In"}
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

export default Login;
