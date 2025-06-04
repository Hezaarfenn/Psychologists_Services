import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  toggleFavorite,
  selectIsFavorite,
} from "../../redux/favorites/favoritesSlice";
import Appointment from "../Appointment/Appointment";
import BaseModal from "../BaseModal/BaseModal";
import { selectIsAuthenticated } from "../../redux/auth/authSlice";

const PsychologistsCard = ({ data }) => {
  const {
    name,
    avatar_url,
    experience,
    license,
    specialization,
    initial_consultation,
    rating,
    price_per_hour,
    about,
    reviews = [],
  } = data;

  const [expanded, setExpanded] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const uniqueId = `${name}-${avatar_url}`;
  const isFavorite = useSelector((state) => selectIsFavorite(state, uniqueId));

  const handleFavorite = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to add to favorites!");
      return;
    }

    const wasFavorite = isFavorite;
    const psychologistWithId = { ...data, id: uniqueId };
    dispatch(toggleFavorite(psychologistWithId));

    if (!wasFavorite) {
      toast.success(`${name} added to favorites!`);
    } else {
      toast.info(`${name} removed from favorites!`);
    }
  };

  return (
    <>
      <section className="max-w-[1440px] min-w-[768px] mx-auto border border-[rgb(var(--primary-text-on))] rounded-3xl">
        <div className="flex p-6">
          {/* Left Side: Avatar */}
          <div>
            <img
              width="120"
              height="120"
              src={avatar_url}
              alt={`${name} avatar`}
              className="border-2 rounded-[30px] border-[rgb(var(--primary-color)/0.20)]"
            />
          </div>

          {/* Right Side: Info */}
          <div className="flex-1 pl-6">
            {/* Top Info: Title and Rating */}
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[#8A8A89] font-medium text-[16px]">
                  Psychologist
                </p>
                <h3 className="text-[#191A15] font-medium text-[24px] mb-6">
                  {name}
                </h3>
              </div>

              <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <svg width="16" height="16">
                    <use href="/sprite.svg#star" />
                  </svg>
                  <p>Rating: {rating}</p>
                </div>

                <div className="w-[1px] h-6 bg-[#191A15]/20" />

                <div className="flex gap-3 items-center">
                  <p>
                    Price / 1 hour:{" "}
                    <span className="text-[#38CD3E]">${price_per_hour}</span>
                  </p>
                  <button onClick={handleFavorite} className="cursor-pointer">
                    <svg width="22.65" height="19.75">
                      <use
                        href={
                          isFavorite
                            ? "/sprite.svg#hearth-filled"
                            : "/sprite.svg#hearth-empty"
                        }
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col text-[#191A15] gap-2.5">
              <div className="flex gap-2.5">
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">Experience:</strong>{" "}
                  {experience}
                </p>
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">License:</strong> {license}
                </p>
              </div>
              <div className="flex gap-2.5">
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">Specialization:</strong>{" "}
                  {specialization}
                </p>
                <p className="border border-[#F3F3F3] rounded-3xl text-[#191A15] px-4 py-2">
                  <strong className="text-[#8A8A89]">
                    Initial consultation:
                  </strong>{" "}
                  {initial_consultation}
                </p>
              </div>
              <p className="text-[16px] text-[#191A15]/50 font-normal mt-6">
                {about}
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
                  {reviews.map((review, index) => (
                    <div key={index}>
                      <div className="flex gap-4 items-center">
                        <div className="w-[44px] h-[44px] text-[rgb(var(--primary-color))] border bg-[rgb(var(--primary-color)/0.20)] rounded-full text-xl flex items-center justify-center">
                          {review.reviewer.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col gap-1">
                          <p>{review.reviewer}</p>
                          <div className="flex gap-2 items-center">
                            <svg
                              width="16px"
                              height="16px"
                              className="text-gray-300"
                            >
                              <use href="/sprite.svg#star" />
                            </svg>
                            <p>{review.rating}</p>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-[#191A15]/50 text-[16px] font-normal">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsAppointmentOpen(true)}
                  className="w-[227px] h-12 mt-10 border bg-[rgb(var(--primary-color))] border-transparent hover:bg-[rgb(var(--primary-color-hover))] rounded-[30px] cursor-pointer text-[rgb(var(--primary-text-on))]"
                >
                  Make an appointment
                </button>
                <BaseModal
                  isOpen={isAppointmentOpen}
                  onRequestClose={() => setIsAppointmentOpen(false)}
                >
                  <Appointment
                    onClose={() => setIsAppointmentOpen(false)}
                    name={name}
                    avatar_url={avatar_url}
                  />
                </BaseModal>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PsychologistsCard;
