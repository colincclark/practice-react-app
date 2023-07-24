import { useState } from "react";
import useGetRepository from "Repositories/hooks/useGetRepository";
import {
  SearchRepositoryType,
  SearchRepositoriesResponse
} from "Repositories/types";
import Repository from "./Repository";

const RepositoriesList: React.FC<SearchRepositoriesResponse> = ({
  data,
  error,
  isError,
  isFetching
}) => {
  const [selectedRepoName, setSelectedRepoName] = useState("");

  const getRepositoryQuery = useGetRepository(selectedRepoName);

  const handlePackageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    getRepositoryQuery.refetch();
  };

  const handlePackageMouseOver = (name: string) => {
    setSelectedRepoName(name);
  };

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isError) {
    if (error instanceof Error) {
      return <p>There was an error: {error.message}</p>;
    }
    return <p>There was an unknown error</p>;
  }

  return (
    <>
      {data && data?.objects && data?.objects.length > 0 && (
        <ul>
          {data.objects.map((repo: SearchRepositoryType, key: number) => {
            const {
              package: { name }
            } = repo;
            return (
              <li key={`${name}${key}`}>
                <a
                  href="#"
                  onClick={(e) => handlePackageClick(e)}
                  onMouseOver={() => handlePackageMouseOver(name)}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      {data && data?.objects && (
        <p>Returned {data?.objects.length} repositories</p>
      )}
      {selectedRepoName && (
        <Repository
          data={getRepositoryQuery.data}
          error={getRepositoryQuery.error}
          isError={getRepositoryQuery.isError}
          isFetching={getRepositoryQuery.isFetching}
        />
      )}
    </>
  );
};

export default RepositoriesList;
