import App from "@/App";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import LoginFormComponent from "@/module/auth/LoginForm/LoginForm";
import SignupForm from "@/module/auth/SignupForm/SignupForm";
import Dashboard from "@/module/home/Dashboard/Dashboard";
import Home from "@/module/home/Home";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: Home,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
        ],
      },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          {
            path: "login",
            Component: LoginFormComponent,
          },
          {
            path: "signup",
            Component: SignupForm,
          },
        ],
      },
    ],
  },
]);

export default routes;
