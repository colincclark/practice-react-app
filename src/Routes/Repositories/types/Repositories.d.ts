import DefaultQueryResponse from "utils/hooks";

export type RepositoryParams = {
  name: string;
};

export type RepositoryType =
  | {
      name: string;
      description: string;
    }
  | undefined;

export type SearchRepositoryType = {
  package: {
    name: string;
  };
};

export type SearchRepositoriesType =
  | {
      objects: SearchRepositoryType[];
    }
  | undefined;

export interface RepositoryResponse extends DefaultQueryResponse {
  data: RepositoryType;
}

export interface SearchRepositoriesResponse extends DefaultQueryResponse {
  data: SearchRepositoriesType;
}
