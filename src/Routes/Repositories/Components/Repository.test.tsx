import { screen } from "@testing-library/react";
import renderWithClient from "test-utils/utils";
import Repository from "./Repository";

describe("Repository", () => {
  test("render the loading state", () => {
    renderWithClient(
      <Repository
        data={undefined}
        error={null}
        isError={false}
        isFetching={true}
      />
    );

    const loadingElement = screen.getByText(/loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  test("render a custom Error message", async () => {
    const message = "This is a test error";
    renderWithClient(
      <Repository
        data={undefined}
        error={new Error(message)}
        isError={true}
        isFetching={false}
      />
    );

    const errorElement = screen.getByText(
      new RegExp(`there was an error: ${message}`, "i")
    );
    expect(errorElement).toBeInTheDocument();
  });

  test("render a default Error message", async () => {
    renderWithClient(
      <Repository
        data={undefined}
        error={null}
        isError={true}
        isFetching={false}
      />
    );

    const errorElement = screen.getByText(/there was an unknown error/i);
    expect(errorElement).toBeInTheDocument();
  });
});
