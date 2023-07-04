import { Route, Routes } from "react-router-dom";
import { JournalPage } from "../journal";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage/>} />
    </Routes>
  );
};
