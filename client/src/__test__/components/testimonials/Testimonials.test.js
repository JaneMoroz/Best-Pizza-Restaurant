import { fireEvent, render, screen, within } from "@testing-library/react";
import Testimonials from "../../../components/testimonials/Testimonials";

describe("Testimonials", () => {
  beforeEach(() => {
    render(<Testimonials />);
  });

  it("should render testimonials without crash", () => {
    const testimonials = screen.getByTestId("testimonials");
    expect(testimonials).toBeInTheDocument();
  });
  it("should render 3 testimonials", () => {
    const testimonials = screen.getAllByTestId(/testimonial-/i);
    expect(testimonials.length).toBe(3);
  });
  it("should render next testimonial after 'next' button is clicked", () => {
    const nextBtn = screen.getByTestId("next");
    fireEvent.click(nextBtn);
    const testimonial = screen.getByTestId("testimonial-1");
    expect(testimonial).toBeInTheDocument();
  });
  it("should render previous testimonial after 'previous' button is clicked", () => {
    const prevBtn = screen.getByTestId("previous");
    fireEvent.click(prevBtn);
    const testimonial = screen.getByTestId("testimonial-2");
    expect(testimonial).toBeInTheDocument();
  });
});
