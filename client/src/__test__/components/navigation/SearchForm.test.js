import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { WrapperComponent } from "../../../__mocks__/wrapperComponent";
import { BrowserRouter } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import Navbar from "../../../components/navigation/Navbar";

const MockSearchForm = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
    </BrowserRouter>
  );
};

describe("SearchForm", () => {
  beforeEach(() => {
    render(<MockSearchForm />, { wrapper: WrapperComponent });
  });
  it("should render without crash", () => {
    const searchFormElement = screen.getByTestId("search-from");
    expect(searchFormElement).toBeInTheDocument();
  });
  it("should update 'search-input' input value on change", () => {
    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, {
      target: { value: "pizza" },
    });
    expect(inputElement.value).toBe("pizza");
  });
  it("should show one menu-item when 'avocado' is typed", () => {
    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, {
      target: { value: "avocado" },
    });
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(1);
  });
  it("should show 'Nothing found' message when 'avocadoooo' is typed", () => {
    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, {
      target: { value: "avocadoooo" },
    });
    const message = screen.getByText("Nothing found!");
    expect(message).toBeInTheDocument();
  });
  it("should show 6 menu items when search-form gets closed", () => {
    const searchBtnElement = screen.getByTestId("search-btn");
    fireEvent.click(searchBtnElement);
    const inputElement = screen.getByTestId("search-input");
    fireEvent.change(inputElement, {
      target: { value: "avocado" },
    });
    const searchCloseBtn = screen.getByTestId("search-close");
    fireEvent.click(searchCloseBtn);
    const menuItems = screen.getAllByTestId("menu-item");
    expect(menuItems.length).toBe(6);
  });
});
