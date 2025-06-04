import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/auth/authSlice";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const PsychologistsPage = lazy(
  () => import("../pages/PsychologistsPage/PsychologistsPage"),
);
const FavoritesPage = lazy(
  () => import("../pages/FavoritesPage/FavoritesPage"),
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuthenticated);

  return isLoggedIn ? children : <Navigate to="/psychologists" replace />;
};

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                {" "}
                <FavoritesPage />{" "}
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
