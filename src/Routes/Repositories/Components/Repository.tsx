import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";
import { repositoryQuery } from "Routes/Repositories/hooks/useGetRepository";
import { RepositoryParams, RepositoryType } from "Routes/Repositories/types"

const Repository: React.FC = () => {
  // const initialData = useLoaderData() as RepositoryType


  // console.log("initialData: ", initialData)
  const params = useParams() as RepositoryParams;
  const { data } = useQuery(repositoryQuery(params.name))

  // if (isFetching) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   if (error instanceof Error) {
  //     return <p>There was an error: {error.message}</p>;
  //   }
  //   return <p>There was an unknown error</p>;
  // }

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
