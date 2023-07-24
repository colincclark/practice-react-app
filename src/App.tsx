import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RepositoriesSearchForm from "Repositories/Components/SearchForm";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import styles from "./App.module.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className={styles.title}>My Example App</h1>
      <RepositoriesSearchForm />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export { queryClient };
export default App;
