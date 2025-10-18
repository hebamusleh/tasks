import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { PATHS } from "../enums";
const HomePage = lazy(() => import("../pages/home-page/Home"));
const LoginPage = lazy(() => import("../pages/login-page/LoginPage"));
const SignupPage = lazy(() => import("../pages/sign-up-page/SignupPage"));
const CartPage = lazy(() => import("../pages/cart-page/CartPage"));
const CheckoutPage = lazy(() => import("../pages/checkout-page/CheckoutPage"));
const ProductDetailsPage = lazy(
  () => import("../pages/product-details-page/ProductDetailsPage")
);

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
          path={PATHS.SIGN_UP}
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SignupPage />
            </Suspense>
          }
        />
        <Route
          path={PATHS.LOGIN}
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path={PATHS.CART}
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CartPage />
            </Suspense>
          }
        />
        <Route
          path={PATHS.CHECKOUT}
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CheckoutPage />
            </Suspense>
          }
        />
        <Route
          path={PATHS.PRODUCT_DETAILS}
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetailsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
