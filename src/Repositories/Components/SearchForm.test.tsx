import user from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import renderWithClient from "tests/utils";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  test("initially renders the heading with no list", () => {
    renderWithClient(<SearchForm />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();

    const listElement = screen.queryByRole("list");
    expect(listElement).not.toBeInTheDocument();
  });

  test("calls the API and returns zero repos", async () => {
    renderWithClient(<SearchForm />);

    const inputElement = screen.getByRole("textbox");
    await user.clear(inputElement);
    await user.type(inputElement, "zero");

    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);

    const listElement = screen.queryByRole("list");
    expect(listElement).not.toBeInTheDocument();

    expect(
      await screen.findByText(/returned 0 repositories/i)
    ).toBeInTheDocument();
  });

  test("calls the API and returns one repo", async () => {
    renderWithClient(<SearchForm />);

    const inputElement = screen.getByRole("textbox");
    await user.clear(inputElement);
    await user.type(inputElement, "react");

    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);

    const listElement = await screen.findByRole("list");
    expect(listElement).toBeInTheDocument();

    expect(await screen.findByText(/test-repo/i)).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(1);
    expect(screen.getByText(/returned 1 repositories/i)).toBeInTheDocument();

    // data should persist when textbox cleared
    await user.clear(inputElement);
    expect(screen.getAllByRole("listitem").length).toBe(1);
  });

  test("calls the API and returns an error", async () => {
    renderWithClient(<SearchForm />);

    const inputElement = screen.getByRole("textbox");
    await user.clear(inputElement);
    await user.type(inputElement, "error");

    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);

    const listElement = screen.queryByRole("list");
    expect(listElement).not.toBeInTheDocument();

    expect(await screen.findByText(/there was an error/i)).toBeInTheDocument();
  });
});
