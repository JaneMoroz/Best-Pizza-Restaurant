import { render, screen, fireEvent, within } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { WrapperComponent } from "../../__mocks__/wrapperComponent";
import { LocationDisplay } from "../../utils/LocationDisplay";
import SingleItem from "../../pages/SingleItem";
import Cart from "../../components/cart/Cart";

const RouterWrapper = ({ children }) => (
  <MemoryRouter initialEntries={["/menu/14"]}>{children}</MemoryRouter>
);

const MockSingleItem = () => {
  return (
    <BrowserRouter>
      <SingleItem />
    </BrowserRouter>
  );
};

const MockSingleItemWithCart = () => {
  return (
    <BrowserRouter>
      <Cart />
      <SingleItem />
    </BrowserRouter>
  );
};

const chooseOption = (name) => {
  const optionBtn = screen.getByText(name);
  fireEvent.click(optionBtn);
};

describe("SingleItemRouting", () => {
  beforeEach(() => {
    render(
      <WrapperComponent>
        <SingleItem />
        <LocationDisplay />
      </WrapperComponent>,
      { wrapper: RouterWrapper }
    );
  });
  it("should show home page when 'back' button is clicked", () => {
    const backBtn = screen.getByText("Back");
    fireEvent.click(backBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});

describe("SingItem", () => {
  beforeEach(() => {
    render(<MockSingleItem />, { wrapper: WrapperComponent });
  });
  it("should single item page without crash", () => {
    const singleItemEl = screen.getByTestId("single-item");
    expect(singleItemEl).toBeInTheDocument();
  });
  it("should render 6 topping options", () => {
    const toppingEls = screen.getAllByTestId("Extra Toppings-item-option");
    expect(toppingEls.length).toBe(6);
  });
  it("should render 3 size options", () => {
    const sizeEls = screen.getAllByTestId("Size-item-option");
    expect(sizeEls.length).toBe(3);
  });
});

describe("SingItemWithCart", () => {
  beforeEach(() => {
    render(<MockSingleItemWithCart />, { wrapper: WrapperComponent });
  });
  it("should render cart item 'Macellato' in cart when 'order' button is clicked", () => {
    const orderBtn = screen.getByTestId("order");
    fireEvent.click(orderBtn);
    const cartItemName = within(screen.getByTestId("cart-item")).getByRole(
      "heading",
      {
        level: 3,
      }
    );
    expect(cartItemName).toHaveTextContent("Macellato");
  });
  it("should render cart item 'Macellato' pizza with cheese, onions in cart when 'cheese, onions' toppings are chosen and 'order' button is clicked", () => {
    chooseOption("Cheese");
    chooseOption("Onions");
    const orderBtn = screen.getByTestId("order");
    fireEvent.click(orderBtn);
    const cartItemToppings = within(screen.getByTestId("cart-item")).getByText(
      "Add more cheese, onions"
    );
    expect(cartItemToppings).toBeInTheDocument();
  });
  it("should render cart item LARGE 'Macellato' pizza in cart when 'large' size is chosen and 'order' button is clicked", () => {
    chooseOption("Large");
    const orderBtn = screen.getByTestId("order");
    fireEvent.click(orderBtn);
    const cartItemSize = within(screen.getByTestId("cart-item")).getByText(
      "Large"
    );
    expect(cartItemSize).toBeInTheDocument();
  });
});
