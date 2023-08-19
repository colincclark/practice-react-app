import {
  SearchRepositoryType,
  SearchRepositoriesResponse
} from "Routes/Repositories/types";

const RepositoriesList: React.FC<SearchRepositoriesResponse> = ({
  data,
  error,
  isError,
  isFetching
}) => {
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
                  href={`/repo/${name}`}
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
    </>
  );
};

export default RepositoriesList;
