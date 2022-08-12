import { fireEvent, render, screen, within } from "@testing-library/react";
import Questions from "../../../components/questions/Questions";

describe("Questions", () => {
  beforeEach(() => {
    render(<Questions />);
  });

  it("should render questions without crash", () => {
    const questions = screen.getByTestId("questions");
    expect(questions).toBeInTheDocument();
  });
  it("should render 3 questions", () => {
    const questions = screen.getAllByTestId("question");
    expect(questions.length).toBe(3);
  });
  it("should render answer when 'toggle' button is clicked", () => {
    const question = screen.getAllByTestId("question")[0];
    const toggleBtn = within(question).getByRole("button");
    fireEvent.click(toggleBtn);
    const paragraph = within(question).getByTestId("answer");
    expect(paragraph).toBeInTheDocument();
  });
  it("should NOT render answer when 'plus' button is clicked twice", () => {
    const question = screen.getAllByTestId("question")[0];
    const toggleBtn = within(question).getByRole("button");
    fireEvent.click(toggleBtn);
    fireEvent.click(toggleBtn);
    const paragraph = within(question).queryByTestId("answer");
    expect(paragraph).not.toBeInTheDocument();
  });
});
