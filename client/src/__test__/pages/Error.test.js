import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { WrapperComponent } from "../../__mocks__/wrapperComponent";
import { LocationDisplay } from "../../utils/LocationDisplay";
import Error from "../../pages/Error";

const RouterWrapper = ({ children }) => (
  <MemoryRouter initialEntries={["/error"]}>{children}</MemoryRouter>
);

const MockError = () => {
  return (
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  );
};

describe("ErrorRouting", () => {
  beforeEach(() => {
    render(
      <WrapperComponent>
        <Error />
        <LocationDisplay />
      </WrapperComponent>,
      { wrapper: RouterWrapper }
    );
  });
  it("should show home page when 'Home' button is clicked", () => {
    const homeBtn = screen.getByText("Home");
    fireEvent.click(homeBtn);
    expect(screen.getByTestId("location-display")).toHaveTextContent("/");
  });
});

describe("ErrorPage", () => {
  beforeEach(() => {
    render(<MockError />, { wrapper: WrapperComponent });
  });
  it("should render error page without crash", () => {
    const errorEl = screen.getByTestId("error");
    expect(errorEl).toBeInTheDocument();
  });
});
