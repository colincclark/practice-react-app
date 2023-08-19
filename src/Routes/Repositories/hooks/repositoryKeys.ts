const repositoryKeys = {
  all: ["repos"] as const,
  lists: () => [...repositoryKeys.all, "lists"] as const,
  list: (name: string) => [...repositoryKeys.all, "list", name] as const
};

export default repositoryKeys;
