import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortOption } from "../../redux/filters/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const sortOption = useSelector((state) => state.filters.sortOption);
  const [open, setOpen] = useState(false);

  const options = [
    { label: "A to Z", value: "name-asc" },
    { label: "Z to A", value: "name-desc" },
    { label: "Less than 10$", value: "price-asc" },
    { label: "Greater than 10$", value: "price-desc" },
    { label: "Popular", value: "rating-asc" },
    { label: "Not popular", value: "rating-desc" },
    { label: "Show all", value: "show-all" },
  ];

  return (
    <div className="max-w-[1440px] min-w-[768] mx-auto flex flex-col md:flex-row items-center justify-between pt-2 px-8">
      <div className="flex flex-col relative w-56 mt-20 gap-2">
        <p className="text-[#8A8A89] text-[14px] font-medium">Filters</p>
        <div
          className="flex justify-between items-center h-12 px-4 bg-[#53BE96] text-white rounded-[14px] cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>
            {options.find((o) => o.value === sortOption)?.label ||
              "Select a filter"}
          </span>
          {open ? (
            <svg width="20" height="20">
              <use href="/sprite.svg#chevron-up" />
            </svg>
          ) : (
            <svg width="20" height="20">
              <use href="/sprite.svg#chevron-down" />
            </svg>
          )}
        </div>

        {open && (
          <ul className="absolute top-full left-0 z-10 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-100">
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  dispatch(setSortOption(opt.value));
                  setOpen(false);
                }}
                className={`px-4 py-2 text-sm text-[#191A15] cursor-pointer hover:bg-gray-100 rounded ${
                  opt.value === sortOption
                    ? "bg-[#000000]/7 font-normal"
                    : " text-[#191A15]/30"
                }`}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filters;
