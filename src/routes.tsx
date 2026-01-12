import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SignIn from "./pages/auth/SignIn";
import AuthLayout from "./layouts/AuthLayout";
import SignUp from "./pages/auth/SignUp";
import Table from "./pages/Table";
import Billing from "./pages/billing/Billing";
import SettingsLayout from "./layouts/SettingsLayout";
import AccountSettings from "./components/settings/AccountSettings";
import ProfileSettings from "./components/settings/ProfileSettings";
import NotificationSettings from "./components/settings/NotificationSettings";
import PrivacySettings from "./components/settings/PrivacySettings";
import PreferencesSettings from "./components/settings/PreferencesSettings";

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
        element: <Table />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
    ],
  },
  {
    path: "/settings",
    element: <SettingsLayout />,
    children: [
      { index: true, element: <Navigate to="account" replace /> },
      { path: "account", element: <AccountSettings /> },
      { path: "profile", element: <ProfileSettings /> },
      { path: "notifications", element: <NotificationSettings /> },
      { path: "privacy", element: <PrivacySettings /> },
      { path: "preferences", element: <PreferencesSettings /> },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

export default router;
