import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
const HomePage = lazy(() => import("../pages/home-page/Home"));

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
