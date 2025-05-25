import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
