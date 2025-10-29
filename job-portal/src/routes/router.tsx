import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { PATHS } from "../enum";
const HomePage = lazy(() => import("../pages/home/Home"));
const DashboardPage = lazy(() => import("../pages/dashboard/Dashboard"));
const PostPage = lazy(() => import("../pages/post/Post"));
const JobDetailsPage = lazy(() => import("../pages/job-details/JobDetails"));

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={PATHS.HOME}
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={PATHS.DASHBOARD}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardPage />
            </Suspense>
          }
        />
        <Route
          path={PATHS.POST}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PostPage />
            </Suspense>
          }
        />
        <Route
          path={PATHS.JOB_DETAILS}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <JobDetailsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
