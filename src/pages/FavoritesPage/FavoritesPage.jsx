// src/pages/FavoritesPage.jsx
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/favoritesSlice";
import PsychologistsCard from "../../components/PsychologistsCard/PsychologistsCard";
import Filters from "../../components/Filters/Filters";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6">
      <Filters />

      {favorites.length === 0 ? (
        <p className="text-gray-500">You haven't added any favorites yet.</p>
      ) : (
        <div className="space-y-6">
          {favorites.map((psychologist) => (
            <PsychologistsCard key={psychologist.id} data={psychologist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
