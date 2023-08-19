import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const AppLayout = () => {
  return (
    <>
      <Navigation />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default AppLayout;