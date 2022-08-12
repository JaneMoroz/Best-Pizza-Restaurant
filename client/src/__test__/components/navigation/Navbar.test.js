import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../../components/navigation/Navbar";
import { WrapperComponent } from "../../../__mocks__/wrapperComponent";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { LocationDisplay } from "../../../utils/LocationDisplay";

const RouterWrapper = ({ children }) => (
  <MemoryRouter initialEntries={["/notHomePage"]}>{children}</MemoryRouter>
);

const MockNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe("NavRouting", () => {
  beforeEach(() => {
    render(
      <WrapperComponent>
        <Navbar />
        <LocationDisplay />
      </WrapperComponent>,
      { wrapper: RouterWrapper }
    );
  });
  it("should show home page when logo link is clicked", () => {
    const logoLink = screen.getByText("Best Pizza");
    fireEvent.click(logoLink);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
  it("should show home page when this is NOT the home page and the search button is clicked", () => {
    const searchBtnElement = screen.getByTestId("search-btn");
    fireEvent.click(searchBtnElement);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});

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
});

describe("SearchButton", () => {
  beforeEach(() => {
    render(<MockNavbar />, { wrapper: WrapperComponent });
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
});

describe("CartButton", () => {
  beforeEach(() => {
    render(<MockNavbar />, { wrapper: WrapperComponent });
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
  it("should not show cart when close-cart-btn is clicked and cart is already open", () => {
    const cartBtnElement = screen.getByTestId("cart-btn");
    fireEvent.click(cartBtnElement);
    const closeCartBtnElement = screen.getByTestId("close-cart-btn");
    fireEvent.click(closeCartBtnElement);
    const cartElement = screen.getByTestId("cart");
    expect(cartElement).not.toHaveClass("show");
  });
});

describe("Sidebar", () => {
  beforeEach(() => {
    render(<MockNavbar />, { wrapper: WrapperComponent });
  });
  it("should show sidebar when nav-toggle-btn is clicked", () => {
    const navToggleBtnElement = screen.getByTestId("nav-toggle-btn");
    fireEvent.click(navToggleBtnElement);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toHaveClass("show");
  });
  it("should not show sidebar when close-sidebar-btn is clicked", () => {
    const closeBtnElement = screen.getByTestId("close-sidebar-btn");
    fireEvent.click(closeBtnElement);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).not.toHaveClass("show");
  });
});
