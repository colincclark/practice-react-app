import { useQuery } from "@tanstack/react-query";
import { SearchRepositoriesType } from "Repositories/types";
import repositoryKeys from "./repositoryKeys";

const fetchRepositories = (term: string): Promise<SearchRepositoriesType> =>
  fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`).then((res) =>
    res.json()
  );

const useGetRepositories = (term: string) =>
  useQuery({
    queryKey: repositoryKeys.lists(),
    queryFn: () => fetchRepositories(term),
    enabled: false
  });

export default useGetRepositories;
