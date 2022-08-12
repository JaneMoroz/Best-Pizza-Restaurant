import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../../../components/cart/Cart";
import Menu from "../../../components/menu/Menu";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { WrapperComponent } from "../../../__mocks__/wrapperComponent";
import { LocationDisplay } from "../../../utils/LocationDisplay";

const RouterWrapper = ({ children }) => (
  <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
);

const MockMenuWithCart = () => {
  return (
    <BrowserRouter>
      <Cart />
      <Menu />
    </BrowserRouter>
  );
};

const addItemToCart = (menuItemIndex, quantity) => {
  const addToCartBtn = screen.getAllByTestId("add-to-cart-btn")[menuItemIndex];
  for (let index = 0; index < quantity; index++) {
    fireEvent.click(addToCartBtn);
  }
};

describe("CartRouting", () => {
  beforeEach(() => {
    render(
      <WrapperComponent>
        <Cart />
        <LocationDisplay />
      </WrapperComponent>,
      { wrapper: RouterWrapper }
    );
  });
  it("should show checkout page when 'Order' button is clicked", () => {
    const orderBtn = screen.getByText("Order");
    fireEvent.click(orderBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent(
      "/checkout"
    );
  });
});

describe("MenuWithCart", () => {
  beforeEach(() => {
    render(<MockMenuWithCart />, {
      wrapper: WrapperComponent,
    });
  });
  it("should render cart with 0 CartItems", () => {
    const cartItemElements = screen.queryByTestId("cart-item");
    expect(cartItemElements).not.toBeInTheDocument();
  });
  it("should render cart with 1 CartItem when 'add to cart' is clicked", () => {
    addItemToCart(0, 1);
    const cartItemElement = screen.getByTestId("cart-item");
    expect(cartItemElement).toBeInTheDocument();
  });
  it("should render cart with 1 CartItem when 'add to cart' is clicked twice", () => {
    addItemToCart(0, 2);
    const cartItemElement = screen.getByTestId("cart-item");
    expect(cartItemElement).toBeInTheDocument();
  });
  it("should render '2' in cart item quantity when 'add to cart' is clicked twice (same menu item)", () => {
    addItemToCart(0, 2);
    const cartItemQuantityElement = screen.getByTestId("cart-item-quantity");
    expect(cartItemQuantityElement).toHaveTextContent("2");
  });
  it("should render cart with 2 CartItems when 'add to cart' is clicked (two different menu items)", () => {
    addItemToCart(0, 1);
    addItemToCart(1, 1);
    const cartItemElements = screen.getAllByTestId("cart-item");
    expect(cartItemElements.length).toBe(2);
  });
  it("should render '2' in cart item quantity when 'add to cart' is clicked and then 'increase quanity' button is clicked", () => {
    addItemToCart(0, 1);
    const increaseQuantityBtn = screen.getByTestId("inc-quantity");
    fireEvent.click(increaseQuantityBtn);
    const cartItemQuantityElement = screen.getByTestId("cart-item-quantity");
    expect(cartItemQuantityElement).toHaveTextContent("2");
  });
  it("should render '1' in cart item quantity when 'add to cart' is clicked twice and then 'decrease quanity' button is clicked", () => {
    addItemToCart(0, 2);
    const decreaseQuantityBtn = screen.getByTestId("dec-quantity");
    fireEvent.click(decreaseQuantityBtn);
    const cartItemQuantityElement = screen.getByTestId("cart-item-quantity");
    expect(cartItemQuantityElement).toHaveTextContent("1");
  });
  it("should NOT render cartItem when 'add to cart' is clicked and then 'decrease quanity' button is clicked", () => {
    addItemToCart(0, 1);
    const decreaseQuantityBtn = screen.getByTestId("dec-quantity");
    fireEvent.click(decreaseQuantityBtn);
    const cartItemElements = screen.queryByTestId("cart-item");
    expect(cartItemElements).not.toBeInTheDocument();
  });
  it("should NOT render cartItem when 'add to cart' is clicked and then 'delete' button is clicked", () => {
    addItemToCart(0, 1);
    const deleteBtn = screen.getByTestId("delete-cart-item");
    fireEvent.click(deleteBtn);
    const cartItemElements = screen.queryByTestId("cart-item");
    expect(cartItemElements).not.toBeInTheDocument();
  });
  it("should NOT render cartItem when 'add to cart' is clicked several times and then 'remove all' button is clicked", () => {
    addItemToCart(0, 1);
    addItemToCart(1, 1);
    const removeAllBtn = screen.getByText("Remove all");
    fireEvent.click(removeAllBtn);
    const cartItemElements = screen.queryByTestId("cart-item");
    expect(cartItemElements).not.toBeInTheDocument();
  });
  it("should render 'total' equals $0.00 when cart is empty", () => {
    const totalPriceEl = screen.getByTestId("total-price");
    expect(totalPriceEl).toHaveTextContent("$0.00");
  });
  it("should render 'total' equals $24.49 when a first(by index) cartItem is added to cart", () => {
    addItemToCart(0, 1);
    const totalPriceEl = screen.getByTestId("total-price");
    expect(totalPriceEl).toHaveTextContent("$24.49");
  });
});
