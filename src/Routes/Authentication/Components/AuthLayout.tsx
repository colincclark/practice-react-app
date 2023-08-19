import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section>
      <h2>Authorisation</h2>
      <Outlet />
    </section>
  );
};

export default AuthLayout;