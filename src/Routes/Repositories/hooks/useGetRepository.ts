import { useQuery } from "@tanstack/react-query";
import { RepositoryType } from "Routes/Repositories/types";
import repositoryKeys from "./repositoryKeys";

const fetchRepository = (npmPackage: string): Promise<RepositoryType> =>
  fetch(`https://registry.npmjs.org/${npmPackage}`).then((res) => res.json());

const transformRepoName = (data: RepositoryType): RepositoryType => {
  if (!data) return data;
  data.name = data.name.toUpperCase();
  return data;
};

export const repositoryQuery = (name: string) => ({
  queryKey: repositoryKeys.list(name),
  queryFn: () => fetchRepository(name),
  select: transformRepoName
})

export const repositoryLoader =
  (queryClient: any) =>
    async ({ params }: any) => {

      const query = repositoryQuery(params.name)

      return (
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query))
      )
    }

const useGetRepositoryQuery = (name: string) =>
  useQuery(repositoryQuery(name))

export default useGetRepositoryQuery;
