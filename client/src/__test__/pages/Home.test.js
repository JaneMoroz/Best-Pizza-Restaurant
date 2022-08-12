import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { WrapperComponent } from "../../__mocks__/wrapperComponent";
import Home from "../../pages/Home";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("HomePage", () => {
  beforeEach(() => {
    render(<MockHome />, { wrapper: WrapperComponent });
  });
  it("should render home page without crash", () => {
    const menuEl = screen.getByTestId("menu");
    expect(menuEl).toBeInTheDocument();
  });
});
