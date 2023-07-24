import { useState } from "react";
import useGetRepositories from "Repositories/hooks/useGetRepositories";
import repositoryKeys from "Repositories/hooks/repositoryKeys";
import { queryClient } from "App";
import RepositoriesList from "./RepositoriesList";
import styles from "./SearchForm.module.css";

const RepositoriesSearchForm: React.FC = () => {
  const [term, setTerm] = useState("");

  const getRepositoriesQuery = useGetRepositories(term);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!term) return;

    getRepositoriesQuery.refetch();
  };

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await queryClient.cancelQueries({
      queryKey: repositoryKeys.lists(),
      exact: true
    });
    setTerm(e.target.value);
  };

  return (
    <>
      <h2>Search for repositories</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={(e) => handleSearchChange(e)}
          className={styles.searchInput}
        />
        <button>Search</button>
      </form>
      {(term || getRepositoriesQuery.data) && (
        <RepositoriesList
          data={getRepositoriesQuery.data}
          error={getRepositoriesQuery.error}
          isError={getRepositoriesQuery.isError}
          isFetching={getRepositoriesQuery.isFetching}
        />
      )}
    </>
  );
};

export default RepositoriesSearchForm;
