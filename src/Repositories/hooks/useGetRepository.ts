import { useQuery } from "@tanstack/react-query";
import { RepositoryType } from "Repositories/types";
import repositoryKeys from "./repositoryKeys";

const fetchRepository = (npmPackage: string): Promise<RepositoryType> =>
  fetch(`https://registry.npmjs.org/${npmPackage}`).then((res) => res.json());

const transformRepoName = (data: RepositoryType): RepositoryType => {
  if (!data) return data;
  data.name = data.name.toUpperCase();
  return data;
};

const useGetRepository = (npmPackage: string) =>
  useQuery({
    queryKey: repositoryKeys.list(),
    queryFn: () => fetchRepository(npmPackage),
    select: transformRepoName,
    enabled: false
  });

export default useGetRepository;
