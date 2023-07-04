import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth"

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />
    </Routes>
  );
};
