import React from "react";

import { Route, Routes } from "react-router-dom";
import PageProducts from "./pages/feature-products/products-page";
import CartPage from "./pages/feature-cart/cart-page";

import { AppLayout } from "./layout/app-layout";

function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<PageProducts />} />
          <Route path="/products" element={<PageProducts />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
