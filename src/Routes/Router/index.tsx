import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "Routes/Home";
import About from "Routes/About";
import AppLayout from "Routes/Router/AppLayout";
import AuthLayout from "Routes/Authentication/Components/AuthLayout";
import Register from "Routes/Authentication/Components/Register";
import Repository from "Routes/Repositories/Components/Repository";
import SearchForm from "Routes/Repositories/Components/SearchForm";
import { repositoryLoader } from "Routes/Repositories/hooks/useGetRepository";

const router = (queryClient: any) => createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      {
        path: "/repos/:name",
        element: <Repository />,
        loader: repositoryLoader(queryClient)
      },
      { path: "/repos/search", Component: SearchForm },
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            path: "/register",
            element: <Register />
          }
        ]
      }
    ]
  }
]);

export default function Router(queryClient: any) {
  return <RouterProvider router={router(queryClient)} />;
}
