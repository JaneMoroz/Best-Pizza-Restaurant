import { render, screen, fireEvent, within } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { WrapperComponent } from "../../../__mocks__/wrapperComponent";
import { LocationDisplay } from "../../../utils/LocationDisplay";
import Menu from "../../../components/menu/Menu";

const RouterWrapper = ({ children }) => (
  <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
);

const MockMenu = () => {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
};

describe("MenuRouting", () => {
  beforeEach(() => {
    render(
      <WrapperComponent>
        <Menu />
        <LocationDisplay />
      </WrapperComponent>,
      { wrapper: RouterWrapper }
    );
  });
  it("should show menu item page when menuItem is clicked", () => {
    const menuItemBtn = screen.getAllByTestId("go-to-menu-item-page")[0];
    fireEvent.click(menuItemBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent(
      "/menu/14"
    );
  });
});

const chooseCategory = (category) => {
  const pastaCategoryBtn = screen.getByTestId(`category-${category}`);
  fireEvent.click(pastaCategoryBtn);
};

const chooseFilter = (filter) => {
  const teaFilterBtn = screen.getByTestId(`filter-${filter}`);
  fireEvent.click(teaFilterBtn);
};

const chooseSort = (type, numOfClicks) => {
  let sortBtn;
  if (type === "num") {
    sortBtn = screen.getByTestId("sort-num");
  } else {
    sortBtn = screen.getByTestId("sort-al");
  }
  for (let index = 0; index < numOfClicks; index++) {
    fireEvent.click(sortBtn);
  }
};

const getFirstMenuItemName = () => {
  const firstMenuItems = screen.getAllByTestId("menu-item")[0];
  const firstMenuItemsName = within(firstMenuItems).getByRole("heading", {
    level: 1,
  });
  return firstMenuItemsName;
};

describe("Menu", () => {
  beforeEach(() => {
    render(<MockMenu />, { wrapper: WrapperComponent });
  });
  it("should render menu without crash", () => {
    const menuEl = screen.getByTestId("menu");
    expect(menuEl).toBeInTheDocument();
  });
  it("should render 6 menu items", () => {
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(6);
  });
});

describe("MenuPagination", () => {
  beforeEach(() => {
    render(<MockMenu />, { wrapper: WrapperComponent });
  });
  it("should render pagination", () => {
    const paginationEl = screen.getByTestId("pagination");
    expect(paginationEl).toBeInTheDocument();
  });
  it("should render 2 page buttons", () => {
    const pageBtns = screen.getAllByTestId(/page-/i);
    expect(pageBtns.length).toBe(2);
  });
  it("should render 4 menu items after 'page 2' button is clicked", () => {
    const pageTwoBtn = screen.getByTestId("page-2");
    fireEvent.click(pageTwoBtn);
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(4);
  });
  it("should render 4 menu items after 'next' button is clicked", () => {
    const nextBtn = screen.getByTestId("next");
    fireEvent.click(nextBtn);
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(4);
  });
  it("should render 6 menu items after 'next' button is clicked twice", () => {
    const nextBtn = screen.getByTestId("next");
    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(6);
  });
  it("should render 4 menu items after 'previous' button is clicked", () => {
    const prevBtn = screen.getByTestId("prev");
    fireEvent.click(prevBtn);
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(4);
  });
});

describe("MenuCategoriesAndFilters", () => {
  beforeEach(() => {
    render(<MockMenu />, { wrapper: WrapperComponent });
  });
  it("should render 6 categories", () => {
    const categoryEls = screen.getAllByTestId(/category/i);
    expect(categoryEls.length).toBe(5);
  });
  it("should render 5 filters", () => {
    const filterEls = screen.getAllByTestId(/filter/i);
    expect(filterEls.length).toBe(5);
  });
  it("should render 4 menu items when 'pasta' category is clicked", () => {
    chooseCategory("pasta");
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(4);
  });
  it("should render 2 menu items when 'coffee' filter is clicked", () => {
    chooseFilter("coffee");
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(1);
  });
  it("should render 2 menu items when 'pasta' category and 'gluten-free' filter is clicked", () => {
    chooseCategory("pasta");
    chooseFilter("gluten-free");
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(2);
  });
});

describe("MenuSorting", () => {
  beforeEach(() => {
    render(<MockMenu />, { wrapper: WrapperComponent });
  });
  it("should render 2 sorting btns", () => {
    const sortBtns = screen.getAllByTestId(/sort/i);
    expect(sortBtns.length).toBe(2);
  });
  it("should render menu items where the first menu item is 'Assorti pizza'", () => {
    expect(getFirstMenuItemName()).toHaveTextContent("Assorti");
  });
  it("should render menu items where the first menu item is 'Wild Truffle' after sort(z-a) is clicked", () => {
    chooseSort("al", 1);
    expect(getFirstMenuItemName()).toHaveTextContent("Wild Truffle");
  });
  it("should render menu items where the first menu item is 'Caffè Latte' after sort(1-9) is clicked", () => {
    chooseSort("num", 1);
    expect(getFirstMenuItemName()).toHaveTextContent("Caffè Latte");
  });
  it("should render menu items where the first menu item is 'Spritz' after sort(9-1) is clicked", () => {
    chooseSort("num", 2);
    expect(getFirstMenuItemName()).toHaveTextContent("Spritz");
  });
  it("should render menu items where the first menu item is 'Fornino Pasta' after 'pasta' category and sort(9-1) are clicked", () => {
    chooseCategory("pasta");
    chooseSort("num", 2);
    expect(getFirstMenuItemName()).toHaveTextContent("Fornino Pasta");
  });
});
