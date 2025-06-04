import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/favoritesSlice";
import PsychologistsCard from "../../components/PsychologistsCard/PsychologistsCard";
import Filters from "../../components/Filters/Filters";
import { sortPsychologists } from "../../redux/filters/filtersSlice";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const sortOption = useSelector((state) => state.filters.sortOption);
  const sortedFavorites = sortPsychologists(favorites, sortOption);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  return (
    <>
      <Filters />

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center">
          You haven't added any favorites yet.
        </p>
      ) : (
        <div className="space-y-6">
          {sortedFavorites.map((psychologist) => (
            <PsychologistsCard key={psychologist.id} data={psychologist} />
          ))}
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
