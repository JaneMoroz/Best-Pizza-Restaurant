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
    expect(testimonial).toHaveClass("activeSlide");
  });
  it("should render first testimonial again after 'next' button is clicked three times", () => {
    const nextBtn = screen.getByTestId("next");
    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    const testimonial = screen.getByTestId("testimonial-0");
    expect(testimonial).toHaveClass("activeSlide");
  });
  it("should render previous testimonial after 'previous' button is clicked", () => {
    const prevBtn = screen.getByTestId("previous");
    fireEvent.click(prevBtn);
    const testimonial = screen.getByTestId("testimonial-2");
    expect(testimonial).toHaveClass("activeSlide");
  });
  it("should render first testimonial with 'read more' button", () => {
    const testimonial = screen.getByTestId("testimonial-0");
    const moreBtn = within(testimonial).getByText("read more");
    expect(moreBtn).toBeInTheDocument();
  });
  it("should render first testimonial with 'show less' button after 'read more' button is clicked", () => {
    const testimonial = screen.getByTestId("testimonial-0");
    const moreBtn = within(testimonial).getByText("read more");
    fireEvent.click(moreBtn);
    expect(within(testimonial).getByText("show less")).toBeInTheDocument();
  });
  it("should render second testimonial WITHOUT 'read more' button", () => {
    const testimonial = screen.getByTestId("testimonial-1");
    const moreBtn = within(testimonial).queryByText("read more");
    expect(moreBtn).not.toBeInTheDocument();
  });
});
