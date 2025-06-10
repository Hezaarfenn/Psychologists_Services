import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPsychologists } from "../../redux/psychologists/psychologistsOps";
import PsychologistsCard from "../../components/PsychologistsCard/PsychologistsCard";
import Loader from "../../components/Loader/Loader";
import {
  loadMorePsyhologists,
  updateDisplayedItems,
} from "../../redux/psychologists/psychologistsSlice";
import Filters from "../../components/Filters/Filters";
import { sortPsychologists } from "../../redux/filters/filtersSlice";

const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, items, currentPage, itemsPerPage } = useSelector(
    (state) => state.psychologists,
  );
  const sortOption = useSelector((state) => state.filters.sortOption);

  const allSortedItems = useMemo(() => {
    return sortPsychologists(items, sortOption);
  }, [items, sortOption]);

  const displayedItems = useMemo(() => {
    const endIndex = currentPage * itemsPerPage;
    return allSortedItems.slice(0, endIndex);
  }, [allSortedItems, currentPage, itemsPerPage]);

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMorePsyhologists());
    setTimeout(() => {
      dispatch(updateDisplayedItems(allSortedItems));
    }, 0);
  };

  const hasMoreItems = displayedItems.length < allSortedItems.length;

  return (
    <>
      <div>
        <Filters />
      </div>
      <div className="flex flex-col gap-1">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        {displayedItems.map((psych, index) => (
          <PsychologistsCard key={index} data={psych} />
        ))}
      </div>

      {hasMoreItems && (
        <div className="flex justify-center w-full">
          <button
            onClick={handleLoadMore}
            className="mx-auto w-[176px] h-12 mt-16 mb-[100px] border bg-[rgb(var(--primary-color))] border-transparent hover:bg-[rgb(var(--primary-color-hover))] rounded-[30px] cursor-pointer text-[rgb(var(--primary-text-on))]"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default PsychologistsPage;
