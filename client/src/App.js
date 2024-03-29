import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SingleItem from "./pages/SingleItem";
import Error from "./pages/Error";
import Checkout from "./pages/Checkout";
import SharedLayout from "./components/SharedLayout";
import { NavProvider } from "./context/nav_context";
import { MenuProvider } from "./context/menu_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { LocationDisplay } from "./utils/LocationDisplay";
import "./sass/main.scss";

function App() {
  return (
    <NavProvider>
      <MenuProvider>
        <FilterProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SharedLayout />}>
                  <Route index element={<Home />} />
                  <Route path="menu/:id" element={<SingleItem />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="*" element={<Error />} />
                </Route>
              </Routes>
              <LocationDisplay />
            </BrowserRouter>
          </CartProvider>
        </FilterProvider>
      </MenuProvider>
    </NavProvider>
  );
}

export default App;
