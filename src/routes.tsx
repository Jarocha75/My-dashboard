import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "tables",
        element: <div>Tables Page</div>,
      },
      {
        path: "billing",
        element: <div>Billing Page</div>,
      },
      {
        path: "rtl",
        element: <div>RTL Page</div>,
      },
      {
        path: "sign-in",
        element: <div>Sign In Page</div>,
      },
      {
        path: "sign-up",
        element: <div>Sign Up Page</div>,
      },
    ],
  },
]);

export default router;
