import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import {
  WrapperComponent,
  CheckoutWrapperComponent,
} from "../../__mocks__/wrapperComponent";
import { LocationDisplay } from "../../utils/LocationDisplay";
import Checkout from "../../pages/Checkout";

const RouterWrapper = ({ children }) => (
  <MemoryRouter initialEntries={["/checkout"]}>{children}</MemoryRouter>
);

const MockCheckout = () => {
  return (
    <BrowserRouter>
      <Checkout />
    </BrowserRouter>
  );
};

describe("CheckoutRouting", () => {
  beforeEach(() => {
    render(
      <WrapperComponent>
        <Checkout />
        <LocationDisplay />
      </WrapperComponent>,
      { wrapper: RouterWrapper }
    );
  });
  it("should show home page when 'fill it' button is clicked", () => {
    const fillBtn = screen.getByText("Fill it");
    fireEvent.click(fillBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});

describe("CheckoutPageWithEmptyCart", () => {
  beforeEach(() => {
    render(<MockCheckout />, { wrapper: WrapperComponent });
  });
  it("should render checkout page with 'empty cart message' without crash when cart is empty", () => {
    const checkoutEmptyEl = screen.getByTestId("checkout-empty");
    expect(checkoutEmptyEl).toBeInTheDocument();
  });
});

describe("CheckoutPage", () => {
  beforeEach(() => {
    render(<MockCheckout />, { wrapper: CheckoutWrapperComponent });
  });
  it("should render checkout page with stripe checkout form without crash when cart is NOT empty", () => {
    const checkoutEmptyEl = screen.getByTestId("checkout");
    expect(checkoutEmptyEl).toBeInTheDocument();
  });
});
