import { RepositoryResponse } from "Repositories/types";

const Repository: React.FC<RepositoryResponse> = ({
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

  if (data) {
    return (
      <>
        <h4>{data.name}</h4>
        <p>{data.description}</p>
      </>
    );
  }

  return null;
};

export default Repository;
