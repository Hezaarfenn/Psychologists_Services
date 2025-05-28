import { useState } from "react";
import Appointment from "../Appointment/Appointment";
import BaseModal from "../BaseModal/BaseModal";

const PsychologistsCard = () => {
  const [expanded, setExpanded] = useState(false);

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <>
      <section className="max-w-[1440px] min-w-[768] mx-auto m-10 border border-[#FBFBFB] rounded-3xl">
        <div className="flex p-6">
          {/* Left Side: Avatar */}
          <div>
            <img
              width="120"
              height="120"
              src="/img/Avatar.jpg"
              alt="avatar"
              className="border-2 rounded-[30px] border-[#54BE96]/20"
            />
          </div>

          {/* Right Side: Info */}
          <div className="flex-1 pl-6">
            {/* Top Info: Title and Rating */}
            <div className="flex items-between items-start">
              <div>
                <p className="text-[#8A8A89] font-medium text-[16px]">
                  Psychologist
                </p>
                <h3 className="text-[#191A15] font-medium text-[24px] mb-6">
                  Dr. Sarah Davis
                </h3>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <svg width="16" height="16">
                    <use href="/sprite.svg#star" />
                  </svg>
                  <p>Rating: 4.75</p>
                </div>

                <div className="w-[1px] h-6 bg-[#191A15]/20" />

                <div className="flex gap-3 items-center">
                  <p>
                    Price / 1 hour: <span className="text-[#38CD3E]">120$</span>
                  </p>
                  <svg width="22.65" height="19.75">
                    <use href="/sprite.svg#hearth-empty" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col text-[#191A15] gap-2.5">
              <div className="flex gap-2.5">
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">Experience:</strong> 12
                  years
                </p>
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">License:</strong> Licensed
                  Psychologist (License #54321)
                </p>
              </div>
              <div className="flex gap-2.5">
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">Specialization:</strong>{" "}
                  Relationship Counseling
                </p>
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">
                    Initial consultation:
                  </strong>{" "}
                  Free 60-minute initial consultation
                </p>
              </div>
              <p className="text-[16px] text-[#191A15]/50 font-normal mt-6">
                Dr. Sarah Davis is a highly experienced and licensed
                psychologist specializing in Depression and Mood Disorders. With
                12 years of practice, she has helped numerous individuals
                overcome their depression and regain control of their lives. Dr.
                Davis is known for her empathetic and understanding approach to
                therapy, making her clients feel comfortable and supported
                throughout their journey to better mental health.
              </p>

              {!expanded && (
                <button
                  className="w-[82px] text-[#191A15] font-medium text-[16px] underline mt-3.5"
                  onClick={() => setExpanded(true)}
                >
                  Read more
                </button>
              )}
            </div>

            {expanded && (
              <div>
                <div className="flex flex-col mt-12">
                  <div className="flex gap-4 items-center">
                    <div className="w-[44px] h-[44px] text-[#54BE96] border bg-[#54BE96]/20 rounded-full text-xl flex items-center justify-center">
                      M
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Michael Brown</p>
                      <div className="flex gap-2 items-center">
                        <svg
                          width="16px"
                          height="16px"
                          className="text-gray-300"
                        >
                          <use href="/sprite.svg#star" />
                        </svg>
                        <p>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#191A15]/50 text-[16px] font-normal">
                    Dr. Davis has been a great help in managing my depression.
                    Her insights have been valuable.
                  </p>
                </div>
                <div className="flex flex-col mt-12">
                  <div className="flex gap-4 items-center">
                    <div className="w-[44px] h-[44px] text-[#54BE96] border bg-[#54BE96]/20 rounded-full text-xl flex items-center justify-center">
                      L
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Linda Johnson</p>
                      <div className="flex gap-2 items-center">
                        <svg
                          width="16px"
                          height="16px"
                          className="text-gray-300"
                        >
                          <use href="/sprite.svg#star" />
                        </svg>
                        <p>5.0</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#191A15]/50 text-[16px] font-normal">
                    I'm very satisfied with Dr. Davis's therapy. She's
                    understanding and empathetic.
                  </p>
                </div>
                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="w-[227px] h-12 mt-10 border bg-[#54BE96] border-transparent hover:bg-[#36A379] rounded-[30px] cursor-pointer text-[#FBFBFB]"
                >
                  Make an appointment
                </button>
                <BaseModal
                  isOpen={isAppointmentOpen}
                  onRequestClose={() => setIsAppointmentOpen(false)}
                >
                  <Appointment onClose={() => setIsAppointmentOpen(false)} />
                </BaseModal>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] min-w-[768] mx-auto m-10 border border-[#FBFBFB] rounded-3xl">
        <div className="flex p-6">
          {/* Left Side: Avatar */}
          <div>
            <img
              width="120"
              height="120"
              src="/img/Avatar-1.jpg"
              alt="avatar"
              className="border-2 rounded-[30px] border-[#54BE96]/20"
            />
          </div>

          {/* Right Side: Info */}
          <div className="flex-1 pl-6">
            {/* Top Info: Title and Rating */}
            <div className="flex items-between items-start">
              <div>
                <p className="text-[#8A8A89] font-medium text-[16px]">
                  Psychologist
                </p>
                <h3 className="text-[#191A15] font-medium text-[24px] mb-6">
                  Dr. Mark Thompson
                </h3>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <svg width="16" height="16">
                    <use href="/sprite.svg#star" />
                  </svg>
                  <p>Rating: 4.7</p>
                </div>

                <div className="w-[1px] h-6 bg-[#191A15]/20" />

                <div className="flex gap-3 items-center">
                  <p>
                    Price / 1 hour: <span className="text-[#38CD3E]">180$</span>
                  </p>
                  <svg width="22.65" height="19.75">
                    <use href="/sprite.svg#hearth-empty" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col text-[#191A15] gap-2.5">
              <div className="flex gap-2.5">
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">Experience:</strong> 20
                  years
                </p>
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">License:</strong> Licensed
                  Psychologist (License #54321)
                </p>
              </div>
              <div className="flex gap-2.5">
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">Specialization:</strong>{" "}
                  Relationship Counseling
                </p>
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">
                    Initial consultation:
                  </strong>{" "}
                  Free 60-minute initial consultation
                </p>
              </div>
              <p className="text-[16px] text-[#191A15]/50 font-normal mt-6">
                Dr. Mark Thompson is a highly experienced and licensed
                psychologist specializing in Relationship Counseling. With 20
                years of practice, he has helped individuals navigate and
                improve their relationships, leading to better well-being and
                personal growth. Dr. Thompson is known for his expertise and
                ability to provide invaluable insights to his clients. His
                approach to therapy is tailored to each individual's unique
                needs, ensuring a supportive and effective counseling
                experience.
              </p>

              {!expanded && (
                <button
                  className="w-[82px] text-[#191A15] font-medium text-[16px] underline mt-3.5"
                  onClick={() => setExpanded(true)}
                >
                  Read more
                </button>
              )}
            </div>

            {expanded && (
              <div>
                <div className="flex flex-col mt-12">
                  <div className="flex gap-4 items-center">
                    <div className="w-[44px] h-[44px] text-[#54BE96] border bg-[#54BE96]/20 rounded-full text-xl flex items-center justify-center">
                      M
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Michael Brown</p>
                      <div className="flex gap-2 items-center">
                        <svg
                          width="16px"
                          height="16px"
                          className="text-gray-300"
                        >
                          <use href="/sprite.svg#star" />
                        </svg>
                        <p>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#191A15]/50 text-[16px] font-normal">
                    Dr. Davis has been a great help in managing my depression.
                    Her insights have been valuable.
                  </p>
                </div>
                <div className="flex flex-col mt-12">
                  <div className="flex gap-4 items-center">
                    <div className="w-[44px] h-[44px] text-[#54BE96] border bg-[#54BE96]/20 rounded-full text-xl flex items-center justify-center">
                      L
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Linda Johnson</p>
                      <div className="flex gap-2 items-center">
                        <svg
                          width="16px"
                          height="16px"
                          className="text-gray-300"
                        >
                          <use href="/sprite.svg#star" />
                        </svg>
                        <p>5.0</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#191A15]/50 text-[16px] font-normal">
                    I'm very satisfied with Dr. Davis's therapy. She's
                    understanding and empathetic.
                  </p>
                </div>
                <button className="w-[227px] h-12 mt-10 border bg-[#54BE96] border-transparent hover:bg-[#36A379] rounded-[30px] text-[#FBFBFB]">
                  Make an appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] min-w-[768] mx-auto m-10 border border-[#FBFBFB] rounded-3xl">
        <div className="flex p-6">
          {/* Left Side: Avatar */}
          <div>
            <img
              width="120"
              height="120"
              src="/img/Avatar-2.jpg"
              alt="avatar"
              className="border-2 rounded-[30px] border-[#54BE96]/20"
            />
          </div>

          {/* Right Side: Info */}
          <div className="flex-1 pl-6">
            {/* Top Info: Title and Rating */}
            <div className="flex items-between items-start">
              <div>
                <p className="text-[#8A8A89] font-medium text-[16px]">
                  Psychologist
                </p>
                <h3 className="text-[#191A15] font-medium text-[24px] mb-6">
                  Dr. Lisa Anderson
                </h3>
              </div>

              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <svg width="16" height="16">
                    <use href="/sprite.svg#star" />
                  </svg>
                  <p>Rating: 4.8</p>
                </div>

                <div className="w-[1px] h-6 bg-[#191A15]/20" />

                <div className="flex gap-3 items-center">
                  <p>
                    Price / 1 hour: <span className="text-[#38CD3E]">160$</span>
                  </p>
                  <svg width="22.65" height="19.75">
                    <use href="/sprite.svg#hearth-empty" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col text-[#191A15] gap-2.5">
              <div className="flex gap-2.5">
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">Experience:</strong> 18
                  years
                </p>
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">License:</strong> Licensed
                  Psychologist (License #54321)
                </p>
              </div>
              <div className="flex gap-2.5">
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">Specialization:</strong>{" "}
                  Relationship Counseling
                </p>
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">
                    Initial consultation:
                  </strong>{" "}
                  Free 60-minute initial consultation
                </p>
              </div>
              <p className="text-[16px] text-[#191A15]/50 font-normal mt-6">
                Dr. Sarah Davis is a highly experienced and licensed
                psychologist specializing in Depression and Mood Disorders. With
                12 years of practice, she has helped numerous individuals
                overcome their depression and regain control of their lives. Dr.
                Davis is known for her empathetic and understanding approach to
                therapy, making her clients feel comfortable and supported
                throughout their journey to better mental health.
              </p>

              {!expanded && (
                <button
                  className="w-[82px] text-[#191A15] font-medium text-[16px] underline mt-3.5"
                  onClick={() => setExpanded(true)}
                >
                  Read more
                </button>
              )}
            </div>

            {expanded && (
              <div>
                <div className="flex flex-col mt-12">
                  <div className="flex gap-4 items-center">
                    <div className="w-[44px] h-[44px] text-[#54BE96] border bg-[#54BE96]/20 rounded-full text-xl flex items-center justify-center">
                      M
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Michael Brown</p>
                      <div className="flex gap-2 items-center">
                        <svg
                          width="16px"
                          height="16px"
                          className="text-gray-300"
                        >
                          <use href="/sprite.svg#star" />
                        </svg>
                        <p>4.5</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#191A15]/50 text-[16px] font-normal">
                    Dr. Davis has been a great help in managing my depression.
                    Her insights have been valuable.
                  </p>
                </div>
                <div className="flex flex-col mt-12">
                  <div className="flex gap-4 items-center">
                    <div className="w-[44px] h-[44px] text-[#54BE96] border bg-[#54BE96]/20 rounded-full text-xl flex items-center justify-center">
                      L
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>Linda Johnson</p>
                      <div className="flex gap-2 items-center">
                        <svg
                          width="16px"
                          height="16px"
                          className="text-gray-300"
                        >
                          <use href="/sprite.svg#star" />
                        </svg>
                        <p>5.0</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#191A15]/50 text-[16px] font-normal">
                    I'm very satisfied with Dr. Davis's therapy. She's
                    understanding and empathetic.
                  </p>
                </div>
                <button className="w-[227px] h-12 mt-10 border bg-[#54BE96] border-transparent hover:bg-[#36A379] rounded-[30px] text-[#FBFBFB]">
                  Make an appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <button className="w-[176px] h-12 mt-16 mb-[100px] border bg-[#54BE96] border-transparent hover:bg-[#36A379] rounded-[30px] cursor-pointer text-[#FBFBFB]">
          Load More
        </button>
      </div>
    </>
  );
};

export default PsychologistsCard;
