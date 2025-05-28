import { Formik, Form } from "formik";
import { appointmentSchema } from "../../validation/validationSchema";
import { useState } from "react";
import { times } from "../../utils/TimePicker";
import { ErrorField } from "../../utils/ErrorField";
import { useField } from "formik";

const TimePicker = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);
  const { setValue } = helpers;

  const handleSelect = (time) => {
    setValue(time);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        {...field}
        readOnly
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-2 pr-12 rounded-[12px] cursor-pointer focus:outline-none ${
          meta.touched && meta.error ? "border border-red-500" : ""
        }`}
        placeholder="Select time"
      />
      <svg
        width="20"
        height="20"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
      >
        <use href="/sprite.svg#clock" />
      </svg>

      {meta.touched && meta.error && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2 text-red-500 text-xs font-medium max-w-[100px] text-right">
          {meta.error}
        </div>
      )}

      {isOpen && (
        <div className="absolute top-full left-0 z-10 mt-2 w-full bg-white shadow-lg rounded-[12px] p-4 max-h-[200px] overflow-y-auto">
          <p className="text-[#191A15] text-sm font-medium mb-4 px-4">
            Meeting time
          </p>
          <ul>
            {times.map((time) => (
              <li
                key={time}
                className="text-[#191A15] hover:bg-[#54BE96]/15 px-10 py-1 rounded cursor-pointer text-sm"
                onClick={() => handleSelect(time)}
              >
                {time}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Appointment = ({ onClose }) => {
  const initialValues = {
    name: "",
    phone: "",
    meetingTime: "00:00",
    email: "",
    comment: "",
  };

  return (
    <section className="relative">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#191A15] text-4xl md:text-[40px]/12 font-medium">
          Make an appointment with a psychologists
        </h1>
        <p className="text-[#191A15]/50 text-base md:text-sm font-normal">
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
      </div>

      <div className="flex flex-col mt-10">
        <div className="flex items-center gap-3.5">
          <img
            width="44"
            height="44"
            src="/img/Avatar.jpg"
            alt="Avatar"
            className="border border-[#E0E0E0] rounded-[15px]"
          />
          <div className="flex flex-col gap-1">
            <p className="text-[#8A8A89] text-[12px] font-medium">
              Your psychologists
            </p>
            <h3 className="text-[#191A15] text-[16px] font-medium">
              Dr. Sarah Davis
            </h3>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={appointmentSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex flex-col gap-4 mt-10">
            <ErrorField name="name" type="text" placeholder="Name" />

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <ErrorField name="phone" type="tel" placeholder="Phone" />
              </div>

              <div className="flex-1 relative border border-[#191A15]/10 rounded-[12px]">
                <TimePicker name="meetingTime" />
              </div>
            </div>

            <ErrorField name="email" type="email" placeholder="Email" />

            <ErrorField
              name="comment"
              as="textarea"
              placeholder="Comment"
              className="min-h-[120px]"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="bg-[#54BE96] hover:bg-[#36A379] cursor-pointer rounded-[30px] text-[#FBFBFB] text-base md:text-xl font-medium py-4 w-full md:w-[400px] mx-auto mt-2"
            >
              Send
            </button>
          </Form>
        </Formik>

        {/* X icon */}
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
      </div>
    </section>
  );
};

export default Appointment;
