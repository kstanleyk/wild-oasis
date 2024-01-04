import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard.page";
import Bookings from "./pages/bookings.page";
import PageNotFound from "./pages/not-found.page";
import Login from "./pages/login.page";
import Account from "./pages/account.page";
import Settings from "./pages/settings.page";
import Users from "./pages/users.page";
import Cabins from "./pages/cabins.page";
import GlobalStyles from "./styles/global-styles";
import AppShell from "./layout/app-shell";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}
