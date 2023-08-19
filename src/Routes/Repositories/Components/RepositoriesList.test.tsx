import user from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import {
  dataNoRepositories,
  dataOneRepository,
  dataRepository
} from "test-utils/mocks/repositories";
import renderWithClient from "test-utils/utils";
import RepositoriesList from "./RepositoriesList";

describe("RepositoriesList", () => {
  test("render the loading state", () => {
    renderWithClient(
      <RepositoriesList
        data={dataNoRepositories}
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
      <RepositoriesList
        data={dataNoRepositories}
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
      <RepositoriesList
        data={dataNoRepositories}
        error={null}
        isError={true}
        isFetching={false}
      />
    );

    const errorElement = screen.getByText(/there was an unknown error/i);
    expect(errorElement).toBeInTheDocument();
  });

  test("render repository on click of repo listitem", async () => {
    renderWithClient(
      <RepositoriesList
        data={dataOneRepository}
        error={null}
        isError={false}
        isFetching={false}
      />
    );

    const repoListItemElement = await screen.findByText(/test-repo/i);
    await user.click(repoListItemElement);

    const headerElement = await screen.findByRole("heading");
    expect(headerElement).toHaveTextContent(dataRepository.name.toUpperCase());
    expect(screen.getByText(dataRepository.description)).toBeInTheDocument();
  });
});
