import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth"
import { JournalPage } from "../journal/pages/JournalPage";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="auth/login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />
    </Routes>
  );
};
