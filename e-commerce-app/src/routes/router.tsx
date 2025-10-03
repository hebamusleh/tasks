import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../pages/home-page/Home"));

export const Router = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<div>loading ...</div>}>
            <HomePage />
          </Suspense>
        }
      />
    </Routes>
  );
};
