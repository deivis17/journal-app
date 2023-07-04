import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<PublicRoutes/>} />
      <Route path="*" element={<PrivateRoutes/>} />
    </Routes>
  );
};
