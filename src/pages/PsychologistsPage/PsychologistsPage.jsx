import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPsychologists } from "../../redux/psychologists/psychologistsOps";
import PsychologistsCard from "../../components/PsychologistsCard/PsychologistsCard";
import Loader from "../../components/Loader/Loader";
import { loadMorePsyhologists } from "../../redux/psychologists/psychologistsSlice";
import Filters from "../../components/Filters/Filters";
import { sortPsychologists } from "../../redux/filters/filtersSlice";

const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, displayedItems, totalItems } = useSelector(
    (state) => state.psychologists,
  );
  const sortOption = useSelector((state) => state.filters.sortOption);
  const sortedItems = sortPsychologists(displayedItems, sortOption);

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMorePsyhologists());
  };

  const hasMoreItems = displayedItems.length < totalItems;

  return (
    <>
      <div>
        <Filters />
      </div>
      <div>
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        {sortedItems.map((psych, index) => (
          <PsychologistsCard key={index} data={psych} />
        ))}
      </div>

      {hasMoreItems && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="w-[176px] h-12 mt-16 mb-[100px] border bg-[#54BE96] border-transparent hover:bg-[#36A379] rounded-[30px] cursor-pointer text-[#FBFBFB]"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default PsychologistsPage;
