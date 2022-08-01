import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { CartProvider } from "../../../context/cart_context";
import { FilterProvider } from "../../../context/filter_context";
import { MenuProvider } from "../../../context/menu_context";
import { BrowserRouter } from "react-router-dom";

const WrapperComponent = ({ children }) => (
  <MenuProvider>
    <FilterProvider>
      <CartProvider>{children}</CartProvider>
    </FilterProvider>
  </MenuProvider>
);

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  beforeEach(() => {
    render(<MockNavbar />, { wrapper: WrapperComponent });
  });
  it("should render 4 nav-links with submenu option", () => {
    const navLinkElements = screen.getAllByTestId(/nav-link/i);
    expect(navLinkElements.length).toBe(4);
  });
  it("should show submenu when nav-link with submenu option is hovered", () => {
    const navLinkElement = screen.getByTestId("nav-link-1");
    fireEvent.mouseOver(navLinkElement);
    const submenuElement = screen.getByTestId("submenu");
    expect(submenuElement).toHaveClass("show");
  });
  it("should show search form when search-btn is clicked", () => {
    const searchBtnElement = screen.getByTestId("search-btn");
    fireEvent.click(searchBtnElement);
    const searchFormElement = screen.getByTestId("search-from");
    expect(searchFormElement).toHaveClass("show");
  });
  it("should not show search form when search-btn is clicked and the search form is already open", () => {
    const searchBtnElement = screen.getByTestId("search-btn");
    fireEvent.click(searchBtnElement);
    fireEvent.click(searchBtnElement);
    const searchFormElement = screen.queryByTestId("search-from");
    expect(searchFormElement).not.toHaveClass("show");
  });
  it("should show cart when cart-btn is clicked", () => {
    const cartBtnElement = screen.getByTestId("cart-btn");
    fireEvent.click(cartBtnElement);
    const cartElement = screen.getByTestId("cart");
    expect(cartElement).toHaveClass("show");
  });
  it("should not show cart when cart-btn is clicked and cart is already open", () => {
    const cartBtnElement = screen.getByTestId("cart-btn");
    fireEvent.click(cartBtnElement);
    fireEvent.click(cartBtnElement);
    const cartElement = screen.getByTestId("cart");
    expect(cartElement).not.toHaveClass("show");
  });
  it("should update 'search-input' input value on change", () => {
    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, {
      target: { value: "pizza" },
    });
    expect(inputElement.value).toBe("pizza");
  });
});
