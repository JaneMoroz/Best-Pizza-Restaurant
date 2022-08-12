import { CartProvider, CartContext } from "../context/cart_context";
import { FilterProvider } from "../context/filter_context";
import { MenuContext } from "../context/menu_context";
import { NavProvider } from "../context/nav_context";
import { mockCartContextValues, mockMenuContextValues } from "./mockContext";

export const WrapperComponent = ({ children }) => (
  <NavProvider>
    <MenuContext.Provider value={mockMenuContextValues}>
      <FilterProvider>
        <CartProvider>{children}</CartProvider>
      </FilterProvider>
    </MenuContext.Provider>
  </NavProvider>
);

export const CheckoutWrapperComponent = ({ children }) => (
  <NavProvider>
    <MenuContext.Provider value={mockMenuContextValues}>
      <FilterProvider>
        <CartContext.Provider value={mockCartContextValues}>
          {children}
        </CartContext.Provider>
      </FilterProvider>
    </MenuContext.Provider>
  </NavProvider>
);
