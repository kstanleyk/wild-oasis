import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./layout/app-shell";
import Dashboard from "./pages/dashboard.page";
import Bookings from "./pages/bookings.page";
import Cabins from "./pages/cabins.page";
import Users from "./pages/users.page";
import Settings from "./pages/settings.page";
import Account from "./pages/account.page";
import Login from "./pages/login.page";
import PageNotFound from "./pages/not-found.page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
