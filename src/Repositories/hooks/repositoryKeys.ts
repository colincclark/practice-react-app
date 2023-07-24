const repositoryKeys = {
  all: ["repos"] as const,
  lists: () => [...repositoryKeys.all, "lists"] as const,
  list: () => [...repositoryKeys.all, "list"] as const
};

export default repositoryKeys;
