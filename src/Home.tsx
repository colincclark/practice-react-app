import RepositoriesSearchForm from "Repositories/Components/SearchForm";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>My Example App</h1>
      <RepositoriesSearchForm />
    </>
  );
};

export default Home;
